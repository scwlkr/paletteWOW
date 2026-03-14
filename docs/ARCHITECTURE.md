# Explanation: Architecture & Database Optimization

This document explores the foundational engineering choices behind paletteWOW. It explains why a traditional relational table architecture was discarded in favor of a monolithic data type schema and how Hotwire replaces React for dynamic rendering.

## 1. The PostgreSQL "Pocket" Optimization

A standard Rails relational database design would require two tables for color palettes:
- `Palette` (`id`, `user_id`, `name`)
- `Color` (`id`, `palette_id`, `hex_code`)

### The "Box" Problem
We define this traditional model as the **"Box" Approach**. Every `Palette` is an empty container, requiring the server to run an `INNER JOIN` query to pull up to five loose `Color` rows out from an ever-expanding registry.
If millions of colors are generated, `JOIN` computations become incredibly expensive purely to load five hex codes onto a user dashboard.

### The "Pocket" Solution
We optimized this architecture by implementing a **PostgreSQL Array** explicitly on the `palettes` table. 
Instead of treating colors like connected independent entities, we push the string array of hex codes into a pocket attached natively to the single instance.

```sql
 id | name           | user_id | colors                                            | created_at          | updated_at          
----+----------------+---------+---------------------------------------------------+---------------------+---------------------
 42 | Sunset Vibes   | 7       | {"#FF5EDF","#FF0000","#FF7A00","#FFD600","#00FFD1"} | 2026-03-08 20:00:00 | 2026-03-08 20:00:00
```

This ensures we only ever execute one direct SQL hit per dashboard row lookup, dropping database retrieval time exponentially. We trade off complex relational analytics ("find all palettes that use `#FF5EDF`") for unparalleled dashboard load speed since our users primarily read data linearly.

## 2. Dynamic Interfacing Without React

paletteWOW mimics a Javascript-heavy Single Page Application without injecting Node packages outside the Rails compiler.

### The Model-View-Controller Execution
- **Routing:** Handled entirely by `PalettesController` and `DashboardController`.
- **Views:** Driven by `.html.erb` partials mapping Tailwind CSS.
- **Interactivity:** Managed by isolated classes within Stimulus (`palette_controller.js`, `clipboard_controller.js`). 

Because we offload client-side image generation (via hidden `<canvas>` elements) to Javascript natively, Rails is never burdened handling background image processors or ActiveStorage queues when thousands of palettes are exported.
