# paletteWOW context

paletteWOW is a minimal open-source Rails color palette generator. Its primary workflows are instant generation, locking/reordering/editing colors, undo/redo, shared hex-code URLs, and browser-side exports.

## Current product

The public app has no sign-in. Google OAuth was removed at the owner's request on 26 October 2026. Accounts and the saved library are disabled; their source and data model are preserved. WorkOS AuthKit is only a possible future provider.

The stack is Ruby 3.4.12, Rails 8.1, PostgreSQL, Hotwire, Stimulus, import maps, and Tailwind CSS. Preserve the minimal color-first interface.

## Hosting

The Rails app, database, and restricted SSH client run as a dedicated Docker Compose project on Octal8. An OVHcloud VPS runs Caddy for public HTTPS and forwards through a pinned-key, loopback-only SSH connection. Keep deployment/recovery instructions in this repository and all credentials, host addresses, and assigned operator paths outside Git. Preserve unrelated services and the shared host's storage/backup architecture.

## Project record

- `README.md`: public entry point.
- `docs/STATUS.md`: verified state, limitations, and next action.
- `docs/ROADMAP.md`: future direction and product boundaries.
- `docs/DEPLOY_GUIDE.md`: deployment and recovery.
- `docs/FEATURES.md`: current user-facing capabilities.

## Checks

Run the meaningful tests in a separate database, autoload check, asset compilation, lint, Brakeman, gem audit, and import-map audit. Validate browser behavior when changing interactions. Never use a production database as a test fixture.

Existing PRs were closed for the fresh start, with history preserved. Routine Dependabot version PRs are paused.
