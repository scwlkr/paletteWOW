#!/usr/bin/env bash
set -euo pipefail
umask 077
operator_env=${1:?Usage: backup.sh /private/operator.env}
set -a
source "$operator_env"
set +a
: "${PALETTEWOW_COMPOSE:?Set the deployed Compose file}"
: "${PALETTEWOW_BACKUP_DIR:?Set the backup directory}"
mkdir -p "$PALETTEWOW_BACKUP_DIR"
exec 9>"$PALETTEWOW_BACKUP_DIR/backup.lock"
flock -n 9 || exit 0
destination="$PALETTEWOW_BACKUP_DIR/$(date -u +%Y%m%dT%H%M%SZ)"
mkdir "$destination"
compose=(docker compose --env-file "$operator_env" -p palettewow -f "$PALETTEWOW_COMPOSE")
for database in palette_wow_production palette_wow_production_cache palette_wow_production_queue palette_wow_production_cable; do
  "${compose[@]}" exec -T db pg_dump -U palette_wow -Fc "$database" > "$destination/$database.dump"
done
tar -C "$PALETTEWOW_STATE_DIR" -czf "$destination/storage.tar.gz" storage
(
  cd "$destination"
  sha256sum *.dump storage.tar.gz > SHA256SUMS
)
printf 'Backup completed: %s\n' "$destination"
