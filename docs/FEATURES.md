# paletteWOW - Current Capabilities 🎨

paletteWOW is a fully functional, free, and open-source alternative to Coolors. Below is a comprehensive list of our current capabilities, broken down by category.

## Core Logic
- **Spacebar Generation:** Press the spacebar to instantly generate a completely new palette.
- **Lock & Roll (Color Locking):** Click the padlock icon on any color to lock it in place. Subsequent generations will only change the unlocked columns.
- **Drag & Drop Reordering:** Rearrange the palette by dragging color columns horizontally.
- **Add / Remove Colors:** Hover between columns to add a new color (max 10), or delete an existing color to shrink the palette (min 2).
- **Undo / Redo Stack:** Seamlessly step backward and forward through your previously generated palettes within the active session without refreshing the page.

## Advanced Generation (Color Theory)
Powered by `chroma-js`, paletteWOW supports 8 advanced color theory techniques accessible via the Method Selector dropdown:
- **Auto:** Completely random, aesthetically pleasing combinations.
- **Monochromatic:** Variations of a single base hue.
- **Analogous:** Colors adjacent to each other on the color wheel.
- **Complementary:** Colors opposite each other on the color wheel.
- **Split Complementary:** A base color combined with the two colors adjacent to its complement.
- **Triadic:** Three colors evenly spaced around the color wheel.
- **Tetradic:** Four colors evenly spaced around the color wheel.
- **Square:** Four colors evenly spaced around the color wheel, specifically utilizing two sets of complementary colors.

## Export Engine & Sharing
- **1-Click Copy Hex:** Click any color's HEX code to instantly copy it to your clipboard.
- **URL Sharing:** Palettes are encapsulated in the URL (e.g., `palettewow.xyz/1a1a1a-ffffff-ff0000`). Share the link to instantly load the exact palette.
- **Export to Image (PNG):** Render and download a beautifully formatted PNG of the palette and hex codes entirely on the client-side.
- **Export to PDF:** Download a structured, printable PDF document of the palette.
- **Export to Code (CSS):** Copy a block of standard CSS variables (e.g., `--color-1: #1a1a1a;`).
- **Export to Tailwind:** Copy a ready-to-use Tailwind config object that extends your theme colors.
- **Export to SVG:** Download an SVG representation of the palette.

## Dashboards & Libraries
- **Google OAuth Login:** Quick, passwordless, social-only sign-in functionality.
- **Save Palettes:** Logged-in users can save their active color palette to their personal library.
- **Palette Dashboard:** A dedicated, persistent view for users to view, organize, and delete their saved palettes.
- **Custom Naming:** Assign custom names to your saved palettes for easy reference.