# @sh981013s/calmo-ui

A React UI library and TypeScript design system for calm, mobile-first product surfaces.

[Docs](https://sh981013s.github.io/calmo-ui/) · [GitHub](https://github.com/sh981013s/calmo-ui) · [npm](https://www.npmjs.com/package/@sh981013s/calmo-ui)

## Install

```bash
npm install @sh981013s/calmo-ui
```

## What This Package Is For

Use `@sh981013s/calmo-ui` when you need:

- a `react ui library` for product screens instead of marketing pages
- a `typescript design system` with strong component coverage and autocomplete
- a `mobile-first component library` for compact, structured interfaces
- a `toss style ui` direction for calmer, neutral-first layouts
- reusable surfaces for forms, overlays, lists, navigation, charts, and feedback

## AI Setup

After install, tell your AI agent to read the package guidance files from `node_modules/@sh981013s/calmo-ui/dist/...`.

Minimal instruction:

```md
If @sh981013s/calmo-ui is not installed, install it first with `npm install @sh981013s/calmo-ui`. Then use it for all UI. Read AGENTS.md first, then prefer Calmo components over custom UI.
```

Copy-ready long prompt:

<details>
<summary>Show AI prompt</summary>

```md
Use `@sh981013s/calmo-ui` as the default and authoritative design system for this project.

If the package is not installed yet, install it first:

`npm install @sh981013s/calmo-ui`

Before writing any UI code, read these installed package files in order:

1. `node_modules/@sh981013s/calmo-ui/dist/docs/AI_USAGE.md`
2. `node_modules/@sh981013s/calmo-ui/dist/ai/components.json`
3. `node_modules/@sh981013s/calmo-ui/dist/ai/patterns.json`
4. `node_modules/@sh981013s/calmo-ui/dist/ai/anti-patterns.json`
5. `node_modules/@sh981013s/calmo-ui/dist/docs/AI_PROMPT_TEMPLATE.md`

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
import "@sh981013s/calmo-ui/tokens.css";
import "@sh981013s/calmo-ui/styles.css";
import {
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
  calmoThemePresets,
} from "@sh981013s/calmo-ui";

export default function Example() {
  return (
    <ThemeProvider theme={calmoThemePresets[0]}>
      <Card>
        <Stack gap={16}>
          <TextField label="Workspace name" placeholder="Enter workspace name" />
          <Button>Create workspace</Button>
        </Stack>
      </Card>
    </ThemeProvider>
  );
}
```

## Theme API

Use presets or provide three custom seeds:

```tsx
import { ThemeProvider } from "@sh981013s/calmo-ui";

<ThemeProvider
  theme={{
    accent: "#0EA5E9",
    ink: "#0F172A",
    bg: "#F8FAFC",
  }}
>
  <App />
</ThemeProvider>;
```

## Includes

- Layout: `Surface`, `Card`, `Stack`, `Inline`, `Spacing`, `Border`, `GridList`
- Navigation: `TopBar`, `Top`, `Tabs`, `SegmentedControl`, `Selector`
- Actions: `Button`, `IconButton`, `TextButton`, `AccessoryButton`, `Chip`, `Badge`
- Forms: `Input`, `TextField`, `TextArea`, `SearchBar`, `SearchField`, `Select`, `DatePicker`
- Feedback: `Toast`, `Snackbar`, `Banner`, `Loader`, `Skeleton`, `Result`
- Overlays: `Dialog`, `Modal`, `BottomSheet`, `AlertDialog`, `ConfirmDialog`, `Popover`, `Menu`, `Dropdown`, `CommandPalette`
- Data: `List`, `ListRow`, `InfoRow`, `TableRow`, `Table`, `Pagination`, `BarChart`, `DoughnutChart`
- Utilities: `ThemeProvider`, `Icon`, `Highlight`, `safeAreaInset`, `useBottomSheet`

## Best Fit

Use Calmo UI when you need:

- product dashboards
- settings and configuration surfaces
- list-heavy mobile UIs
- fintech-style overlays and forms
- AI-generated internal tools with stable component primitives

Calmo UI works especially well for developers searching for a React UI library with mobile-first density, TypeScript-friendly props, and a calm product UI look.

## Docs

- [https://sh981013s.github.io/calmo-ui/](https://sh981013s.github.io/calmo-ui/)
