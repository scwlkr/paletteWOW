#!/bin/sh
set -eu
: "${PALETTEWOW_VPS_HOST:?Set the pinned VPS host}"
exec ssh -F /dev/null -N -T \
  -i /run/ssh/id_ed25519 \
  -o IdentitiesOnly=yes \
  -o BatchMode=yes \
  -o StrictHostKeyChecking=yes \
  -o UserKnownHostsFile=/run/ssh/known_hosts \
  -o ExitOnForwardFailure=yes \
  -o ServerAliveInterval=30 \
  -o ServerAliveCountMax=3 \
  -o ConnectTimeout=15 \
  -R 127.0.0.1:18081:web:80 \
  "palettewow-tunnel@${PALETTEWOW_VPS_HOST}"
