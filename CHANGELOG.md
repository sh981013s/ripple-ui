# Changelog

## 0.1.11 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.10 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.9 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.8 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.7 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.6 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.5 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.4 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.3 - 2026-04-02

### Changed

- Automated release from the latest `main` branch changes.

## 0.1.2

### Added

- Seed-driven theme system with `ThemeProvider`, `calmoThemePresets`, and `buildCalmoThemeVars`
- Docs pages and live playground coverage for the theme API
- AI-focused docs assets:
  - `docs/AI_USAGE.md`
  - `docs/AI_PROMPT_TEMPLATE.md`
  - `ai/anti-patterns.json`
- Machine-readable theme metadata in `ai/components.json` and `ai/patterns.json`
- GitHub Release automation on tag publish

### Changed

- Refined docs theme controls so preset switching and custom seed colors are easier to inspect
- Improved docs search discoverability for theme-related APIs
- Reworked root README and package README to read like a production UI library
- Tuned theme-driven styling across high-traffic component surfaces such as buttons, inputs, selects, date pickers, chips, and previews
- Publish flow now creates a GitHub Release after a successful npm publish

### Fixed

- Removed stale overlay previews that opened by default in docs
- Fixed docs navigation/runtime issues around segmented controls and route previews
- Resolved dev-server friction around docs theme verification and preview behavior
