# paletteWOW Context

paletteWOW is a fast, minimalist, open-source Ruby on Rails color palette generator inspired by Coolors. The product centers on instant palette generation, direct manipulation of colors, sharing/export workflows, and optional saved palettes for authenticated users.

## Product Language

**paletteWOW**:
The application and project. Use this name when referring to the color palette generator.

**Palette**:
A user-facing set of colors represented as hex codes. Palettes may be generated in the browser, shared through the URL, exported, or saved by signed-in users.

**Generator**:
The primary fullscreen interface at the root route. It supports spacebar generation, locking colors, reordering colors, adding or removing color segments, copying hex values, and choosing a color-theory method.

**Color Method**:
One of the generation strategies exposed in the UI, including Auto, Monochromatic, Analogous, Complementary, Split Complementary, Triadic, Tetradic, and Square.

**Saved Palette**:
A persisted palette tied to an authenticated user. Saved palettes are managed through the dashboard and stored with a PostgreSQL array of color hex values.

**Project Truth**:
The durable project record in this repository: this file, `docs/ROADMAP.md`, `docs/STATUS.md`, and the existing docs in `docs/`.

## Current Product Shape

- Rails 8 application with PostgreSQL.
- Root route renders the palette generator through `PalettesController#index`.
- Shared palette URLs are supported with slash-separated hex-code route constraints.
- Google OAuth powers sign-in for dashboard and saved-palette workflows.
- Stimulus controllers handle the primary browser-side interactions and export behavior.
- Tailwind CSS provides the UI styling approach.
- Existing documentation follows a Divio-style library: tutorials, how-to guides, reference, and explanation docs live under `docs/`.

## Source Of Truth

- `README.md` is the public entry point.
- `docs/FEATURES.md` lists current user-facing capabilities.
- `docs/ARCHITECTURE.md` explains the Rails, Hotwire, and PostgreSQL array decisions.
- `docs/FRONTEND_LOGIC.md` explains the color generation and client-side export mechanics.
- `docs/STATUS.md` is the handoff document for current state, proof, blockers, and next action.
- `docs/ROADMAP.md` records the next maintenance and product direction.

## Working Rules

- Preserve the product promise: fast, minimal, color-focused, and free of unnecessary UI weight.
- Keep frontend interactivity in Stimulus controllers unless a broader architecture decision is explicitly made.
- Prefer Tailwind utility styling and avoid new custom CSS unless the existing asset structure requires it.
- Treat Google OAuth and saved-palette behavior as user-facing flows that need explicit validation when touched.
- Do not store secrets or credentials in repository docs, commits, logs, or screenshots.
- Use branches and pull requests for reviewable maintenance work.

## Validation Ladder

Run the applicable checks after meaningful changes:

```bash
bundle exec rails test
bundle exec rails zeitwerk:check
bundle exec rails assets:precompile
```

For broader quality passes, also consider the repository CI helper:

```bash
bin/ci
```
