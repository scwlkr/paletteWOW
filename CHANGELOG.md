# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - Phase 5: Polish & Open Source Readiness
- Finalized open-source files: `LICENSE.md` (MIT) and `CONTRIBUTING.md`.
- Expanded `README.md` with comprehensive setup and feature documentation.
- Project is fully ready for public display.
- Created `DashboardController` and `app/views/dashboard/index.html.erb` to display user's saved palettes.
- Implemented `PalettesController#create` API to receive hex codes and persist `Palette` and `Color` records.
- Implemented `PalettesController#destroy` to allow palette deletion from the dashboard.
- Updated `palette_controller.js` to dispatch a fetch POST to `/palettes` when saving.
- Added Dashboard navigation link to the authenticated layout.

## [0.0.4] - Phase 3: Generator Engine & Frontend
- Created `PalettesController` and mapped root route to `palettes#index`.
- Built the fullscreen, responsive 5-column generator UI using Tailwind CSS.
- Implemented `palette_controller.js` (Stimulus) to handle spacebar generation, hex code randomization, color locking, and click-to-copy functionality.

## [0.0.3] - Phase 2: User Authentication (Google OAuth)
- Transitioned to a strictly "Google-only" authentication system (Passwordless/Social-Only).
- Configured `omniauth` and `omniauth-google-oauth2` for a lightweight setup without Devise.
- Styled Google Sign-In and profile views using minimalist Tailwind CSS.

## [0.0.2] - Phase 1: Core Data Models
- Generated `User`, `Palette`, and `Color` models.
- Established relationships: `User has_many :palettes`, `Palette belongs_to :user (optional)`, `Palette has_many :colors`, and `Color belongs_to :palette`.

## [0.0.1] - Initial Setup
- Initialized Ruby on Rails 8 application with PostgreSQL.
- Configured Tailwind CSS for frontend styling.
- Created placeholder `README.md`, `ARCHITECTURE.md`, and `CHANGELOG.md`.
