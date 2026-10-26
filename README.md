# paletteWOW

A free, open-source color palette generator built with Rails, Hotwire, Stimulus, Tailwind CSS, and PostgreSQL.

Generate palettes instantly, lock and adjust colors, reorder columns, undo changes, share a palette URL, and export PNG, PDF, SVG, CSS variables, or Tailwind configuration. No account is required.

Google sign-in has been removed. Accounts and the saved library are currently disabled. WorkOS AuthKit is a possible future integration; it is not implemented.

## Local development

Install Ruby **3.4.12** and PostgreSQL, then run:

```sh
bundle install
bin/rails db:prepare
bin/dev
```

Open `http://localhost:3000`. Import maps and the Rails Tailwind gem supply the frontend dependencies; there is no Yarn installation step.

## Verification

```sh
bin/rails db:prepare test
bin/rails zeitwerk:check
bin/rails assets:precompile
bin/rubocop
bin/brakeman --quiet --no-pager
bin/bundler-audit
bin/importmap audit
```

Tests use a separate PostgreSQL test database. Never point the test database URL at production.

## Hosting

The application and PostgreSQL run in an isolated Docker Compose project on Octal8. The OVHcloud VPS terminates public HTTPS and reaches the application through a restricted, key-authenticated SSH reverse forward. App and database ports are not published on Octal8.

See [deployment and recovery](docs/DEPLOY_GUIDE.md), [current status](docs/STATUS.md), [roadmap](docs/ROADMAP.md), [features](docs/FEATURES.md), and [installation](docs/INSTALLATION.md).

Routine Dependabot version PRs are paused while the new baseline is established. Existing PR history is preserved.

MIT © Shane Walker.
