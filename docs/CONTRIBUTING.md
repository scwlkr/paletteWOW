# Contributing to paletteWOW

First off, thank you for considering contributing to paletteWOW! It's people like you that make paletteWOW such a great tool for the community.

## How to Contribute

1. **Fork the repository** on GitHub.
2. **Clone the project** to your own machine.
3. **Branch off** of `main` to create a feature branch (`git checkout -b feature/my-awesome-feature`).
4. **Commit your changes** with a clear and concise message.
5. **Push to your fork** and submit a Pull Request.

## Local Setup

Ensure you have Ruby (latest version specified in `.ruby-version`), PostgreSQL, and Node/Yarn installed.

1. `bundle install`
2. `bin/rails db:setup`
3. `bin/dev` to run the development server with Tailwind CSS compilation.

## Code Style

- We follow standard Ruby conventions (Rubocop configurations pending).
- The frontend is built with purely functional Tailwind CSS and Hotwire (importmap/Stimulus). Please refrain from introducing complex JavaScript frameworks like React into the core codebase as we want to keep the application lightweight.

Thank you!
