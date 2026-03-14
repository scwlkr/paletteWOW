# Tutorial: Installing paletteWOW Local Development Environment

**What you'll build**: A complete local development environment running the paletteWOW Rails application, connected to PostgreSQL and ready for ActiveStorage image processing.

**What you'll learn**:
- Local repository setup and Ruby on Rails initialization
- PostgreSQL database scaffolding
- Google OAuth local credential connection via `.env`

**Prerequisites**:
- [ ] Ruby version **3.2.0** installed
- [ ] Ruby on Rails **8.x** installed
- [ ] Node.js & Yarn installed
- [ ] PostgreSQL installed and running on your local machine
- [ ] Bitwarden Secrets CLI (`bws`) (optional, if syncing team secrets)

## Step 1: Clone the Application

First, you pull the source code to your machine. 
Open your terminal and create a directory where you'd like your project to live:

```bash
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW
```

> **Tip**: Verify your ruby version matches the `.ruby-version` file at the root.

## Step 2: Install Application Packages

The application requires Ruby Gems for backend operations and Node modules for the Hotwire frontend architecture. Run the package commands:

```bash
bundle install
yarn install
```

If you encounter Nokogiri installation issues on M1 Macs, you may need to specify build architectural flags for your Homebrew installation.

## Step 3: Configure Authentication Secrets

The paletteWOW library requires a Google OAuth application to power its login functionality. 
You can pull the internal secrets automatically from Bitwarden Secret Manager, or provide your own local Google Application IDs.

**To sync internal secrets:**
```bash
bws login
# Export your machine access token and the .env will dynamically populate in later steps
```

**To use your own local Google App:**
Create a `.env` file at the root of the project with:

```text
GOOGLE_CLIENT_ID=your_local_client_id
GOOGLE_CLIENT_SECRET=your_local_client_secret
```

> If you do not provide valid Google Credentials, the `Sign in with Google` backend callback will fail and throw a routing error. 

## Step 4: Seed the PostgreSQL Database

Rails ships with database tasks that will provision the `development` and `test` environments dynamically. Run:

```bash
bin/rails db:prepare
```

You should see output like:
```text
Created database 'palette_wow_development'
Created database 'palette_wow_test'
```

## Step 5: Start the Development Server

The application runs using Foreman (via `bin/dev`) to launch both the Puma Server and the Tailwind CSS file watcher concurrently.

```bash
bin/dev
```

## Step 6: What You Built

You just orchestrated a completely localized full-stack Rails environment using PostgreSQL and Tailwind CSS.
Open your browser and navigate to `http://localhost:3000`. You can begin generating and saving palettes instantly!

## Next Steps

- [How-To: Deploy to DigitalOcean with Kamal 2](DEPLOY_GUIDE.md)
- [Explanation: Database Optimization & The Pocket Approach](ARCHITECTURE.md)
