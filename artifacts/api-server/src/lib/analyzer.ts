type GithubRepository = {
  html_url: string;
  name: string;
  owner: { login: string };
  default_branch: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
  created_at: string;
  license: { spdx_id: string | null } | null;
};

type NpmPackage = {
  "dist-tags"?: { latest?: string };
  deprecated?: string | false;
};

type PackageManifest = {
  name?: string;
  engines?: { node?: string };
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  packageManager?: string;
};

type Finding = {
  name: string;
  current: string;
  recommended: string;
  kind: "dependency" | "devDependency";
  risk: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  action: string;
  deprecated: boolean;
  reason: string;
};

type GithubContent = {
  content: string;
  encoding: string;
};

const GITHUB_HEADERS = {
  accept: "application/vnd.github+json",
  "user-agent": "DeadProjectRescue/0.1",
};

const MAX_DEPENDENCIES_TO_CHECK = 40;

export class AnalysisError extends Error {
  readonly statusCode: 400 | 404 | 502;

  constructor(message: string, statusCode: 400 | 404 | 502) {
    super(message);
    this.name = "AnalysisError";
    this.statusCode = statusCode;
  }
}

function parseGithubUrl(repositoryUrl: string): { owner: string; repo: string } {
  let parsed: URL;
  try {
    parsed = new URL(repositoryUrl);
  } catch {
    throw new AnalysisError("Enter a valid GitHub repository URL.", 400);
  }

  if (parsed.protocol !== "https:" || parsed.hostname !== "github.com") {
    throw new AnalysisError("Only public github.com repository URLs are supported.", 400);
  }

  const segments = parsed.pathname.split("/").filter(Boolean);
  if (segments.length < 2 || segments.length > 3 || segments[2] !== undefined && segments[2] !== "") {
    throw new AnalysisError("Use a repository URL in the form https://github.com/owner/repository.", 400);
  }

  return { owner: segments[0], repo: segments[1].replace(/\.git$/, "") };
}

async function githubJson<T>(path: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: GITHUB_HEADERS,
  });

  if (response.status === 404) {
    throw new AnalysisError("The GitHub repository or requested manifest was not found.", 404);
  }
  if (!response.ok) {
    throw new AnalysisError("GitHub could not be reached right now. Please try again.", 502);
  }

  return (await response.json()) as T;
}

async function readGithubFile(
  owner: string,
  repo: string,
  path: string,
  ref: string,
): Promise<string | null> {
  try {
    const content = await githubJson<GithubContent>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${path}?ref=${encodeURIComponent(ref)}`,
    );
    if (content.encoding !== "base64") return null;
    return Buffer.from(content.content.replace(/\n/g, ""), "base64").toString("utf8");
  } catch (error) {
    if (error instanceof AnalysisError && error.statusCode === 404) return null;
    throw error;
  }
}

function parseManifest(raw: string): PackageManifest {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("package.json must contain an object");
    }
    return parsed as PackageManifest;
  } catch {
    throw new AnalysisError("The repository package.json is invalid JSON.", 400);
  }
}

function majorVersion(version: string): number | null {
  const match = version.match(/(?:^|[^\d])(\d+)(?:\.\d+)?/);
  return match ? Number(match[1]) : null;
}

function normalizedVersion(version: string): string {
  const match = version.match(/\d+(?:\.\d+){0,2}/);
  return match?.[0] ?? version;
}

function riskFor(
  name: string,
  current: string,
  latest: string,
  deprecated: boolean,
): { risk: Finding["risk"]; reason: string; action: string } {
  const currentMajor = majorVersion(current);
  const latestMajor = majorVersion(latest);
  const isFramework = ["react", "react-dom", "next", "typescript", "eslint"].includes(name);
  const majorJump =
    currentMajor !== null && latestMajor !== null ? latestMajor - currentMajor : 0;

  if (deprecated) {
    return {
      risk: "CRITICAL",
      reason: "The npm registry marks this package as deprecated.",
      action: "Replace before upgrading",
    };
  }
  if (majorJump >= 2 || (isFramework && majorJump >= 1)) {
    return {
      risk: "CRITICAL",
      reason: `This is a ${majorJump}-major version jump${isFramework ? " for a framework or toolchain package" : ""}.`,
      action: "Stage migration",
    };
  }
  if (majorJump === 1) {
    return {
      risk: "HIGH",
      reason: "A major version change may include breaking API or runtime changes.",
      action: "Review breaking changes",
    };
  }
  if (currentMajor === 0 || majorJump < 0) {
    return {
      risk: "MEDIUM",
      reason: "The current version is pre-1.0 or could not be compared reliably.",
      action: "Review before upgrade",
    };
  }
  return {
    risk: "LOW",
    reason: "The latest release is a compatible minor or patch update.",
    action: "Upgrade",
  };
}

async function inspectDependency(
  name: string,
  current: string,
  kind: Finding["kind"],
): Promise<Finding> {
  const response = await fetch(
    `https://registry.npmjs.org/${encodeURIComponent(name)}`,
    { headers: { accept: "application/json", "user-agent": GITHUB_HEADERS["user-agent"] } },
  );

  if (!response.ok) {
    return {
      name,
      current,
      recommended: current,
      kind,
      risk: "MEDIUM",
      action: "Manual review",
      deprecated: false,
      reason: "The npm registry did not return package metadata.",
    };
  }

  const metadata = (await response.json()) as NpmPackage;
  const latest = metadata["dist-tags"]?.latest ?? current;
  const deprecated = Boolean(metadata.deprecated);
  const isOutdated = normalizedVersion(current) !== normalizedVersion(latest);
  const risk = riskFor(name, current, latest, deprecated);

  return {
    name,
    current,
    recommended: latest,
    kind,
    risk: isOutdated ? risk.risk : "LOW",
    action: isOutdated ? risk.action : "Keep",
    deprecated,
    reason: isOutdated ? risk.reason : "The declared version matches the current npm latest release.",
  };
}

function packageManager(
  packageJson: PackageManifest,
  lockfiles: Record<string, string | null>,
): string {
  if (packageJson.packageManager?.startsWith("pnpm")) return "pnpm";
  if (lockfiles["pnpm-lock.yaml"]) return "pnpm";
  if (lockfiles["yarn.lock"]) return "yarn";
  if (lockfiles["package-lock.json"]) return "npm";
  return "npm";
}

function frameworkList(manifest: PackageManifest): string[] {
  const all = { ...manifest.dependencies, ...manifest.devDependencies };
  const frameworks: string[] = [];
  if (all.next) frameworks.push("Next.js");
  if (all.react) frameworks.push("React");
  if (all.express) frameworks.push("Express");
  if (all.typescript) frameworks.push("TypeScript");
  if (all.eslint) frameworks.push("ESLint");
  return frameworks;
}

function scoreHealth(findings: Finding[], currentNode: string): {
  current: number;
  projected: number;
  breakdown: {
    dependencies: number;
    security: number;
    buildHealth: number;
    frameworkFreshness: number;
    nodeCompatibility: number;
  };
} {
  const outdated = findings.filter(
    (finding) => normalizedVersion(finding.current) !== normalizedVersion(finding.recommended),
  ).length;
  const critical = findings.filter((finding) => finding.risk === "CRITICAL").length;
  const high = findings.filter((finding) => finding.risk === "HIGH").length;
  const frameworkFreshness = Math.max(
    10,
    100 - findings.filter((finding) => ["next", "react", "typescript", "eslint"].includes(finding.name) && finding.risk !== "LOW").length * 18,
  );
  const dependencies = Math.max(10, 100 - outdated * 2 - critical * 8 - high * 4);
  const nodeCompatibility = /^(1[0-9]|20|21)(?:\D|$)/.test(currentNode)
    ? 45
    : currentNode === "Not detected"
      ? 55
      : 80;
  const security = 50;
  const buildHealth = 35;
  const current = Math.round(
    (dependencies + security + buildHealth + frameworkFreshness + nodeCompatibility) / 5,
  );
  const projected = Math.min(
    96,
    Math.round((Math.max(dependencies, 86) + security + buildHealth + Math.max(frameworkFreshness, 88) + 92) / 5),
  );
  return {
    current,
    projected,
    breakdown: { dependencies, security, buildHealth, frameworkFreshness, nodeCompatibility },
  };
}

export async function analyzeRepository(repositoryUrl: string) {
  const { owner, repo } = parseGithubUrl(repositoryUrl);
  const repository = await githubJson<GithubRepository>(
    `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
  );
  const ref = repository.default_branch;
  const [packageJsonRaw, nvmrc, nodeVersion, packageLock, yarnLock, pnpmLock] =
    await Promise.all([
      readGithubFile(owner, repo, "package.json", ref),
      readGithubFile(owner, repo, ".nvmrc", ref),
      readGithubFile(owner, repo, ".node-version", ref),
      readGithubFile(owner, repo, "package-lock.json", ref),
      readGithubFile(owner, repo, "yarn.lock", ref),
      readGithubFile(owner, repo, "pnpm-lock.yaml", ref),
    ]);

  if (!packageJsonRaw) {
    throw new AnalysisError("This repository does not contain a package.json manifest.", 404);
  }

  const manifest = parseManifest(packageJsonRaw);
  const lockfiles = {
    "package-lock.json": packageLock,
    "yarn.lock": yarnLock,
    "pnpm-lock.yaml": pnpmLock,
  };
  const node = nvmrc?.trim() || nodeVersion?.trim() || manifest.engines?.node || "Not detected";
  const dependencies = [
    ...Object.entries(manifest.dependencies ?? {}).map(([name, current]) => ({
      name,
      current,
      kind: "dependency" as const,
    })),
    ...Object.entries(manifest.devDependencies ?? {}).map(([name, current]) => ({
      name,
      current,
      kind: "devDependency" as const,
    })),
  ].slice(0, MAX_DEPENDENCIES_TO_CHECK);

  const findings = await Promise.all(
    dependencies.map(({ name, current, kind }) => inspectDependency(name, current, kind)),
  );
  findings.sort((a, b) => {
    const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
    return order[a.risk] - order[b.risk] || a.name.localeCompare(b.name);
  });

  const health = scoreHealth(findings, node);
  const outdated = findings.filter(
    (finding) => normalizedVersion(finding.current) !== normalizedVersion(finding.recommended),
  ).length;
  const deprecated = findings.filter((finding) => finding.deprecated).length;
  const migrationRisks = findings.filter((finding) => finding.risk === "HIGH" || finding.risk === "CRITICAL").length;
  const confidence = Math.max(
    18,
    Math.min(
      96,
      100 -
        findings.filter((finding) => finding.risk === "CRITICAL").length * 18 -
        findings.filter((finding) => finding.risk === "HIGH").length * 8 -
        findings.filter((finding) => finding.risk === "MEDIUM").length * 2,
    ),
  );
  const frameworks = frameworkList(manifest);
  const allPackages = { ...manifest.dependencies, ...manifest.devDependencies };

  return {
    repository: {
      url: repository.html_url,
      owner: repository.owner.login,
      name: repository.name,
      defaultBranch: repository.default_branch,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      openIssues: repository.open_issues_count,
      lastUpdated: repository.updated_at,
      ageYears: Math.max(0, Number(((Date.now() - new Date(repository.created_at).getTime()) / 31_557_600_000).toFixed(1))),
      license: repository.license?.spdx_id ?? null,
    },
    stack: {
      runtime: "Node.js",
      packageManager: packageManager(manifest, lockfiles),
      frameworks,
      language: allPackages.typescript ? "TypeScript" : "JavaScript",
      currentNode: node,
      recommendedNode: "22 LTS",
    },
    health,
    dependencies: findings,
    counts: {
      outdated,
      deprecated,
      security: 0,
      migrationRisks,
    },
    migrationConfidence: confidence,
    migrationStages: [
      { name: "Repository analysis", status: "ready", detail: "Manifest and repository metadata inspected." },
      { name: "Dependency resolution", status: migrationRisks > 0 ? "review" : "ready", detail: `${outdated} package updates compared against npm metadata.` },
      { name: "Runtime upgrade", status: node === "22" || node.includes("22") ? "ready" : "review", detail: `Target runtime is Node.js 22 LTS.` },
      { name: "Framework migration", status: frameworks.some((item) => ["React", "Next.js"].includes(item)) && migrationRisks > 0 ? "review" : "ready", detail: "Framework changes are staged when major versions differ." },
      { name: "Automated code fixes", status: "blocked", detail: "Codemods are not applied during static analysis." },
      { name: "Build validation", status: "blocked", detail: "Build commands are not executed against untrusted repositories." },
      { name: "PR ready", status: "blocked", detail: "Dry-run report is ready; GitHub write access is a later milestone." },
    ],
    validations: [
      { name: "Install", status: "blocked", detail: "Not run: package install scripts are untrusted." },
      { name: "Lint", status: "blocked", detail: "Not run: repository code is not executed." },
      { name: "Typecheck", status: "blocked", detail: "Not run: repository code is not executed." },
      { name: "Tests", status: "blocked", detail: "Not run: repository code is not executed." },
      { name: "Build", status: "blocked", detail: "Not run: repository code is not executed." },
    ],
    notes: [
      "This report is based on public GitHub metadata, package.json, runtime files, and npm registry metadata.",
      "Security findings are 0 known findings because a dependency audit was not executed in this safe static-analysis pass.",
      "Install, build, lint, typecheck, and test commands are intentionally blocked until isolated sandbox execution is available.",
      dependencies.length < Object.keys(manifest.dependencies ?? {}).length + Object.keys(manifest.devDependencies ?? {}).length
        ? `Only the first ${MAX_DEPENDENCIES_TO_CHECK} dependencies were checked in this pass.`
        : "All declared dependencies were checked against the npm registry.",
    ],
  };
}