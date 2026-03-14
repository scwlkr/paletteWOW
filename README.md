# paletteWOW

> A lightning-fast, sleek, and minimalist open-source Ruby on Rails color palette generator inspired by Coolors.

[![Ruby on Rails: 8.x](https://img.shields.io/badge/Ruby_on_Rails-8.x-CC0000.svg)](https://rubyonrails.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why This Exists

Color palettes are essential for design, but many tools are bloated with ads, slow to load, or require paid subscriptions. paletteWOW provides a free, open-source, lightning-fast alternative that focuses purely on the colors, generating beautiful palettes instantly without server roundtrips.

## Quick Start

```bash
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW
bundle install
yarn install
bin/rails db:prepare
bin/dev
```

## Installation

**Prerequisites**: Ruby 3.2.0+, Node.js, Yarn, PostgreSQL

```bash
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW
bundle install
yarn install
```

Create a `.env` file at the root of the project with your Google OAuth credentials:
```text
GOOGLE_CLIENT_ID=your_local_client_id
GOOGLE_CLIENT_SECRET=your_local_client_secret
```

Initialize the database and start the server:
```bash
bin/rails db:prepare
bin/dev
```

Open `http://localhost:3000` in your browser.

## Usage

### Basic Example

Open the app and press the `Spacebar` to instantly generate a completely new color palette. Click on the padlock icon to lock specific colors, keeping them in place while the rest of the palette generates.

### Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `GOOGLE_CLIENT_ID` | `string` | `none` | Used for Google OAuth login |
| `GOOGLE_CLIENT_SECRET` | `string` | `none` | Used for Google OAuth login |
| `POSTGRES_PASSWORD` | `string` | `none` | Required for production deployment |

### Advanced Usage

Use the Method Selector dropdown to switch between 8 advanced color theory techniques (Auto, Monochromatic, Analogous, Complementary, Split Complementary, Triadic, Tetradic, Square). Export your completed palette to PNG, PDF, SVG, CSS, or Tailwind configuration using the export menu. 

## Documentation Library

paletteWOW's documentation follows the Divio system:

- **Tutorials**: [Installation Guide](docs/INSTALLATION.md)
- **How-To Guides**: [Deployment Guide](docs/DEPLOY_GUIDE.md)
- **Reference**: [Features & Capabilities](docs/FEATURES.md)
- **Explanation**: [Architecture & Database Strategy](docs/ARCHITECTURE.md), [Frontend Logic & Color Theory](docs/FRONTEND_LOGIC.md)

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md)

## License

MIT © Shane Walker
