# paletteWOW

![paletteWOW banner](assets/brand/banner-square.png)

A lightning-fast, sleek, and minimalist open-source Ruby on Rails color palette generator inspired by Coolors. 

**[🌐 Try it live at palettewow.xyz](https://palettewow.xyz)**

## Project Summary
paletteWOW is a fully functional, open-source color palette generator designed for speed and aesthetic simplicity. It provides an intuitive interface for generating, fine-tuning, and exporting beautiful 5-color palettes. Built with a focus on performance and minimalist design, paletteWOW leverages an optimized database architecture and client-side processing to deliver a seamless user experience.

## Tech Stack
- **Backend:** Ruby on Rails 8, PostgreSQL, OmniAuth (Google OAuth)
- **Frontend:** Hotwire (Turbo & Stimulus), Tailwind CSS, chroma-js
- **Deployment:** Kamal, Docker, DigitalOcean Droplet
- **Icons:** Heroicons (SVG)

## Quick Start
Get paletteWOW running locally in just a few steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/scwlkr/paletteWOW.git
   cd paletteWOW
   ```
2. **Install dependencies:**
   ```bash
   bundle install
   yarn install
   ```
3. **Setup the database:**
   ```bash
   bin/rails db:prepare
   ```
4. **Start the development server:**
   ```bash
   bin/dev
   ```
5. Open `http://localhost:3000` in your browser.

For a full step-by-step setup guide, see [docs/INSTALLATION.md](docs/INSTALLATION.md).

## Documentation
Dive deeper into how paletteWOW is built:
- [Capabilities](docs/FEATURES.md)
- [Architecture & Database Strategy](docs/ARCHITECTURE.md)
- [Frontend Logic & Color Theory](docs/FRONTEND_LOGIC.md)
- [Installation Guide](docs/INSTALLATION.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Changelog](docs/CHANGELOG.md)

## License
Licensed under the [MIT License](LICENSE.md).
