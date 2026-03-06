# paletteWOW Architecture

This document outlines the architectural approach for the paletteWOW application.

## 1. Data Models

### User
- Handles authentication via Devise (email and password).
- **Relationships:** `has_many :palettes, dependent: :destroy`
- **Attributes:** `email`, `encrypted_password`, and Devise default tracking/reset fields.

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
  - `create`: Saves the current active palette to the logged-in user's account.
  - `show`/`edit`/`update`/`destroy`: Manage saved palettes.
- `DashboardController` (or user-scoped `PalettesController`): Displays the user's saved palettes.

## 3. Frontend & Stimulus Approach

- **Tailwind CSS**: Used for all styling. The base UI is entirely minimal (black and white) so the palettes are the focal point.
- **Hotwire / Turbo**: For smooth transitions without full page reloads.
- **Stimulus (`palette_controller.js`)**:
  - Attached to the main generator `#index` view.
  - `keydown@window->palette#handleKeydown`: Listens for the Spacebar to trigger generation.
  - `generate()`: Generates random hex codes.
  - `toggleLock(event)`: Locks/unlocks a specific color column by preventing its hex code from updating on next generation.
  - Form submission logic to save the palette via Turbo when the user clicks "Save".
