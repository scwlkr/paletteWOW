# paletteWOW Roadmap

## Direction

paletteWOW should remain a fast, focused palette generator for people who want to create, adjust, share, export, and optionally save color palettes without a heavy design-suite workflow.

## Product Principles

1. Keep the first interaction instant: open the app, generate palettes, and manipulate colors without setup.
2. Keep the interface minimal and color-first.
3. Treat exports and share links as core workflows, not extras.
4. Keep saved palettes useful without making sign-in mandatory for the generator.
5. Favor small, reviewable improvements that compound reliability, usability, accessibility, and documentation quality.

## Current Baseline

- Rails 8 app with PostgreSQL.
- Generator route at `/` through `PalettesController#index`.
- Saved palettes through Google OAuth, `DashboardController`, and `PalettesController` persistence actions.
- Palette sharing through constrained hex-code URLs.
- Client-side export support for image/document/code formats described in `docs/FEATURES.md`.
- Documentation library already covers installation, deployment, features, architecture, frontend logic, brand, contributing, license, and changelog.

## Near-Term Roadmap

### 1. Project Truth Bootstrap

Add missing project-truth docs so future maintenance work has a clear context, current status, and roadmap.

Acceptance signals:

- `CONTEXT.md` exists at the repository root.
- `docs/STATUS.md` records current state, proof, blockers, and exact next action.
- `docs/ROADMAP.md` records direction, priorities, and approval boundaries.
- Validation is run or a blocker is recorded.

### 2. Maintenance Queue Triage

Review open dependency update pull requests one at a time and merge only when validation evidence is clear.

Acceptance signals:

- Each dependency PR has a pass/fail validation note.
- Riskier framework/runtime updates are separated from routine patch bumps.
- Failed updates leave actionable notes instead of silent closure.

### 3. Validation Hardening

Make the validation surface more useful for future contributors and automated maintenance.

Acceptance signals:

- The baseline validation ladder is documented and easy to run.
- Meaningful tests cover the core palette persistence and route behavior.
- CI expectations are clear in repository docs.

### 4. Core Workflow Polish

Improve the generator, share, export, and saved-palette workflows where small changes clearly improve the user experience.

Acceptance signals:

- Changes preserve the minimal color-first interface.
- UI changes include screenshots or clear manual validation notes in the PR.
- Accessibility and responsive behavior are checked for touched surfaces.

### 5. Deployment Readiness

Keep deployment docs and production assumptions aligned with the actual Rails app and Kamal configuration.

Acceptance signals:

- Deployment guidance matches current config files.
- Required environment variables are documented by name only, without values.
- Rollback or recovery notes exist for risky operational changes.

## Auto-Safe Work

The following work is generally safe to propose and implement in a branch ending in an owner-reviewed PR:

- Documentation corrections and missing project-truth docs.
- Small validation or test improvements.
- Narrow bug fixes with clear reproduction and verification.
- Dependency bumps with passing validation.
- Minor accessibility, copy, or responsive-layout fixes that preserve the current product direction.

## Approval-Gated Work

Get explicit owner approval before spending significant build effort on:

- Major UI redesigns or product positioning changes.
- Authentication model changes.
- Data model or migration changes that affect saved palettes.
- Deployment architecture changes.
- Paid features, subscriptions, ads, or tracking-heavy analytics.
