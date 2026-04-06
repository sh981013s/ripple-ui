# Calmo UI

A React UI library and TypeScript design system for calm, mobile-first product surfaces.

[![Deploy Demo](https://github.com/sh981013s/calmo-ui/actions/workflows/deploy-demo.yml/badge.svg)](https://github.com/sh981013s/calmo-ui/actions/workflows/deploy-demo.yml)
[![Publish Package](https://github.com/sh981013s/calmo-ui/actions/workflows/publish-package.yml/badge.svg)](https://github.com/sh981013s/calmo-ui/actions/workflows/publish-package.yml)

[Documentation](https://sh981013s.github.io/calmo-ui/) · [npm package](https://www.npmjs.com/package/calmo-ui) · [GitHub](https://github.com/sh981013s/calmo-ui)

## What It Is

Calmo UI is a React component library for teams that want:

- calm, neutral-first interfaces
- mobile-first density without looking cramped
- strong defaults for forms, overlays, lists, and navigation
- a seed-driven theme system
- AI-friendly docs and machine-readable component catalogs

It is designed for product UIs, internal tools, fintech-style dashboards, settings flows, structured workflows, and AI-generated app scaffolds.

Calmo UI is a good fit when you are looking for:

- a `react ui library` with strong defaults
- a `typescript design system` with autocomplete and theme support
- a `mobile-first component library` for compact product layouts
- a `toss style ui` direction for calm, neutral-first, product-focused screens
- a reusable component set for fintech, admin, workspace, and dashboard surfaces

## Why Teams Use Calmo UI

- Faster product UI assembly with forms, overlays, navigation, lists, and charts in one package
- Better AI-assisted app generation through bundled docs, JSON catalogs, and copy-ready prompts
- Seed-driven theming without rebuilding every component surface by hand
- A calmer, more structured alternative to louder marketing-style UI kits

## Install

```bash
npm install calmo-ui
```

## AI Setup After npm Install

Calmo UI now ships AI-readable metadata inside the published package. After installing, an agent can read:

- `node_modules/calmo-ui/dist/docs/AI_USAGE.md`
- `node_modules/calmo-ui/dist/docs/AI_PROMPT_TEMPLATE.md`
- `node_modules/calmo-ui/dist/ai/components.json`
- `node_modules/calmo-ui/dist/ai/patterns.json`
- `node_modules/calmo-ui/dist/ai/anti-patterns.json`
- `node_modules/calmo-ui/dist/templates/AGENTS.md`

Recommended setup for new app repos:

1. Copy `node_modules/calmo-ui/dist/templates/AGENTS.md` to your project root as `AGENTS.md`.
2. Tell your AI agent to read that file before writing UI code.
3. Keep Calmo UI as the default UI layer and only add custom CSS where the library cannot express the layout.

Minimal agent instruction:

```md
If calmo-ui is not installed, install it first with `npm install calmo-ui`. Then use it for all UI. Read AGENTS.md first, then prefer Calmo components over custom UI.
```

Copy-ready long prompt:

<details>
<summary>Show AI prompt</summary>

```md
Use `calmo-ui` as the default and authoritative design system for this project.

If the package is not installed yet, install it first:

`npm install calmo-ui`

Before writing any UI code, read these installed package files in order:

1. `node_modules/calmo-ui/dist/docs/AI_USAGE.md`
2. `node_modules/calmo-ui/dist/ai/components.json`
3. `node_modules/calmo-ui/dist/ai/patterns.json`
4. `node_modules/calmo-ui/dist/ai/anti-patterns.json`
5. `node_modules/calmo-ui/dist/docs/AI_PROMPT_TEMPLATE.md`

Rules:

- Prefer Calmo UI components over raw HTML whenever a matching component exists.
- Do not recreate UI patterns that Calmo UI already provides.
- Do not introduce custom CSS for component styling unless Calmo UI cannot express the required layout or interaction.
- Use Calmo UI primitives, layout patterns, spacing, radius, motion, and theme rules before adding bespoke wrappers.
- Keep interfaces calm, mobile-first, structured, and product-like.
- If a matching Calmo component exists, you must use it instead of building a custom equivalent.
- Use `ThemeProvider` and `buildCalmoThemeVars` for palette changes instead of hardcoding unrelated colors.

Implementation order:

1. Check whether Calmo UI already has a direct component for the need.
2. If not, compose from Calmo primitives and existing Calmo components.
3. Only if both fail, write minimal custom code aligned to Calmo UI.

Expected behavior:

- Use Calmo UI names directly in implementation.
- Prefer library components over custom UI.
- Keep custom CSS small and structural.
- Optimize for production-ready structured UI, not rough mockups.

When in doubt, choose Calmo UI consistency over custom styling.
```

</details>

## Quick Start

```tsx
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Badge,
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
  calmoThemePresets,
} from "calmo-ui";

export default function Example() {
  return (
    <ThemeProvider theme={calmoThemePresets[1]}>
      <Card>
        <Stack gap={20}>
          <Badge tone="accent">Jade theme</Badge>
          <TextField
            label="Workspace name"
            placeholder="Enter workspace name"
            validationState="success"
            validationMessage="This name is available."
          />
          <Button>Create workspace</Button>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
```

## Best Fit

Use Calmo UI when you need a React component library for:

- fintech and payment-adjacent dashboards
- mobile-first admin panels and internal tools
- settings, onboarding, and approval flows
- structured list, form, sheet, and dialog surfaces
- AI-assisted app generation with stable component primitives

## Theme System

Calmo UI ships with five preset themes and a custom seed-based theme API.

- presets: `calmoThemePresets`
- scoped theming: `ThemeProvider`
- custom CSS variable generation: `buildCalmoThemeVars`

```tsx
import {
  ThemeProvider,
  buildCalmoThemeVars,
} from "calmo-ui";

const vars = buildCalmoThemeVars({
  accent: "#0EA5E9",
  ink: "#0F172A",
  bg: "#F8FAFC",
});

export default function Example() {
  return (
    <ThemeProvider theme={{ accent: "#0EA5E9", ink: "#0F172A", bg: "#F8FAFC" }}>
      <App />
    </ThemeProvider>
  );
}
```

Semantic colors are kept separate from the three main seeds so success, warning, and danger remain clear and stable across themes.

## Component Coverage

Calmo UI currently covers:

- Layout: `Surface`, `Card`, `Stack`, `Inline`, `Spacing`, `Border`, `GridList`
- Navigation: `TopBar`, `Top`, `Tabs`, `SegmentedControl`, `Selector`, `Pagination`
- Actions: `Button`, `IconButton`, `TextButton`, `AccessoryButton`, `Chip`, `Badge`
- Forms: `Input`, `TextField`, `TextArea`, `SearchBar`, `SearchField`, `Select`, `DatePicker`, `WheelDatePicker`, `Switch`, `Checkbox`, `Radio`, `NumericSpinner`
- Overlays: `Dialog`, `Modal`, `BottomSheet`, `AlertDialog`, `ConfirmDialog`, `Popover`, `Menu`, `Dropdown`, `CommandPalette`
- Feedback: `Toast`, `Snackbar`, `Banner`, `NoticeBanner`, `Loader`, `LoaderAnimation`, `Skeleton`, `Result`, `FullScreenLoader`
- Data: `List`, `ListRow`, `TableRow`, `Table`, `InfoRow`, `BarChart`, `DoughnutChart`, `ProgressStepper`
- Utilities: `Icon`, `ThemeProvider`, `Highlight`, `FontScaleLimit`, `safeAreaInset`, `useBottomSheet`

## Documentation

Docs are published at:

- [https://sh981013s.github.io/calmo-ui/](https://sh981013s.github.io/calmo-ui/)

The docs site includes:

- route-based section pages
- per-component detail pages
- live playgrounds
- code examples
- prop tables
- icon browser
- theme switching demo

The docs landing page is tuned to explain Calmo UI as a React UI library, a TypeScript design system, and a mobile-first component library before users open individual component pages.

## AI-First Usage

Calmo UI is intentionally tuned for vibe coding and agent-driven UI generation.

Start here:

- [docs/AI_USAGE.md](./docs/AI_USAGE.md)
- [docs/AI_PROMPT_TEMPLATE.md](./docs/AI_PROMPT_TEMPLATE.md)
- [ai/components.json](./ai/components.json)
- [ai/patterns.json](./ai/patterns.json)
- [ai/anti-patterns.json](./ai/anti-patterns.json)

These files give AI systems:

- component selection rules
- safe defaults
- anti-patterns
- reusable page recipes
- prompt scaffolding for app generation

When installed from npm, the same AI metadata is available from the package `dist` folder, so downstream projects do not need to clone this repository just to access the guidance files.

## Repository Structure

- `packages/calmo-ui`: publishable core package
- `demo`: docs site
- `docs/AI_USAGE.md`: AI generation guidance
- `docs/AI_PROMPT_TEMPLATE.md`: reusable prompt starter
- `ai/components.json`: machine-readable component catalog
- `ai/patterns.json`: reusable page patterns
- `ai/anti-patterns.json`: generation constraints and bad patterns

## Scripts

```bash
npm install
npm run build:core
npm run dev:demo
npm run build:demo
```

## Release Flow

- docs deploy to GitHub Pages on pushes to `main`
- npm publishing runs automatically from GitHub Actions on pushes to `main`
- the release workflow auto-increments the package patch version, commits it back to `main`, creates a git tag, publishes to npm, and creates a GitHub Release
- package publishing requires `NPM_TOKEN` in repository secrets
