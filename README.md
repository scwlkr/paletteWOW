# paletteWOW

![paletteWOW banner](./palettewow-sqaure-banner.png)

A lightning-fast, sleek, and minimalist Ruby on Rails color palette generator inspired by Coolors. 

## Features

- **Spacebar Generation**: Instantly generate beautiful 5-color palettes using the `HSP` brightness model for optimal text contrast.
- **Lock & Roll**: Click the "lock" icon on any color to hold it in place while you randomly generate the rest.
- **Seamless Saving**: Create an account, log in, and save your favorite palettes directly to your dashboard.
- **1-Click Copy**: Click on any hex code to instantly copy it to your clipboard.
- **Minimalist Aesthetic**: Built entirely with utility-first Tailwind CSS.

## Tech Stack

- **Backend**: Ruby on Rails 8, PostgreSQL, Devise
- **Frontend**: Hotwire (Turbo & Stimulus), Tailwind CSS
- **Icons**: Heroicons (SVG)

## Local Development Setup

Ensure you have Ruby (check `.ruby-version`), PostgreSQL, and Node/Yarn installed.

```bash
# 1. Clone the repo
git clone https://github.com/scwlkr/paletteWOW.git
cd paletteWOW

# 2. Install dependencies
bundle install

# 3. Setup the database
bin/rails db:setup

# 4. Start the development server with Tailwind watchers
bin/dev
```

Open `http://localhost:3000` in your browser.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
