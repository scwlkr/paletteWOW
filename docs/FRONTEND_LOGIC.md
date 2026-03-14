# Explanation: Frontend Mechanics & Color Theory

This document explains the algorithms powering paletteWOW's instant color generation, client-side exports, and dual-stack memory implementation using `chroma-js`.

## 1. Color Theory Algorithms

The application generates complementary, analogous, monochromatic, and more complex palettes by applying geometric degree shifts across a generated base hue `HSL` value via `chroma.js`.

The `palette_controller.js` file houses the core logic for the method engine selector:
- **Auto:** Randomizes five distinct RGB hashes and displays them natively.
- **Monochromatic:** Secures an identical `H` (Hue) value across all 5 colors, parsing variations exclusively using `L` (Lightness) increments.
- **Analogous:** Computes and shifts the primary Hue angle precisely **+30 degrees** for every sequential index in the array.
- **Complementary:** Implements a strict **180 degree** diametric angle from the core color on the wheel. It blends this singular inverse with light and shadow manipulations to output 5 valid hex codes.
- **Split Complementary:** Leverages **A** (Base Node) and generates exactly **150 degrees** and **210 degrees** on either side of its absolute complement.
- **Triadic:** Determines extreme color separation by charting three absolute values positioned at specific **120 degree** points across the radial gradient.
- **Tetradic:** Executes a "rectangular" selection scheme generating values located at **0, +60, +180, and +240 degrees** from the master node.
- **Square:** Defines a perfect quadrangular rotation around the color circle, marking absolute hex coordinates every **90 degrees**.

## 2. Client-Side PNG Export Utility

When users click the `Export to Image` dropdown option, paletteWOW bypasses all server latency by computing the PNG graphics purely on the user's browser runtime.

We employ `html2canvas` architecture layered on top of the browser's DOM object model. 

1. A hidden DOM snippet `<canvas>` encapsulates the application's logo.
2. The JS paints the five respective active columns dynamically mapping to 5 `fillRect` commands across the layout bounds.
3. The context maps the exact text of the hex code into a Canvas Text block in true White/Black contrast syntax.
4. The JS merges the composite template `canvas.toDataURL("image/png")` outputting a base64 Data URI injected directly to a temporary DOM anchored `<a>` tag string explicitly loaded to fire an auto-download event mimicking traditional browser attachments.

## 3. The Dual-Stack UI Engine (Undo/Redo Tracking)

Because generation relies heavily on the `Spacebar` rapid-press mechanism, mapping active `Undo` capabilities using Active Record to PostgreSQL instances is functionally impossible without significant latency.

Our `palette_controller.js` isolates a pure internal session history, manipulating a dual-stack algorithm built natively inside the Javascript memory buffer.

When a fresh instance computes:
- The previous exact 5-string hex block is pushed instantly to the internal `undoStack`.
- The corresponding `redoStack` clears automatically.
- Reverting forces the code block index to pop backward from `undoStack`, render onto the dynamic Stimulus DOM variables mapped to each visual column, and dump that prior block code into the empty `redoStack`.

This structure yields flawless `<` (undo) and `>` (redo) tracking identical to software applications locally installed on disk.
