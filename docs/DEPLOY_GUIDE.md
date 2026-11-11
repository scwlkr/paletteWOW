# Deploying paletteWOW with Coolify

Coolify runs the Rails app and a standalone PostgreSQL 16 database on the front door. The database has no public port. Builds run on the workhorse and use a dedicated private registry repository. If a future dependency requires newer CPU features, use the front door for that build as described in the Octal8 architecture.

The public address is https://palettewow.xyz. Coolify terminates HTTPS; Rails trusts the terminating proxy and allows the public host. The app health endpoint is `/up`. There is no SSH tunnel or separate Caddy deployment.

## Operator configuration

Use the existing **Coolify (Octal8)** item in **My Passwords** for the panel URL, API token, `palettewow_app_uuid` and `palettewow_health_url`. The existing **Octal8 registry and workhorse** item holds the private registry login. Keep identifiers, addresses, credentials and deployment receipts outside Git.

The app uses this repository's Dockerfile, branch `main`, port 80 and `/up` health check. Deployments pin the full reviewed Git commit. Automatic source webhooks are disabled: the build-mode worker ships after checks pass.

Runtime variables in Coolify:

- `RAILS_ENV=production`
- `APP_HOST=palettewow.xyz,www.palettewow.xyz`
- `DB_HOST`: the standalone PostgreSQL resource's internal hostname
- `PALETTE_WOW_DATABASE_PASSWORD`, `SECRET_KEY_BASE`, `RAILS_MASTER_KEY`: existing private operator values

PostgreSQL owns `palette_wow_production`, `palette_wow_production_cache`, `palette_wow_production_queue` and `palette_wow_production_cable`, all with owner `palette_wow`. The Docker entrypoint runs `db:prepare` before Rails starts. Never give tests these production connection settings.

A named Coolify volume mounts at `/rails/storage`. The recovered deployment has no uploaded files; current image extraction and exports run in the browser. If server-side uploads are introduced, cover them with the Octal8 minimum backup plan before enabling them.

## Release and undo

From a checkout of the checked, merged default branch, run:

```sh
~/.local/share/agent-fleet/deploy/palettewow-octal8.sh
```

The fleet script reads Coolify credentials from 1Password, deploys the exact checkout revision, waits for completion and checks trusted public HTTPS. It records the previous successful release outside the repository. To undo an application release:

```sh
~/.local/share/agent-fleet/deploy/palettewow-octal8.sh rollback
```

Rollback reuses a previously built image and preserves the database and storage volume. Check migration compatibility before reverting a future schema change. A failed health check must pause build mode after rollback, with an honest failure report. Stopping this app in Coolify undoes the hosting change without changing DNS or other apps.

## Verification

Run the JavaScript suite (`node --test test/javascript/`), Rails tests against a disposable PostgreSQL database, autoload check, asset compilation, RuboCop, Brakeman, gem audit and import-map audit. The Dockerfile's `validation` target supplies the correct Ruby and test gems.

After release, require trusted HTTPS 200 for `/up`, `/`, a shared palette and `/contrast`; fetch the referenced assets. Check the generator in a real browser at desktop and phone widths, including generation, lock, undo and contrast. A successful `/up` alone does not establish database recovery or usable assets.

## Backups and recovery

The Octal8 app-backup role creates a native Coolify backup schedule: nightly at 03:00 in the database server's configured timezone, all PostgreSQL databases, three retained copies, stored on the workhorse. Source copies are removed only after upload succeeds. Run the installed app-backup reconciliation service and check the resource's Backups within five minutes of provisioning.

Use **Back up now** and restore the downloaded remote backup into a disposable PostgreSQL 16 container with no network. Require zero SQL errors and compare the restored schema and table contents with the source before relying on it. Never restore a test over production. Preserve database ownership and include all four Rails databases.

For a server replacement, create a new Coolify database, restore the verified backup, check table contents, then connect the app. A database move needs a second, different model's review for problems that would break recovery. Keep the original data until the replacement and its off-machine backup are verified.

The November 2026 rebuild recovered all four databases from the pre-wipe archive. That archive is temporary; the new nightly backups are the recovery source after its expiry.

## Historical deployments

`deploy/octal8/` and `deploy/ovh/` describe the retired Compose/SSH-tunnel/Caddy deployment. They remain only as recovery references; do not use them for current releases. DigitalOcean/Kamal hosting is also retired.
