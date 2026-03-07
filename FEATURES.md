# paletteWOW - Core Features Roadmap 🎨

This document serves as the high-level roadmap for all core features required to make paletteWOW a fully functional, free, and open-source alternative to Coolors.

## Phase 1: Core Generation & Keyboard Controls
- [ ] **Spacebar Generation:** Pressing the spacebar randomly generates a new palette.
- [ ] **Lock Mechanism:** Click a padlock icon to lock a color; subsequent spacebar presses only change unlocked colors.
- [ ] **Undo/Redo:** Ability to step back and forth through previously generated palettes in the current session.

## Phase 2: Color Column Manipulation
- [ ] **Copy Hex:** Click to instantly copy the color's HEX code to the clipboard.
- [ ] **Drag & Drop Reordering:** Drag columns left or right to rearrange the palette.
- [ ] **Remove Color:** Delete a specific color column from the palette.
- [ ] **Add Color:** Click a `+` icon between columns to inject a new color (supporting palettes larger or smaller than the default 5).
- [ ] **View Shades/Tints:** Toggle a view to see lighter and darker variations of a specific color, allowing the user to select one to replace the current base color.

## Phase 3: Advanced Generation Methods (The "Free Pro" Features)
- [ ] **Method Selector:** A dropdown/modal to change how colors are generated based on color theory.
- [ ] **Auto (Default):** Completely random colors that look good together.
- [ ] **Monochromatic:** Variations of a single base hue.
- [ ] **Analogous:** Colors adjacent to each other on the color wheel.
- [ ] **Complementary:** Colors opposite each other on the color wheel.
- [ ] **Split Complementary:** A base color and the two colors adjacent to its complement.
- [ ] **Triadic:** Three colors evenly spaced around the color wheel.

## Phase 4: Exporting & Sharing
- [ ] **URL Sharing:** Generate a unique URL containing the HEX codes (e.g., `palettewow.xyz/1a1a1a-ffffff-ff0000`) that automatically loads the palette when visited.
- [ ] **Export to Image:** Download the palette as a `.png` file with the colors and hex codes displayed.
- [ ] **Export to PDF:** Download a structured `.pdf` document of the palette.
- [ ] **Export to Code (CSS):** Copy standard CSS variables (e.g., `--color-1: #1a1a1a;`).
- [ ] **Export to Tailwind:** Copy a Tailwind config object extending the theme colors.
- [ ] **Export to SVG:** Download an SVG representation of the palette.

## Phase 5: User Accounts & Library
- [ ] **Google OAuth Login:** Quick, passwordless sign-in.
- [ ] **Save Palettes:** Logged-in users can click a "Save" heart icon to add the active palette to their personal library.
- [ ] **Palette Dashboard:** A dedicated view for users to see, organize, and delete their saved palettes.
- [ ] **Naming:** Ability to give custom names to saved palettes.

## Phase 6: UI/UX & Polish
- [ ] **Color Names:** Automatically map HEX codes to human-readable color names (e.g., "Twilight Indigo", "Powder Blue").
- [ ] **Responsive Design:** Ensure the column layout converts cleanly to horizontal rows on mobile devices.
- [ ] **Minimalist Aesthetic:** Stick strictly to a black, white, and gray UI to ensure the generated colors are the center of attention.