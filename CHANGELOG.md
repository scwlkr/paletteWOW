# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Phase 4: Saving & Managing Palettes
- Created `DashboardController` and `app/views/dashboard/index.html.erb` to display user's saved palettes.
- Implemented `PalettesController#create` API to receive hex codes and persist `Palette` and `Color` records.
- Implemented `PalettesController#destroy` to allow palette deletion from the dashboard.
- Updated `palette_controller.js` to dispatch a fetch POST to `/palettes` when saving.
- Added Dashboard navigation link to the authenticated layout.

## [0.0.4] - Phase 3: Generator Engine & Frontend
- Created `PalettesController` and mapped root route to `palettes#index`.
- Built the fullscreen, responsive 5-column generator UI using Tailwind CSS.
- Implemented `palette_controller.js` (Stimulus) to handle spacebar generation, hex code randomization, color locking, and click-to-copy functionality.

## [0.0.3] - Phase 2: User Authentication
- Installed and configured `devise` for user sessions and registration.
- Styled Login and Registration views using a minimalist Tailwind CSS approach.
- Added global user navigation and flash messages to the application layout.

## [0.0.2] - Phase 1: Core Data Models
- Generated `User`, `Palette`, and `Color` models.
- Established relationships: `User has_many :palettes`, `Palette belongs_to :user (optional)`, `Palette has_many :colors`, and `Color belongs_to :palette`.

## [0.0.1] - Initial Setup
- Initialized Ruby on Rails 8 application with PostgreSQL.
- Configured Tailwind CSS for frontend styling.
- Created placeholder `README.md`, `ARCHITECTURE.md`, and `CHANGELOG.md`.
