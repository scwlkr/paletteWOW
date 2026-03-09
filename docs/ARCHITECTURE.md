# paletteWOW Architecture

This document provides a deep dive into the architectural decisions, Model-View-Controller (MVC) flow, and database optimization strategies of paletteWOW.

## 1. Model-View-Controller (MVC) Flow

paletteWOW follows a classic Rails MVC architecture, enhanced by Hotwire for dynamic frontend updates:

- **Model:** Handles data persistence and business logic. The `User` and `Palette` models manage authentication and saved color data.
- **View:** Built with Tailwind CSS and ERB templates. Views are kept minimal, focusing on the color generator and user dashboard.
- **Controller:** 
  - `PalettesController` governs the core application flow, rendering the generator UI and exposing APIs for saving palettes.
  - `DashboardController` manages the authenticated user's library of saved palettes.

## 2. Database Optimization Strategy

### The "Pocket" vs. "Box" Analogy
In a standard relational design, you might use a separate `colors` table with a `belongs_to :palette` association. We refer to this as the **"Box"** approach: every palette is a box, and you have to dig into a massive crate of loose colors (the `colors` table) to find the ones that belong in your box. This requires continuous `JOIN` operations, scaling poorly as millions of colors are generated.

**Our Solution: The "Pocket" Approach**
We optimize this by using a **PostgreSQL Array** of strings directly on the `palettes` table. By treating the colors as attributes stored in the palette's "pocket", we eliminate the need for a separate `colors` table. 

- **Why it's better:** Loading a user's dashboard only requires querying the `palettes` table. No `JOIN`s are needed to reconstruct the 5-color palettes.
- **Trade-off:** We lose the ability to easily query "all palettes containing a specific hex code," but since user workflows are entirely based on viewing their own saved palettes, this query is unnecessary.

## 3. Database Schema Documentation

### `User` Model
- Handles authentication exclusively via strictly passwordless Google OAuth.
- **Relationships:** `has_many :palettes, dependent: :destroy`
- **Attributes:** 
  - `email` (string)
  - `full_name` (string)
  - `uid` (string)
  - `provider` (string)
  - `avatar_url` (string)

### `Palette` Model
- Represents a saved collection of 5 colors.
- **Relationships:** `belongs_to :user, optional: true`
- **Attributes:** 
  - `name` (string)
  - `colors` (string, array: true, default: []) - **The core optimization.**

### Raw Database Entry Example
The `colors` column leverages PostgreSQL's native array type. A raw database entry for a palette looks like this:

```sql
 id | name           | user_id | colors                                            | created_at          | updated_at          
----+----------------+---------+---------------------------------------------------+---------------------+---------------------
 42 | Sunset Vibes   | 7       | {"#FF5EDF","#FF0000","#FF7A00","#FFD600","#00FFD1"} | 2026-03-08 20:00:00 | 2026-03-08 20:00:00
```
