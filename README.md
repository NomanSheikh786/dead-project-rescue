# DeadProject Rescue
Developer github: Nomansheikh786

> Bring abandoned JavaScript projects back to life.

[![License: MIT](https://img.shields.io/badge/license-MIT-1f2937.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22%20LTS-339933.svg)](https://nodejs.org/)

DeadProject Rescue is an open-source developer tool for understanding and modernizing aging JavaScript and TypeScript repositories. It inspects public GitHub repository metadata, package manifests, runtime files, lockfiles, and npm registry metadata, then produces a conservative migration plan before any code is changed.

## Why this project exists

Thousands of useful open-source repositories become difficult to use because their dependencies, runtimes, frameworks, and build systems fall behind. DeadProject Rescue helps developers understand what has drifted and what can be modernized safely instead of letting useful projects disappear.

## Current status

The first MVP provides a safe, read-only analysis flow:

- Public GitHub repository inspection
- `package.json` and lockfile detection
- Node.js, package manager, React, Next.js, Express, TypeScript, and ESLint detection
- npm registry version comparison
- Deprecated dependency detection
- Dependency risk scoring
- Project health score and migration confidence
- Staged migration recommendations
- Validation gates for install, lint, typecheck, tests, and build
- Responsive web dashboard

The analyzer does **not** install dependencies or execute repository code. GitHub OAuth, isolated sandbox execution, codemods, CLI commands, and automatic pull requests are planned follow-up milestones.

## Screenshots

The dashboard preview is available in the Replit project. Screenshots can be added here as the interface evolves.

## Architecture

```text
deadproject-rescue/
├── artifacts/
│   ├── api-server/              # Express API and analysis engine
│   └── deadproject-rescue/      # React + Vite web dashboard
├── lib/
│   ├── api-client-react/        # Generated React Query client
│   ├── api-spec/                # OpenAPI source of truth
│   ├── api-zod/                 # Generated request/response validation
│   └── db/                      # Shared database package
├── scripts/                     # Workspace utility scripts
├── README.md
├── replit.md
└── pnpm-workspace.yaml
```

The API contract lives in `lib/api-spec/openapi.yaml`. The analyzer is intentionally separate from the dashboard so it can later be reused by a CLI and isolated migration workers.

## Security model

Repository content is untrusted input. The current MVP only reads public metadata and manifest files. It does not:

- Run package install scripts
- Run repository build, test, or lint commands
- Execute source code
- Modify the repository
- Create branches, commits, or pull requests

Future execution features must run in an isolated, resource-limited environment with restricted filesystem and network access, explicit timeouts, and structured audit logs.

## Installation

Requirements:

- Node.js 22 or newer
- pnpm

Clone and install:

```bash
git clone https://github.com/your-org/deadproject-rescue.git
cd deadproject-rescue
pnpm install
```

Run the API server:

```bash
pnpm --filter @workspace/api-server run dev
```

Run the dashboard in a second terminal:

```bash
pnpm --filter @workspace/deadproject-rescue run dev
```

Run the workspace typecheck:

```bash
pnpm run typecheck
```

## Web dashboard

Open the dashboard, paste a public GitHub repository URL, and select **Analyze repository**.

Example:

```text
https://github.com/axios/axios
```

The dashboard shows:

- Detected runtime and framework stack
- Current and projected health scores
- Dependency findings and risk levels
- Migration stages
- Validation gates
- Notes describing what the safe scan did and did not execute

## API

The MVP exposes a read-only analysis endpoint:

```http
POST /api/analysis
Content-Type: application/json
```

Request:

```json
{
  "repositoryUrl": "https://github.com/axios/axios"
}
```

The endpoint returns repository metadata, detected stack information, dependency findings, health scores, migration stages, validation status, and operator notes.

## CLI roadmap

The planned CLI interface is:

```bash
npx deadproject-rescue analyze https://github.com/user/repository
npx deadproject-rescue plan https://github.com/user/repository
npx deadproject-rescue migrate --dry-run
npx deadproject-rescue validate
```

These commands are not included in the current MVP yet. The analyzer is being kept separate from the dashboard so the CLI can reuse the same engine without duplicating logic.

## Roadmap

- [x] Public repository metadata analysis
- [x] Dependency freshness comparison
- [x] Migration risk scoring
- [x] Project health scoring
- [x] Read-only web dashboard
- [ ] Local repository analysis
- [ ] Dry-run dependency diff generation
- [ ] AST-based codemods
- [ ] Isolated sandbox execution
- [ ] CLI package
- [ ] GitHub OAuth or GitHub App integration
- [ ] Branch and commit creation
- [ ] Pull request generation

## Contributing

Contributions are welcome. Before opening a pull request:

1. Keep the analyzer independent from the UI.
2. Add or update OpenAPI contracts before changing generated clients.
3. Keep migrations deterministic and reproducible.
4. Prefer conservative recommendations over blanket latest-version upgrades.
5. Never execute untrusted repository code outside an isolated sandbox.
6. Run `pnpm run typecheck`.

## Sponsorship

If DeadProject Rescue helps revive a project you depend on, consider sponsoring its development. Sponsorship helps fund safer sandbox execution, ecosystem support, and long-term maintenance.

## License

This project is licensed under the MIT License.