# paletteWOW - Core Features Roadmap 🎨

This document serves as the high-level roadmap for all core features required to make paletteWOW a fully functional, free, and open-source alternative to Coolors.

## Phase 1: Core Generation & Keyboard Controls
- [X] **Spacebar Generation:** Pressing the spacebar randomly generates a new palette.
- [X] **Lock Mechanism:** Click a padlock icon to lock a color; subsequent spacebar presses only change unlocked colors. lock icon should be locked when color is locked and unlocked when color is unlocked.
- [X] **Undo/Redo:** Ability to step back and forth through previously generated palettes in the current session.

## Phase 2: Color Column Manipulation
- [X] **Copy Hex:** Click to instantly copy the color's HEX code to the clipboard.
- [X] **Drag & Drop Reordering:** Drag columns left or right to rearrange the palette.
- [X] **Remove Color:** Delete a specific color column from the palette.
- [X] **Add Color:** Click a `+` icon between columns (icon appears when hovering over the space between columns) to inject a new color (supporting palettes larger or smaller than the default 5)(maximum of 10 colors)(minimum of 2 colors).
- [X] **View Shades/Tints:** Toggle a view to see lighter and darker variations of a specific color, allowing the user to select one to replace the current base color (24 shades per color, 12 lighter and 12 darker, hexcode should appear when hovering over the shade/tint). 

## Phase 3: Advanced Generation Methods (The "Free Pro" Features)
- [X] **Method Selector:** A settings icon that opens a dropdown/modal to change how colors are generated based on color theory.
- [X] **Auto (Default):** Completely random colors that look good together.
- [X] **Monochromatic:** Variations of a single base hue.
- [X] **Analogous:** Colors adjacent to each other on the color wheel.
- [X] **Complementary:** Colors opposite each other on the color wheel.
- [X] **Split Complementary:** A base color and the two colors adjacent to its complement.
- [X] **Triadic:** Three colors evenly spaced around the color wheel.
- [X] **Tetradic:** Four colors evenly spaced around the color wheel.
- [X] **Square:** Four colors evenly spaced around the color wheel, with two sets of complementary colors.

## Phase 4: Exporting & Sharing
- [ ] **URL Sharing:** Generate a unique URL containing the HEX codes (e.g., `palettewow.xyz/1a1a1a-ffffff-ff0000`) that automatically loads the palette when visited.
- [ ] **Export to Image:** Download the palette as a `.png` file with the colors and hex codes displayed. ()
- [ ] **Export to PDF:** Download a structured `.pdf` document of the palette.
- [ ] **Export to Code (CSS):** Copy standard CSS variables (e.g., `--color-1: #1a1a1a;`).
- [ ] **Export to Tailwind:** Copy a Tailwind config object extending the theme colors.
- [ ] **Export to SVG:** Download an SVG representation of the palette.(should be a square with the colors in it)

## Phase 5: User Accounts & Library
- [ ] **Google OAuth Login:** Quick, passwordless sign-in.
- [ ] **Save Palettes:** Logged-in users can click a "Save" heart icon to add the active palette to their personal library.
- [ ] **Palette Dashboard:** A dedicated view for users to see, organize, and delete their saved palettes.
- [ ] **Naming:** Ability to give custom names to saved palettes.

## Phase 6: UI/UX & Polish
- [ ] **Color Names:** Automatically map HEX codes to human-readable color names (e.g., "Twilight Indigo", "Powder Blue").
- [X] **Responsive Design:** Ensure the column layout converts cleanly to horizontal rows on mobile devices.
- [ ] **Minimalist Aesthetic:** Stick strictly to a black, white, and gray UI to ensure the generated colors are the center of attention.