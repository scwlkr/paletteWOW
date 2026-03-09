# Frontend Logic & Color Theory

paletteWOW's UI behaves almost entirely as a Single Page Application (SPA), heavily driven by client-side Javascript via Stimulus (`palette_controller.js`). 

## Color Theory Generation Engine (`chroma-js`)

To calculate beautiful palettes dynamically, we leverage the `chroma-js` library. The logic applies distinct degree offsets to a randomly generated base color located on the HSL color wheel.

Here is how the 8 methods are calculated:
1. **Auto:** No strict rules; randomly pairs aesthetically pleasing colors using isolated HSL generation constraints.
2. **Monochromatic:** Adjusts the Lightness (`L` in HSL) of the base hue in increments without shifting the color angle.
3. **Analogous:** Steps the Hue by **+30 degrees** sequentially across the wheel.
4. **Complementary:** Offsets the base Hue by exactly **180 degrees**. It uses light/dark variations of these two opposites to fill a 5-color palette.
5. **Split Complementary:** Offsets the Hue by **150 degrees** and **210 degrees** from the base color.
6. **Triadic:** Selects three colors spaced evenly at **120 degrees** apart.
7. **Tetradic:** Selects four colors shaped as a rectangle on the wheel (e.g., base, **+60 degrees**, **+180 degrees**, **+240 degrees**).
8. **Square:** Selects four colors spaced evenly at **90 degrees** apart.

## Client-Side Branded PNG Generation

When a user clicks "Export to Image", paletteWOW generates a fully branded PNG graphic entirely in the user's browser, preventing the need for backend image-processing server loads.
1. The Javascript utilizes the DOM rendering engine to map the active colors and their hex codes to a hidden HTML canvas template.
2. It paints the paletteWOW logo, applies the exact colors using `fillRect`, and overlays the hex codes using canvas font context.
3. The resulting canvas element is converted to a base64 Data URI (`toDataURL("image/png")`) and fed directly to `<a download>` triggering the native browser download prompt.

## Undo/Redo Stack State Management

paletteWOW features lightning-fast Undo/Redo buttons capable of reversing spacebar generations. This is completely localized and *never* hits the database.

- **Dual-Stack Memory:** The `palette_controller.js` memory maintains two arrays (`undoStack` and `redoStack`).
- **Pushing State:** Every time the user generates a new palette, the active hex codes are joined into a string (e.g., `#FFFFFF,...`) and pushed onto the `undoStack`, while clearing the `redoStack`.
- **Reverting:** Clicking "Undo" pops the latest state off the `undoStack`, applies it to the DOM, and pushes the reverted state to the `redoStack`. 
- **Efficiency:** This ensures infinite backtracking within a session perfectly seamlessly with zero network overhead.
