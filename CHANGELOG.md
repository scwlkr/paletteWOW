# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - Phase 1: Core Data Models
- Generated `User`, `Palette`, and `Color` models.
- Established relationships: `User has_many :palettes`, `Palette belongs_to :user (optional)`, `Palette has_many :colors`, and `Color belongs_to :palette`.

## [0.0.1] - Initial Setup
- Initialized Ruby on Rails 8 application with PostgreSQL.
- Configured Tailwind CSS for frontend styling.
- Created placeholder `README.md`, `ARCHITECTURE.md`, and `CHANGELOG.md`.
