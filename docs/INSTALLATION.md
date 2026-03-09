# paletteWOW Installation Guide

Welcome to paletteWOW! This guide provides a step-by-step walkthrough to get the application running on your local machine.

## System Requirements

Before you begin, ensure your system has the following installed:
- **Ruby:** `3.2.0` or higher (check the `.ruby-version` file for exact version requirements).
- **Ruby on Rails:** `8.x`
- **PostgreSQL:** Used as the primary database.
- **Node.js & Yarn:** For compiling frontend assets.
- **Bitwarden Secrets CLI (`bws`):** Required if you are handling production secrets locally (mainly for deployment).

## Step-by-Step Setup

### 1. Clone the Repository
Clone the project locally and enter the directory:
```bash
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW
```

### 2. Install Dependencies
Install the required Ruby gems and JavaScript packages:
```bash
bundle install
yarn install
```

### 3. Environment Variables Setup
paletteWOW uses Google OAuth for authentication, meaning you will need valid API credentials to use the login functionality locally.
You can either setup your own Google Cloud Console credentials or sync them from our centralized vault using the Bitwarden CLI.

To sync using Bitwarden (internal devs):
1. Install `bws` (Bitwarden Secrets CLI).
2. Authenticate: `bws login` and provide your Access Token.
3. Inject the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` into your local `.env` file.

*Alternatively, create a `.env` file at the root of the project with:*
```text
GOOGLE_CLIENT_ID=your_local_client_id
GOOGLE_CLIENT_SECRET=your_local_client_secret
```

### 4. Database Initialization
Prepare the PostgreSQL database. This command creates the database, loads the schema, and initializes any seed data:
```bash
bin/rails db:prepare
```

### 5. Start the Server
Start the Rails development server along with the Tailwind CSS file watchers:
```bash
bin/dev
```

Proceed to `http://localhost:3000` in your web browser. You're ready to start generating palettes!
