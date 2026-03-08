# paletteWOW Deployment Guide

This guide details the step-by-step process for deploying the Ruby on Rails 8 application (**paletteWOW**) to a DigitalOcean Droplet using Kamal 2, DockerHub, and Bitwarden Secret Manager (`bws`).

---

## Phase 1: Infrastructure & Registry Prep

### 1. DigitalOcean Droplet Preparation
1. **Create the Droplet:** Spin up a new Droplet in DigitalOcean. Choose **Ubuntu (24.04 or 22.04 LTS)** and ensure you select the appropriate CPU/RAM resources for your app.
2. **SSH Key:** Ensure your M1 Mac's SSH key is added to the Droplet during creation so you can access it password-less.
3. **DNS Configuration (Crucial for SSL):** Before deploying, go to your domain registrar (or DO DNS) and create an **A Record** pointing `palettewow.xyz` (and optionally `www.palettewow.xyz`) to your new `<DROPLET_IP_ADDRESS>`. Let's Encrypt will fail to issue the SSL certificate if this isn't propagated.

### 2. DockerHub Personal Access Token (PAT)
1. Log in to [DockerHub](https://hub.docker.com/).
2. Navigate to **Account Settings > Security > New Access Token**.
3. Name it (e.g., `paletteWOW-Kamal`) and grant it **Read & Write** permissions. Copy the token generated.

### 3. Bitwarden Secret Manager (`bws`) Setup
1. Log in to your Bitwarden Secret Manager web vault.
2. Create **three** new secrets safely within your project:
   - **DockerHub Token** (the one you just created).
   - **Rails Master Key** (found via `cat config/master.key` in your local repo).
   - **PostgreSQL Password** (generate a secure, random password for your production DB).
3. Copy the **Secret ID (UUID)** for each of these three secrets.
4. Ensure your local `zsh` session is authenticated by exporting your machine access token:
   ```bash
   export BWS_ACCESS_TOKEN="<YOUR_BWS_MACHINE_ACCESS_TOKEN>"
   ```
   *(You can also place this export in your `~/.zshrc` so it's always available when you deploy).*

---

## Phase 2: Secrets Configuration

Kamal automatically evaluates bash commands inside the `.kamal/secrets` file. We will use the `bws` CLI along with `jq` to fetch these secrets dynamically at deploy-time.

Make sure `jq` is installed locally on your Mac (`brew install jq`).

Replace the placeholder UUIDs below with your actual Bitwarden Secret IDs. Add this exact code to `.kamal/secrets`:

```bash
# .kamal/secrets

# Fetch DockerHub PAT
KAMAL_REGISTRY_PASSWORD=$(bws secret get <REPLACE_WITH_DOCKER_HUB_TOKEN_UUID> | jq -r '.value')

# Fetch Rails Master Key
RAILS_MASTER_KEY=$(bws secret get <REPLACE_WITH_RAILS_MASTER_KEY_UUID> | jq -r '.value')

# Fetch Database Password and map it to both PostgreSQL and Rails environments
POSTGRES_PASSWORD=$(bws secret get <REPLACE_WITH_POSTGRES_PASSWORD_UUID> | jq -r '.value')
PALETTE_WOW_DATABASE_PASSWORD=$POSTGRES_PASSWORD
```

---

## Phase 3: Kamal Configuration (`config/deploy.yml`)

Here is your exact `config/deploy.yml`. It removes assumptions, connects your registry, provisions Let's Encrypt SSL for `palettewow.xyz`, and explicitly configures a PostgreSQL container (accessory) since you're using a single Droplet.

Be sure to replace `<DROPLET_IP_ADDRESS>` on lines 10 and 42 with your actual Droplet IP.

```yaml
# config/deploy.yml

# Name of your application. Used to uniquely configure containers.
service: palette_wow

# Name of the container image.
image: scwlkr/palette_wow

# Deploy to these servers.
servers:
  web:
    - <DROPLET_IP_ADDRESS>

# Enable SSL auto certification via Let's Encrypt (kamal-proxy).
proxy:
  ssl: true
  host: palettewow.xyz

# Where you keep your container images (DockerHub by default when omitted).
registry:
  username: scwlkr
  password:
    - KAMAL_REGISTRY_PASSWORD

# Inject ENV variables into containers.
env:
  secret:
    - RAILS_MASTER_KEY
    - PALETTE_WOW_DATABASE_PASSWORD
  clear:
    DB_HOST: palette_wow-db
    SOLID_QUEUE_IN_PUMA: true

aliases:
  console: app exec --interactive --reuse "bin/rails console"
  shell: app exec --interactive --reuse "bash"
  logs: app logs -f
  dbc: app exec --interactive --reuse "bin/rails dbconsole --include-password"

# Native persistent storage for Active Storage/sqlite.
volumes:
  - "palette_wow_storage:/rails/storage"

asset_path: /rails/public/assets

# Force amd64 architecture to match the Ubuntu VPS (since you are on M1 Max/arm64)
builder:
  arch: amd64

# Configure PostgreSQL as an accessory container on the Droplet
accessories:
  db:
    image: postgres:16
    host: <DROPLET_IP_ADDRESS>
    port: 5432
    env:
      clear:
        POSTGRES_USER: palette_wow
        POSTGRES_DB: palette_wow_production
      secret:
        - POSTGRES_PASSWORD
    directories:
      # Ensures database data survives container restarts/deployments
      - data:/var/lib/postgresql/data
```

---

## Phase 4: Execution

With your secrets dynamically wired up and your `deploy.yml` completely mapped out to your environment, you are ready to execute.

Run all commands from the root directory of your app (`/Users/shanewalker/Desktop/dev/paletteWOW`) in your `zsh` terminal:

### 1. Verify Authentication
Ensure your local `bws` can pull secrets without error:
```bash
source .kamal/secrets && echo "Secrets fetched successfully!"
```

### 2. Initial Setup
The `kamal setup` command is the holy grail for a fresh Droplet. It will:
- SSH into your Droplet.
- Install Docker.
- Log into your DockerHub registry via your Bitwarden token.
- Push your environment variables.
- Boot the PostgreSQL accessory.
- Build your Rails image locally (cross-compiling for `amd64`), push it to DockerHub, and deploy it to your Droplet.
- Configure Let's Encrypt for `palettewow.xyz`.

```bash
kamal setup
```
*(Note: Because you are on an M1 Max compiling for `amd64`, the first build might take a few minutes. Just let it run).*

### 3. Future Deployments
Whenever you push new code or make changes locally, you won't need `setup` anymore. You simply use:
```bash
kamal deploy
```

If you ever change a secret in Bitwarden or add a new environment variable to the `env:` block in `deploy.yml`, you must push those before deploying:
```bash
kamal deploy
```
