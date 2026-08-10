# Branden Opauski - AI Operations Portfolio

A public, sanitized portfolio connecting merchant underwriting and operations experience with owner-directed AI product and workflow development.

## Included case studies

- Vincent / Vinny - local-first personal AI runtime
- Vongola Director - owner-controlled AI operations system
- Vaddix Vault - confidence-gated on-device recognition workflow

The portfolio shows high-level architecture, controls, test evidence, status, and product decisions. It intentionally excludes credentials, private logs, personal data, employer-specific underwriting logic, customer information, and complete private-system source.

The [`case-studies`](./case-studies) directory contains sanitized evidence briefs and a public/private boundary for each project. Test counts and build statuses are local evidence snapshots reviewed on August 10, 2026; this portfolio repository does not independently rerun the private project suites.

## Public release boundary

This repository publishes the portfolio site and sanitized project documentation. The flagship source repositories, model configuration, operational rules, logs, and executable builds remain private pending project-by-project security, licensing, and maintainability review. A public portfolio does not require exposing the control logic that makes the underlying systems safe.

## Run locally

```powershell
npm ci
npm run dev
```

## Validate

```powershell
npm test
```

## Environment variables

None required.

## Live site

The public deployment is served from the committed `docs` directory and automatically updated by GitHub Pages when `main` changes. Before publishing a source change, run:

```powershell
npm run publish:pages
```
