#!/bin/sh
set -eu
state=${1:?Usage: prepare-state.sh /absolute/persistent-edge-state}
case "$state" in
  /) echo "Refusing the filesystem root as edge storage" >&2; exit 1 ;;
  /*) ;;
  *) echo "An absolute edge storage directory is required" >&2; exit 1 ;;
esac
# The pinned Caddy image runs as UID/GID 0. With capabilities dropped it cannot
# bypass ownership on bind mounts, so initialize its writable directories first.
install -d -m 700 -o 0 -g 0 "$state/data" "$state/config"
