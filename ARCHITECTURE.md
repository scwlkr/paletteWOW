# paletteWOW Architecture

This document outlines the architectural approach for the paletteWOW application.

## 1. Data Models

### User
- Handles authentication via Google OAuth exclusively (Passwordless/Social-Only).
- **Relationships:** `has_many :palettes, dependent: :destroy`
- **Attributes:** `email`, `full_name`, `uid`, `provider`, and `avatar_url`.

### Palette
- Represents a saved collection of 5 colors.
- **Relationships:** 
  - `belongs_to :user, optional: true` (allows guest generations)
  - `has_many :colors, dependent: :destroy`
- **Attributes:** `name` (string)

### Color
- Represents an individual color within a palette.
- **Relationships:** `belongs_to :palette`
- **Attributes:** `hex_code` (string), `position` (integer)

## 2. Controllers

- `PalettesController`:
  - `index`: Renders the main generator view. Guest and logged-in users can use the generator here.
  - `create`: API endpoint; saves the current active palette (array of hex codes) to the logged-in user's account. Returns JSON success/error.
  - `show`: (Placeholder/TBD) Could display a single palette link.
  - `destroy`: Deletes a specific palette and redirect back to dashboard.
- `DashboardController`: 
  - `index`: Restricted to authenticated users. Fetches and displays the user's saved palettes and associated colors in a grid.

## 3. Frontend & Stimulus Approach

- **Tailwind CSS**: Used for all styling. The base UI is entirely minimal (black and white) so the palettes are the focal point.
- **Hotwire / Turbo**: For smooth transitions without full page reloads.
- **Stimulus (`palette_controller.js`)**:
  - Attached to the main generator `#index` view.
  - `keydown@window->palette#handleKeydown`: Listens for the Spacebar to trigger generation.
  - `generate()`: Generates random hex codes, calculates optimal text color (black vs white based on HSP brightness), and sets background colors.
  - `toggleLock(event)`: Locks/unlocks a specific color column by preventing its hex code from updating on next generation.
  - `copyHex(event)`: Copies the clicked hex code to the user's clipboard.
  - Form submission logic to save the palette via Turbo when the user clicks "Save" (TBD in Phase 4).
