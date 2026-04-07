# calmo-ui

A React UI library and TypeScript design system for calm, mobile-first product surfaces, structured dashboards, settings flows, overlays, and internal tools.

[Docs](https://calmo.booung.org/) · [GitHub](https://github.com/sh981013s/calmo-ui) · [npm](https://www.npmjs.com/package/calmo-ui) · [Star on GitHub](https://github.com/sh981013s/calmo-ui/stargazers)

If Calmo UI helps you ship product UI faster, [star the repo](https://github.com/sh981013s/calmo-ui/stargazers).

Calmo UI is designed for developers searching for a `react ui library`, a `react component library`, a `typescript design system`, a `mobile-first component library`, or a `react dashboard component library` for product UI.

## Install

```bash
npm install calmo-ui
```

## CLI

```bash
npx calmo-ui init
npx calmo-ui add app-shell
npx calmo-ui add settings-screen
npx calmo-ui add table-filters
```

Use `init` to create `AGENTS.md` in a new repo and `add` to generate copy-paste snippets in `./calmo-snippets`.

## What This Package Is For

Use `calmo-ui` when you need:

- a `react ui library` for product screens instead of marketing pages
- a `typescript design system` with strong component coverage and autocomplete
- a `mobile-first component library` for compact, structured interfaces
- a `toss style ui` direction for calmer, neutral-first layouts
- reusable surfaces for forms, overlays, lists, navigation, charts, and feedback

## AI Setup

After install, tell your AI agent to read the package guidance files from `node_modules/calmo-ui/dist/...`.

Minimal instruction:

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
  Button,
  Card,
  Stack,
  TextField,
  ThemeProvider,
  calmoThemePresets,
} from "calmo-ui";

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

## Real-World Use Cases

Calmo UI works best when you need a React component library for real product screens, not marketing pages.

- dashboard layouts with cards, charts, list rows, and top bars
- settings pages with compact forms, toggles, selectors, and inline help
- approval or onboarding flows with dialogs, bottom sheets, banners, and progress steps
- internal tools with tables, pagination, search, and structured navigation
- AI-generated app shells that need stable components and predictable theming

## When Not To Use Calmo UI

Calmo UI is not the best choice for:

- marketing sites that need expressive storytelling layouts
- teams that want a completely unstyled primitive library
- strict Material Design adoption
- ecosystems that depend on the full MUI plugin and integration surface

## Example Apps

See the repository examples:

- [examples index](https://github.com/sh981013s/calmo-ui/tree/main/examples)
- [dashboard starter](https://github.com/sh981013s/calmo-ui/tree/main/examples/dashboard-starter)
- [settings and account app](https://github.com/sh981013s/calmo-ui/tree/main/examples/settings-account-app)
- [finance sheet flow](https://github.com/sh981013s/calmo-ui/tree/main/examples/finance-sheet-flow)
- [approval workbench](https://github.com/sh981013s/calmo-ui/tree/main/examples/approval-workbench)
- [workspace command app](https://github.com/sh981013s/calmo-ui/tree/main/examples/workspace-command-app)
- [empty state kit](https://github.com/sh981013s/calmo-ui/tree/main/examples/empty-state-kit)

Each example is marked `Built with calmo-ui` and is intended to help npm visitors understand install-to-output value quickly.

## Used In

Public example usage today:

- dashboard starter built with calmo-ui
- settings and account app built with calmo-ui
- finance sheet flow built with calmo-ui

## Roadmap

- grow the example library into runnable starters
- expand example coverage for more product scenarios
- expand `npx calmo-ui add` with more copy-paste product blocks
- keep docs, AI metadata, and npm examples aligned for AI-first adoption

## Example: Dashboard Surface

```tsx
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  BarChart,
  Card,
  List,
  ListHeader,
  ListRow,
  Stack,
  TopBar,
} from "calmo-ui";

export default function DashboardExample() {
  return (
    <Stack gap={20}>
      <TopBar
        title="Operations dashboard"
        subtitleTop="Workspace"
        subtitleBottom="Daily overview"
      />
      <Card>
        <Stack gap={16}>
          <ListHeader
            title="Revenue"
            description="Weekly payment volume"
          />
          <BarChart
            items={[
              { label: "Mon", value: 42 },
              { label: "Tue", value: 67 },
              { label: "Wed", value: 58 },
              { label: "Thu", value: 84 },
            ]}
          />
        </Stack>
      </Card>
      <Card>
        <List>
          <ListHeader title="Recent events" />
          <ListRow title="New payout account connected" description="2 minutes ago" />
          <ListRow title="Approval policy updated" description="14 minutes ago" />
        </List>
      </Card>
    </Stack>
  );
}
```

## Example: Settings Page

```tsx
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  BottomInfo,
  Button,
  Card,
  Select,
  Stack,
  Switch,
  TextField,
} from "calmo-ui";

export default function SettingsExample() {
  return (
    <Card>
      <Stack gap={16}>
        <TextField label="Workspace name" placeholder="Calmo Labs" />
        <Select label="Region" defaultValue="de">
          <option value="de">Germany</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
        </Select>
        <Switch label="Email notifications" defaultChecked />
        <Button>Save changes</Button>
        <BottomInfo
          title="Changes are saved instantly"
          description="Use confirmation only for destructive actions."
        />
      </Stack>
    </Card>
  );
}
```

## Example: Dialog And Bottom Sheet Flow

```tsx
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  BottomSheet,
  Button,
  Dialog,
  Stack,
  useBottomSheet,
} from "calmo-ui";

export default function OverlayExample() {
  const sheet = useBottomSheet();

  return (
    <Stack gap={12}>
      <Dialog
        open
        title="Delete workspace?"
        description="This action cannot be undone."
        footer={
          <>
            <Button variant="weak">Cancel</Button>
            <Button color="danger">Delete</Button>
          </>
        }
      >
        Delete the current workspace and all connected data.
      </Dialog>

      <Button onClick={sheet.open}>Open bottom sheet</Button>

      <BottomSheet
        open={sheet.opened}
        onClose={sheet.close}
        title="Select payout account"
        description="Choose the account to use for the next transfer."
      >
        <Stack gap={10}>
          <Button variant="weak">Main account</Button>
          <Button variant="weak">Treasury reserve</Button>
        </Stack>
      </BottomSheet>
    </Stack>
  );
}
```

## Example: AI-Generated App Shell

```tsx
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Button,
  Card,
  ThemeProvider,
  TopBar,
  calmoThemePresets,
} from "calmo-ui";

export default function AppShellExample() {
  return (
    <ThemeProvider theme={calmoThemePresets[1]}>
      <Card>
        <TopBar
          title="Workspace shell"
          subtitleTop="AI-generated"
          subtitleBottom="Calmo UI theme preset"
        />
        <Button>Create workspace</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Theme API

Use presets or provide three custom seeds:

```tsx
import { ThemeProvider } from "calmo-ui";

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

- [https://calmo.booung.org/](https://calmo.booung.org/)
