---
name: Analyzer safety boundary
description: The repository analyzer's MVP security boundary and expansion rule.
---

DeadProject Rescue's first analysis pass is metadata-only: it reads public GitHub manifests and npm registry metadata but never installs packages or executes repository code. Any future validation, codemod, or migration step must run inside an isolated, resource-limited sandbox before enabling install scripts, builds, tests, or pull-request writes.

**Why:** The core product processes abandoned repositories that may contain malicious package scripts, fork bombs, secret exfiltration, or filesystem attacks.

**How to apply:** Preserve the read-only boundary in dashboard and CLI flows; treat sandbox execution as a separate capability with explicit status and audit logs, not as a silent fallback.