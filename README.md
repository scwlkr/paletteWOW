# paletteWOW

An open-source color palette generator inspired by "Coolors" built with Ruby on Rails.

## Features
- **Instant Generation**: Press the spacebar to randomly generate a 5-color palette.
- **Locking Colors**: Click on individual colors to "lock" them, meaning subsequent generations will only change the unlocked colors.
- **User Accounts**: Create an account, log in, and save custom palettes to your profile.
- **Sleek UI**: Fast, responsive, minimalistic, black-and-white base aesthetic allowing the generated colors to pop.

## Tech Stack
- **Framework**: Ruby on Rails 8+
- **Database**: PostgreSQL
- **Frontend**: Hotwire (Turbo/Stimulus) & Tailwind CSS

## Setup Instructions

1. **Prerequisites**
   - Ruby 3.4+
   - Rails 8+
   - PostgreSQL

2. **Installation**
   ```bash
   git clone https://github.com/scwlkr/paletteWOW.git
   cd paletteWOW
   bundle install
   rails db:setup
   ```

3. **Running the App**
   ```bash
   bin/dev
   ```
   Visit `http://localhost:3000` in your browser.
