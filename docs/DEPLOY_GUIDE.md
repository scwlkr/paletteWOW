# How-To: Deploy paletteWOW to DigitalOcean with Kamal 2

This guide walks you through the exact steps required to push a production build of paletteWOW to a DigitalOcean Droplet using Kamal 2, Docker, and Bitwarden Secret Manager.

## Step 1: Provision Your DigitalOcean Infrastructure

Before deploying, ensure you have a clean slate on a single DigitalOcean Droplet.

1. **Create the Droplet**: Select **Ubuntu 24.04 LTS (x64)**.
2. **Assign Resource Volume**: Ensure the Droplet has at least 1GB of RAM and 1 CPU.
3. **Connect SSH**: Embed your SSH key on creation so Kamal can SSH entirely password-less.
4. **Point your DNS**: Add an A Record pointing `palettewow.xyz` to your new Droplet IP address. Let's Encrypt will fail to issue the automatic SSL certificate if this step is not completed.

## Step 2: Establish the Secrets Vault

Kamal parses bash commands inside `.kamal/secrets` at deploy-time using `bws` to fetch secrets. Ensure you have the Bitwarden ID values for three critical secrets:
- DockerHub Read/Write Token
- Rails Master Key
- PostgreSQL Password

Modify your `.kamal/secrets` file:

```bash
KAMAL_REGISTRY_PASSWORD=$(bws secret get <DOCKER_HUB_TOKEN_UUID> | jq -r '.value')
RAILS_MASTER_KEY=$(bws secret get <RAILS_MASTER_KEY_UUID> | jq -r '.value')
POSTGRES_PASSWORD=$(bws secret get <POSTGRES_PASSWORD_UUID> | jq -r '.value')
PALETTE_WOW_DATABASE_PASSWORD=$POSTGRES_PASSWORD
```

## Step 3: Configure Kamal (`deploy.yml`)

The `config/deploy.yml` dictates how Kamal mounts your Rails image, enables Let's Encrypt SSL, and spins up a PostgreSQL companion accessory.

You must manually update the `<DROPLET_IP_ADDRESS>` inside `config/deploy.yml` in two specific spots: `servers: web:` block and the `accessories: db: host:` block.

Example configuration snippet:
```yaml
# config/deploy.yml
servers:
  web:
    - 192.168.1.1 # REPLACE WITH DROPLET IP

accessories:
  db:
    image: postgres:16
    host: 192.168.1.1 # REPLACE WITH DROPLET IP
    port: 5432
```

## Step 4: Execute the Initial Setup

Kamal will handle everything: SSH connection, Docker installation, environment variable population, image compiling (forcing amd64 since you build locally on arm64), and launching Puma.

Run this command inside the project root on your local machine:

```bash
kamal setup
```

The process will take several minutes to build the image blocks and push to DockerHub.

> **Tip:** Ensure your local bash terminal has exported `BWS_ACCESS_TOKEN` so Kamal can decrypt the `.kamal/secrets` file silently during this initial setup.

## Step 5: Execute Routine Deployments

Once `setup` succeeds, you'll never need to run it again unless you rebuild the Droplet.
To push future updates to your codebase to DigitalOcean, strictly use:

```bash
kamal deploy
```
