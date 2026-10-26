# Deploying paletteWOW on Octal8 through OVHcloud

## Layout

- Octal8 runs the Rails image, PostgreSQL 16, and an SSH forwarding client in the dedicated `palettewow` Compose project.
- The app and database publish no host ports. The database is on an internal Docker network. The forwarding client shares only the app network.
- The OVHcloud VPS runs the dedicated `palettewow-edge` Caddy project. It terminates HTTPS and proxies to a loopback-only SSH forward.
- The dedicated VPS SSH user can create only the assigned remote loopback listener. It cannot open a shell, use a TTY, forward an agent, or create local forwards. The client pins the VPS host keys.
- Existing Octal8 services and the original prepared VPS projects have separate lifecycles.

Rails is retained for compatibility with the existing application, Stimulus frontend, and PostgreSQL data model. This migration does not introduce a separate backend service.

## Private operator configuration

Keep host addresses, deployment accounts, assigned storage paths, and secrets outside Git. Use mode 700 for operator directories and 600 for credentials.

The Octal8 operator environment supplies:

```text
PALETTEWOW_DOMAIN=
PALETTEWOW_IMAGE=
PALETTEWOW_TUNNEL_IMAGE=
PALETTEWOW_OPERATOR_DIR=
PALETTEWOW_STATE_DIR=
PALETTEWOW_BACKUP_DIR=
PALETTEWOW_COMPOSE=
```

`app.env` contains `SECRET_KEY_BASE`, `RAILS_MASTER_KEY`, and `PALETTE_WOW_DATABASE_PASSWORD`. `postgres.env` contains `POSTGRES_USER=palette_wow`, `POSTGRES_DB=palette_wow_production`, and the matching `POSTGRES_PASSWORD`. `tunnel.env` supplies `PALETTEWOW_VPS_HOST`. Store the dedicated SSH key and pinned known-hosts file in the operator `ssh/` directory.

Google OAuth is removed. No Google credentials are needed. Account and saved-library routes are disabled; WorkOS AuthKit has not been implemented.

The VPS edge environment supplies `PALETTEWOW_DOMAIN` and `PALETTEWOW_EDGE_STATE`.

## Build and activate

Build both images on Octal8 from the exact reviewed source revision:

```sh
docker build --pull -t "$PALETTEWOW_IMAGE" .
docker build -f deploy/octal8/tunnel.Dockerfile -t "$PALETTEWOW_TUNNEL_IMAGE" .
docker compose --env-file "$OPERATOR_ENV" -p palettewow -f deploy/octal8/compose.yml config --quiet
docker compose --env-file "$OPERATOR_ENV" -p palettewow -f deploy/octal8/compose.yml up -d --wait
```

Provision the dedicated forwarding user and authorized public key on the VPS. Install `deploy/ovh/sshd.conf` as a drop-in, run `sshd -t`, and reload SSH while retaining the current administration session. Restrict the authorized key with `restrict,port-forwarding,permitlisten="127.0.0.1:18081"`. Never replace existing administration keys.

Stage `deploy/ovh/compose.yml` and `Caddyfile` in a dedicated edge directory. Validate the interpolated Compose and Caddy configuration, then start only `palettewow-edge`. Persist certificate/configuration state outside the release directory.

Verify root, health, and a shared palette from the VPS through the loopback forward before DNS cutover. Change the domain A record to the verified VPS address, then verify a trusted public certificate, HTTP-to-HTTPS redirect, assets, and generator/export interactions. Do not accept a certificate warning as a successful deployment.

The previous DigitalOcean/Kamal deployment is retired. Its configuration remains in Git history for reference; do not deploy to that host or replace changed SSH host keys without independent verification.

## Validation

Build the `validation` Docker target and run the Rails tests against a separate validation database. This target uses the same Ruby runtime/source as production and adds the test/development gems excluded from the shipped image. Check autoloading, asset compilation, Ruby lint, Brakeman, gem advisories, and import-map advisories. Confirm that retired Google callbacks, dashboard/profile pages, and saved-library mutation routes return 404.

Verify that application/database ports remain unpublished and that the VPS forwarding listener is bound to loopback. Restart the app and forwarding client separately and confirm recovery. A full shared-host reboot is a separate operational check.

## Backup and recovery

`deploy/octal8/backup.sh` makes PostgreSQL custom-format dumps for the primary, cache, queue, and cable databases, a storage archive, and a checksum manifest. Run it with the private operator environment. Its lock prevents overlapping backups. Retain the existing shared-host backup services and include these logical dumps in the backed-up data drive.

For a restore check, create a new, clearly named temporary database and restore the primary dump there. Verify the schema and expected user/palette counts, then remove only that temporary database. Do not restore over production as a test.

For an application rollback, select the previous recorded image and release Compose path in private operator configuration, then recreate only the web/forwarding services. Keep the database and storage directories. Review migration compatibility before rolling back across a schema change. Keep image IDs, source revision, validation results, DNS state, and backup paths in the private deployment receipt.
