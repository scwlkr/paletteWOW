# paletteWOW status

Updated 26 October 2026.

## Current phase

Account-free generator live at https://palettewow.xyz, running on Octal8 through the OVHcloud VPS. Public DNS and trusted HTTPS are verified.

## Completed

- Closed all 12 inherited dependency pull requests without merging them; history remains available.
- Paused routine Dependabot version PRs for the fresh baseline.
- Updated to Ruby 3.4.12 and Rails 8.1.4, with compatible dependency updates.
- Removed Google OAuth middleware, callbacks, gems, sign-in/save controls, and the development auto-login bypass.
- Disabled dashboard, profile, account-session, and saved-library API routes. Existing library source/model remains available for a future authentication integration.
- Added isolated Octal8 application/PostgreSQL/SSH-client deployment and an OVHcloud Caddy edge with persistent certificate storage.
- Restricted SSH forwarding to one VPS loopback port and pinned host keys. Application and database ports remain unpublished on Octal8.
- Completed the Hostinger DNS cutover, issued trusted certificates for the root and existing `www` hostname, and verified the `www` redirect.
- Added explicit Caddy state-directory ownership initialization so certificate issuance works with the container's dropped capabilities.
- Retired the DigitalOcean/Kamal deployment path and updated installation, feature, privacy, deployment, and planning docs.

WorkOS AuthKit is a possible future direction, not an implemented integration.

## Verification

- New public-release tests: **7 tests, 42 assertions, zero failures/errors**, using the Ruby 3.4.12 validation image and a separate test database.
- Autoloading and production asset compilation passed.
- Ruby lint passed locally; Brakeman reported zero warnings; gem and import-map audits reported no vulnerable packages.
- Application and database health checks pass. The VPS can fetch the generator and shared palettes through the encrypted forward with HTTP 200. Retired Google callbacks return 404.
- Trusted public HTTPS serves the generator, shared palettes, and health endpoint. HTTP redirects to HTTPS; `www` redirects to the root hostname. Certificates and service operation persisted through an edge restart.
- In the existing Chrome browser, verified spacebar generation, color locking, undo, shared palette links, and actual PNG/PDF downloads.
- Logical dumps exist for all four Rails databases, plus storage and checksums. The primary dump was restored to an isolated database and its fresh-state counts were verified: zero users and zero saved palettes.
- A persistent daily user backup timer runs before the existing shared-host backup. The shared backup service remains in place.

## Remaining work and limits

- No historical user/palette migration was performed; the Octal8 deployment uses a fresh database.
- Full-host reboot recovery and inclusion of logical dumps in the shared host's secondary backup are not yet verified.
- Exact image identities, account/host/storage details, PR closure receipts, and operational logs are kept in private deployment evidence outside Git.
