# paletteWOW status

Updated 11 November 2026.

## Current phase

The account-free generator is live at https://palettewow.xyz on Coolify. The November server rebuild removed its old hosting; issue #68 restores it on the front door, with builds on the workhorse. Coolify serves trusted public HTTPS directly.

## Current tools

- Generate, lock, edit, reorder, undo and share palettes of two to ten colors.
- Color information for each swatch, a standalone contrast checker and a palette contrast grid.
- Browser-side PNG, PDF, SVG, CSS, Tailwind, SCSS, LESS, JSON, JavaScript, HTML and ASE exports.

Google sign-in and account/library routes remain disabled. Existing account and library models are preserved. WorkOS AuthKit remains a possible future choice.

## Recovery and hosting

- Recovered all four Rails databases from the pre-wipe archive's cleanly stopped PostgreSQL 16 data directory. Verified integrity and compared every restored table and sequence before connecting the app.
- The recovered primary database contains zero users and zero saved palettes. No historical account migration was introduced; this preserves the prior deployment's state.
- New standalone PostgreSQL resource has no public port. App storage has a persistent volume; the recovered upload directory was empty.
- Native nightly backups cover all databases, retain three copies on the workhorse and remove source copies only after upload succeeds.
- The first remote backup was downloaded and restored into a disposable PostgreSQL 16 container with no network. All four restored databases matched their source table contents with zero SQL errors.
- Deployment and rollback are owned by the fleet script, maintained at the Mac source. Credentials and receipts remain outside Git. The old Compose, SSH tunnel and Caddy configuration is historical.

## Verification

- Rails: 19 tests, 225 assertions, zero failures, errors or skips.
- JavaScript: 45 passing tests.
- Autoloading, production assets, RuboCop, Brakeman, gem audit and import-map audit passed.
- Trusted public HTTPS returned 200 for the generator, shared palettes, contrast checker and `/up`.
- Pinned Chromium checks passed at 1440px and 390px: shared palette, locking, generation, undo, contrast grid and checker. No page errors, failed requests or horizontal page overflow.
- Operational deployment and rollback evidence is recorded on [issue #68](https://github.com/scwlkr/paletteWOW/issues/68).

## Remaining work

Continue the remaining account-free feature checklist in [tracking issue #52](https://github.com/scwlkr/paletteWOW/issues/52). Accounts, public palette discovery and paid AI features remain outside the approved scope. Back up server-side uploads before introducing any feature that creates them.
