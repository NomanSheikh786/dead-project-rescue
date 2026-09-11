# DeadProject Rescue
Develop by Github: NomanSheikh786

DeadProject Rescue analyzes aging public JavaScript and TypeScript repositories and produces a conservative, reviewable modernization plan.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/deadproject-rescue` — React/Vite dashboard and analysis workflow.
- `artifacts/api-server/src/lib/analyzer.ts` — safe static repository analyzer.
- `artifacts/api-server/src/routes/analysis.ts` — API route for repository analysis.
- `lib/api-spec/openapi.yaml` — source of truth for the analysis API contract.
- `lib/api-client-react` and `lib/api-zod` — generated client and validation types.

## Architecture decisions

- Repository analysis begins with public GitHub metadata, package.json, runtime files, lockfiles, and npm registry metadata.
- The MVP never installs dependencies or executes repository code; validation is reported as blocked until isolated sandbox execution exists.
- Dependency recommendations are staged by risk instead of applying a blanket latest-version upgrade.
- GitHub write access, codemods, sandbox execution, and pull-request creation remain later milestones after the read-only analyzer is stable.

## Product

- Paste a public GitHub repository URL and inspect its detected stack.
- Review dependency freshness, deprecation flags, risk levels, project health, migration confidence, stages, and validation gates.
- See explicit notes about what the safe static pass did and did not execute.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `lib/api-spec/openapi.yaml` must be updated before running API codegen.
- The API expects a public `github.com/owner/repository` URL and requires a package.json manifest.
- npm and GitHub are queried live, so rate limits or upstream outages are surfaced as analysis errors.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
