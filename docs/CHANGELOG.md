# Changelog

All notable changes to this project will be documented in this file.

## [6.0.0] - Phase 6: UI/UX & Polish
- Automatically map HEX codes to human-readable color names in the UI.
- Implemented responsive design logic: column layout gracefully converts to horizontal rows on mobile.
- Refined minimalist aesthetic using functional Google Fonts and strict black/white/gray bounding UI.
- Comprehensive documentation overhaul (`FEATURES.md`, `ARCHITECTURE.md`, `FRONTEND_LOGIC.md`, etc.).

## [5.0.0] - Phase 5: User Accounts & Library
- Restructured `DashboardController` and views to display users' saved palettes.
- Implemented `PalettesController#create` API to persist `Palette` records using PostgreSQL array optimization.
- Allowed users to assign custom names to palettes.
- Implemented `destroy` to allow palette deletion from the dashboard.

## [4.0.0] - Phase 4: Exporting & Sharing
- Encapsulated active palettes dynamically into the URL for instant sharing.
- Added client-side export functionality utilizing `html2canvas` and `jsPDF`.
- Supported exports for PNG, PDF, and SVG.
- Supported code exports for raw CSS Variables and Tailwind CSS config objects.

## [3.0.0] - Phase 3: Advanced Generation Methods
- Integrated `chroma-js` to handle 8 distinct color theory generation models.
- Added Method Selector dropdown to switch between Auto, Monochromatic, Analogous, Complementary, Split Complementary, Triadic, Tetradic, and Square.
- Upgraded floating toolbars into a clean, permanent `h-16` application header.
- Replaced basic text buttons with SVG Heroicons.

## [2.0.0] - Phase 2: Color Column Manipulation & Authentication
- Added UI functionality to copy hex codes, drag/drop reorder, and remove/add colors dynamically.
- Implemented shade/tint viewing toggle.
- Transitioned authentication strictly to Google OAuth (Passwordless).
- Scaled `User` and `Palette` data models.

## [1.0.0] - Phase 1: Core Generation & Keyboard Controls
- Established fullscreen 5-column generator UI via Tailwind CSS.
- Attached `palette_controller.js` to handle spacebar press generation and hex code randomization.
- Added color lock mechanism.
- Created local session Undo/Redo tracking using dual-stack memory implementation.
- Initialized Ruby on Rails 8 application with PostgreSQL.
