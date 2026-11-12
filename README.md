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

The image tool also has a browser check. With Playwright installed separately
and available on `NODE_PATH`, start the test app and run
`BASE_URL=http://127.0.0.1:3000 node test/browser/image.cjs`.
Set `SCREENSHOTS=.build-mode/screens` to save desktop and phone views.

The gradient tool uses the same browser check setup (with `playwright-core`
available): `BASE_URL=http://127.0.0.1:3000 node test/browser/gradient.cjs`.
The gradient palette check uses the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/gradient_palette.cjs`.
Color page navigation and its JavaScript-disabled view use the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/color.cjs`.
Palette import validation and keyboard flow use the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/import.cjs`.
Tailwind swatches, clipboard feedback and generator handoff use the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/tailwind.cjs`.
Named-color search, pagination and JavaScript-disabled navigation use the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/named_colors.cjs`.
Palette visualizer recoloring, shuffle and generator handoff use the same setup:
`BASE_URL=http://127.0.0.1:3000 node test/browser/visualizer.cjs`.

PNG/PDF export options and downloaded file contents use the same setup, with
`pngjs` and `pdfjs-dist` also available on `NODE_PATH`:
`BASE_URL=http://127.0.0.1:3000 node test/browser/export.cjs`.

Dark mode, device preferences, saved choices and theme-safe color previews use
the same browser setup: `BASE_URL=http://127.0.0.1:3000 node test/browser/theme.cjs`.

Tools navigation, keyboard dismissal, footer access and JavaScript-disabled links
use the same setup: `BASE_URL=http://127.0.0.1:3000 node test/browser/navigation.cjs`.

## Hosting

Coolify runs the application and PostgreSQL on the Octal8 front door, builds on the workhorse, and serves public HTTPS directly. The database has no public port. Nightly database backups keep three copies on the other machine.

See [deployment and recovery](docs/DEPLOY_GUIDE.md), [current status](docs/STATUS.md), [roadmap](docs/ROADMAP.md), [features](docs/FEATURES.md), and [installation](docs/INSTALLATION.md).

Routine Dependabot version PRs are paused while the new baseline is established. Existing PR history is preserved.

MIT © Shane Walker.
