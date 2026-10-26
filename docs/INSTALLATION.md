# Local installation

Requirements: Ruby 3.4.12, Bundler, and a running PostgreSQL server. Use the version in `.ruby-version`.

```sh
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW
bundle install
bin/rails db:prepare
bin/dev
```

Open `http://localhost:3000`. `bin/dev` runs Puma and the Tailwind watcher. The frontend uses import maps; Node and Yarn are not required for this workflow.

The generator, color editing, sharing, and exports work without signing in. Google OAuth has been removed, and no Google or Bitwarden credentials are needed. Accounts and the saved library are disabled pending a future authentication decision.

Run `bin/rails db:prepare test` to check the public routes and ensure the retired account endpoints cannot read or write library data. Tests must use an isolated test database.

See [deployment and recovery](DEPLOY_GUIDE.md) for the Octal8/OVHcloud environment.
