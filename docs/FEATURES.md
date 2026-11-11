# Reference: Features & Capabilities

This document provides an ultimate catalog of paletteWOW's primary functions, user flow interactions, and native export methods.

## Generator UI Mechanisms

| Feature | Category | Description | Access Point |
|---------|----------|-------------|--------------|
| **Spacebar Generation** | Execution | Instantly generates five new colors following active method parameters. | Global Keyboard Input |
| **Lock & Roll** | Preservation | Applies a lock flag preventing execution refresh to the target column. | Column Padlock SVG |
| **Draggable Reordering** | Manipulation | Horizontally adjust absolute column placement to structure color combinations. | Native Column Drag |
| **Add Color Segment** | Capacity | Modifies absolute grid array up to 10 columns within a single UI scope. | Inter-column Plus Icon |
| **Remove Color Segment** | Capacity | Depreciates active grid array mapping down to a minimum configuration. | Column Delete Icon |
| **Hex Copying** | Exporting | Applies the `#` value directly to the native OS Copy/Paste clipboard schema. | Bottom Hex Text Node |
| **Color vision preview** | Accessibility | Preview full and milder color vision deficiencies. Original colors remain available for editing, copying, sharing and exports. | Desktop and mobile Color vision selectors |
| **Adjust palette** | Editing | Preview hue, saturation, brightness and temperature changes across unlocked colors. Apply creates one undo step; Cancel or Escape restores the original palette. | Desktop and mobile Adjust buttons |
| **Method Configuration** | Theory | Swaps internal generation engines across 8 chroma.js mathematical behaviors. | Top Navigation Bar Tab |

## Image palettes

At `/image`, choose, drop or paste a photo, select two to ten colors, then open
the extracted palette in the generator. Images are decoded and sampled in the
browser and never uploaded. PNG, JPEG, WebP, GIF, AVIF and BMP images up to 20 MB
are supported when the browser can decode them. Images with fewer distinct
colors return fewer swatches; a solid image opens as two matching swatches.

## Gradients

At `/gradient`, build linear or radial gradients with two to ten color stops.
Edit each color and percentage position, add or remove stops, and choose the
linear angle. The preview updates immediately and the URL restores the complete
gradient. Copy CSS or download a 1600 × 1000 PNG, all within the browser.

## Export Integrations

| Title | Type | Component Schema Output Configuration |
|-------|------|--------------------------------|
| **Link Wrapping** | Network | Appends raw hashes separated by hyphens dynamically via router parameters. |
| **PNG Package** | Graphic File | Bundles `.png` attachment built seamlessly without server dependency pinging. |
| **PDF Document** | Document File | Formats an A4 mapped layout defining colors graphically and textually. |
| **CSS Output** | Code String | Provides a basic nested loop string array using standard native variables. |
| **Tailwind Export** | Code String | Builds customized theme structure ready to securely format a tailwind config. |
| **SVG Layout** | Graphic File | Compiles mathematically flawless vector maps of the specific layout colors. |

## Accounts and the saved library

Google sign-in has been removed. Accounts, profile/dashboard pages, and saved-library API routes are disabled for the current release. The existing library source is retained for a possible future WorkOS AuthKit integration, which has not been implemented.

Generation, color manipulation, share links, and exports remain public and require no account.
