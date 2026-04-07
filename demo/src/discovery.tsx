import React from "react";
import {
  Badge,
  Banner,
  BottomInfo,
  BottomSheet,
  Button,
  Card,
  Chip,
  CommandPalette,
  Dialog,
  EmptyState,
  Inline,
  Input,
  List,
  ListHeader,
  ListRow,
  ProgressStepper,
  SearchField,
  SectionHeader,
  Select,
  Stack,
  Table,
  Tabs,
  Text,
  TextField,
  TopBar,
} from "calmo-ui";

const appShellSnippet = `import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Button,
  Card,
  Inline,
  List,
  ListHeader,
  ListRow,
  Stack,
  TopBar,
} from "calmo-ui";

export default function ProductShell() {
  return (
    <Stack gap={20}>
      <TopBar
        title="Workspace"
        subtitleBottom="Product shell"
        rightButton={<Button size="small">Create</Button>}
      />
      <Card>
        <List>
          <ListHeader title="Recent activity" description="Compact, product-first rows." />
          <ListRow title="Approval updated" description="2 minutes ago" />
          <ListRow title="New team member invited" description="14 minutes ago" />
        </List>
      </Card>
    </Stack>
  );
}`;

const settingsSnippet = `import {
  BottomInfo,
  Button,
  Card,
  Select,
  Stack,
  Switch,
  TextField,
} from "calmo-ui";

export default function SettingsScreen() {
  return (
    <Card>
      <Stack gap={16}>
        <TextField label="Workspace name" defaultValue="Calmo Labs" />
        <Select label="Region" defaultValue="de">
          <option value="de">Germany</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
        </Select>
        <Switch label="Email notifications" defaultChecked />
        <Button>Save changes</Button>
        <BottomInfo
          title="Saved instantly"
          description="Keep confirmations for destructive actions only."
        />
      </Stack>
    </Card>
  );
}`;

const tableSnippet = `import {
  Button,
  Card,
  Inline,
  SearchField,
  Stack,
  Table,
  TopBar,
} from "calmo-ui";

export default function DataTableScreen() {
  return (
    <Stack gap={20}>
      <TopBar title="Payouts" subtitleBottom="Table + filters" />
      <Inline gap={10} wrap>
        <SearchField placeholder="Search payout" />
        <Button variant="weak">Status</Button>
        <Button variant="weak">Region</Button>
      </Inline>
      <Card>
        <Table
          columns={["Workspace", "Amount", "Status"]}
          rows={[
            ["Treasury", "EUR 4,200", "Ready"],
            ["Operations", "EUR 1,180", "Review"],
          ]}
        />
      </Card>
    </Stack>
  );
}`;

const sheetSnippet = `import {
  BottomSheet,
  Button,
  Stack,
  TextField,
  useBottomSheet,
} from "calmo-ui";

export default function SheetForm() {
  const sheet = useBottomSheet();

  return (
    <>
      <Button onClick={sheet.openSheet}>Open sheet</Button>
      <BottomSheet
        open={sheet.open}
        onClose={sheet.closeSheet}
        title="Create payout rule"
        description="Keep secondary forms mobile-first."
      >
        <Stack gap={12}>
          <TextField label="Rule name" placeholder="Monthly reserve" />
          <TextField label="Destination" placeholder="Treasury" />
          <Button display="block">Save rule</Button>
        </Stack>
      </BottomSheet>
    </>
  );
}`;

const paletteSnippet = `import { CommandPalette } from "calmo-ui";

export default function CommandSearch() {
  return (
    <CommandPalette
      items={[
        { title: "Open payouts", description: "Jump to transfer list" },
        { title: "Create workspace", description: "Start a new team space" },
      ]}
    />
  );
}`;

const emptyStateSnippet = `import {
  Button,
  EmptyState,
  Result,
  Stack,
} from "calmo-ui";

export default function EmptyAndResult() {
  return (
    <Stack gap={16}>
      <EmptyState
        title="No workspaces yet"
        description="Create the first workspace to invite your team."
        action={<Button>Create workspace</Button>}
      />
      <Result
        tone="success"
        title="Payment approved"
        description="The transfer is scheduled for the next settlement window."
        primaryAction={{ label: "View details" }}
      />
    </Stack>
  );
}`;

export const copyPasteBlocks = [
  {
    id: "app-shell",
    title: "App shell",
    description: "A calm product shell with TopBar, Card, and List surfaces for AI-generated apps and internal tools.",
    code: appShellSnippet,
  },
  {
    id: "settings-screen",
    title: "Settings screen",
    description: "A settings flow with text fields, select, switch, and bottom info guidance.",
    code: settingsSnippet,
  },
  {
    id: "table-filters",
    title: "Table + filters",
    description: "A dashboard-ready table flow with search and compact filter actions.",
    code: tableSnippet,
  },
  {
    id: "bottom-sheet-form",
    title: "Bottom sheet form",
    description: "A mobile-first secondary form anchored to a bottom sheet.",
    code: sheetSnippet,
  },
  {
    id: "command-palette",
    title: "Command palette",
    description: "A searchable launcher for docs, productivity surfaces, and power-user flows.",
    code: paletteSnippet,
  },
  {
    id: "empty-state-result",
    title: "Empty state + result",
    description: "A consistent starting point for zero-state and confirmation UI.",
    code: emptyStateSnippet,
  },
];

export const exampleApps = [
  {
    id: "dashboard-starter",
    title: "Dashboard starter",
    description: "Built with calmo-ui for analytics overviews, activity lists, metrics, filters, and compact product dashboards.",
    repoPath: "/examples/dashboard-starter",
    href: "https://github.com/sh981013s/calmo-ui/tree/main/examples/dashboard-starter",
  },
  {
    id: "settings-account-app",
    title: "Settings and account app",
    description: "Built with calmo-ui for workspace settings, account preferences, toggles, and structured forms.",
    repoPath: "/examples/settings-account-app",
    href: "https://github.com/sh981013s/calmo-ui/tree/main/examples/settings-account-app",
  },
  {
    id: "finance-sheet-flow",
    title: "Finance sheet flow",
    description: "Built with calmo-ui for bottom sheets, confirmation dialogs, result states, and payment-adjacent product flows.",
    repoPath: "/examples/finance-sheet-flow",
    href: "https://github.com/sh981013s/calmo-ui/tree/main/examples/finance-sheet-flow",
  },
];

export const discoveryPages = [
  {
    kind: "solution",
    slug: "react-dashboard-component-library",
    title: "React dashboard component library",
    eyebrow: "solution",
    description: "Use Calmo UI as a React dashboard component library for operations views, analytics screens, list-heavy admin panels, and compact product dashboards.",
    seoTitle: "React dashboard component library | Calmo UI",
    seoDescription: "Calmo UI is a React dashboard component library for product teams building analytics overviews, internal tools, data tables, filters, and compact card-based dashboards.",
    aliases: ["dashboard ui", "react dashboard ui", "analytics dashboard ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">
          Calmo UI fits dashboards that need calm surfaces, compact density, charts, top bars, search, lists, tables, and reliable filters without adopting a marketing-style component kit.
        </Text>
        <Card>
          <Stack gap={14}>
            <TopBar title="Operations dashboard" subtitleBottom="Daily overview" rightButton={<Button size="small">Export</Button>} />
            <Inline gap={10} wrap>
              <Chip tone="accent">Revenue</Chip>
              <Chip>Weekly trend</Chip>
              <Chip>Workspace activity</Chip>
            </Inline>
            <List>
              <ListHeader title="Recent events" description="Compact rows for structured product dashboards." />
              <ListRow title="New payout account connected" description="2 minutes ago" />
              <ListRow title="Approval policy updated" description="14 minutes ago" />
            </List>
          </Stack>
        </Card>
        <Banner
          compact
          tone="accent"
          title="Best building blocks for dashboard screens"
          description="TopBar, Card, Table, SearchField, ListRow, SectionHeader, BarChart, DoughnutChart, Pagination, and BottomInfo."
        />
      </Stack>
    ),
  },
  {
    kind: "solution",
    slug: "mobile-first-react-component-library",
    title: "Mobile-first React component library",
    eyebrow: "solution",
    description: "Calmo UI is a mobile-first React component library for product screens that need compact layouts, stacked controls, bottom sheets, and calm navigation.",
    seoTitle: "Mobile-first React component library | Calmo UI",
    seoDescription: "Calmo UI is a mobile-first React component library with compact spacing, bottom sheets, stacked forms, responsive top bars, and calm product UI for real app screens.",
    aliases: ["mobile first ui", "responsive react ui", "mobile product ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">
          Calmo UI starts from compact product layouts instead of desktop marketing pages. It works well for settings flows, bottom sheets, stacked lists, and responsive surfaces that need to stay calm when the viewport shrinks.
        </Text>
        <Card>
          <Stack gap={14}>
            <TopBar title="Mobile-first flow" subtitleBottom="Compact surfaces and responsive overlays" />
            <BottomInfo title="Sheets and dialogs adapt early" description="TopBar, ListRow, Tabs, Tables, and overlays shift sooner to protect readability on narrow screens." />
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "solution",
    slug: "toss-style-ui-for-react",
    title: "Toss-style UI for React",
    eyebrow: "solution",
    description: "Use Calmo UI when you want a toss-style UI for React: calm, neutral-first surfaces, compact density, restrained motion, and product-focused hierarchy.",
    seoTitle: "Toss-style UI for React | Calmo UI",
    seoDescription: "Calmo UI gives React teams a toss-style UI direction with calm surfaces, restrained motion, mobile-first density, and structured product components.",
    aliases: ["toss style ui", "toss inspired react ui", "calm fintech ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">
          Calmo UI is not a clone of Toss Design System, but it is intentionally tuned toward calm, product-oriented, neutral-first surfaces that work well for fintech-like dashboards, approvals, settings, and structured forms.
        </Text>
        <Banner
          compact
          tone="accent"
          eyebrow="design direction"
          title="Calm, structured, and neutral-first"
          description="Use this when you want product UI that feels more restrained than loud startup dashboards or marketing-heavy UI kits."
        />
      </Stack>
    ),
  },
  {
    kind: "solution",
    slug: "typescript-design-system-for-internal-tools",
    title: "TypeScript design system for internal tools",
    eyebrow: "solution",
    description: "Calmo UI is a TypeScript design system for internal tools with autocomplete, stable props, responsive tables, lists, filters, and overlay flows.",
    seoTitle: "TypeScript design system for internal tools | Calmo UI",
    seoDescription: "Calmo UI is a TypeScript design system for internal tools, admin panels, settings pages, tables, filters, dialogs, and calm product surfaces.",
    aliases: ["internal tools ui", "admin panel ui", "typescript internal tools"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">
          Internal tools usually need stable table, list, form, approval, and search surfaces more than they need flashy components. Calmo UI is tuned for those cases and ships deep TypeScript support and AI-readable metadata.
        </Text>
        <Card>
          <Stack gap={14}>
            <SectionHeader eyebrow="use this for" title="Admin and workflow apps" description="Great for finance ops, customer support tools, workspace management, and approval-heavy internal software." />
            <Inline gap={8} wrap>
              <Badge tone="accent">Tables</Badge>
              <Badge>Search + filters</Badge>
              <Badge>Dialogs</Badge>
              <Badge>Bottom sheets</Badge>
              <Badge>Settings forms</Badge>
            </Inline>
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "solution",
    slug: "react-bottom-sheet-dialog-settings-ui",
    title: "React bottom sheet, dialog, and settings UI",
    eyebrow: "solution",
    description: "Use Calmo UI for React bottom sheets, dialogs, confirm flows, settings pages, and compact forms designed for real product surfaces.",
    seoTitle: "React bottom sheet, dialog, and settings UI | Calmo UI",
    seoDescription: "Calmo UI helps React teams build bottom sheets, dialogs, settings flows, confirm surfaces, and compact forms with a consistent product UI system.",
    aliases: ["react bottom sheet", "react dialog ui", "settings ui react"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">
          Bottom sheets and dialogs are often where product UI consistency breaks. Calmo UI keeps modal and sheet flows aligned with the same typography, density, CTA patterns, and feedback surfaces.
        </Text>
        <Card>
          <Stack gap={14}>
            <Inline gap={10} wrap>
              <Button>Primary action</Button>
              <Button variant="weak">Secondary</Button>
            </Inline>
            <BottomInfo
              title="Strong fit for settings and approval surfaces"
              description="Use BottomSheet, Dialog, ConfirmDialog, Banner, ProgressStepper, and Result together for compact product flows."
            />
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "guide",
    slug: "button-for-product-uis",
    title: "Button for product UIs",
    eyebrow: "guide",
    description: "How to use Calmo UI Button, TextButton, IconButton, and AccessoryButton for calm product UI instead of over-styled CTA patterns.",
    seoTitle: "Button for product UIs | Calmo UI guide",
    seoDescription: "Learn how to use Calmo UI buttons for product UIs, including primary CTA, secondary action, icon button, text button, and compact action guidance.",
    aliases: ["react button ui", "product button component", "cta button guide"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Use Button for the main CTA, TextButton for low-emphasis inline actions, IconButton for toolbar controls, and AccessoryButton for compact right-side utility actions.</Text>
        <Inline gap={10} wrap>
          <Button>Primary CTA</Button>
          <Button variant="weak">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </Inline>
      </Stack>
    ),
  },
  {
    kind: "guide",
    slug: "bottom-sheet-for-react",
    title: "Bottom sheet for React",
    eyebrow: "guide",
    description: "A guide to building bottom-sheet-driven React flows with Calmo UI for mobile-first pickers, settings, and secondary tasks.",
    seoTitle: "Bottom sheet for React | Calmo UI guide",
    seoDescription: "Build React bottom sheet flows with Calmo UI for pickers, compact settings forms, and mobile-first secondary tasks.",
    aliases: ["react bottom sheet guide", "mobile sheet react", "sheet ui react"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Prefer BottomSheet over Dialog when the task is secondary, mobile-first, or list-driven. Keep sheets focused on one decision or one compact form.</Text>
        <BottomInfo title="Pattern" description="BottomSheet + TextField + Select + full-width primary Button is the default product flow." />
      </Stack>
    ),
  },
  {
    kind: "guide",
    slug: "settings-page-example",
    title: "Settings page example",
    eyebrow: "guide",
    description: "A settings page example with Calmo UI using TopBar, TextField, Select, Switch, BottomInfo, and compact save actions.",
    seoTitle: "Settings page example | Calmo UI guide",
    seoDescription: "See a settings page example built with Calmo UI using compact forms, switches, bottom info guidance, and structured save actions.",
    aliases: ["settings ui example", "react settings page", "settings form example"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Settings screens in Calmo UI work best when each card holds one cluster of related controls and the save action stays predictable.</Text>
        <Card>
          <Stack gap={12}>
            <TextField label="Workspace name" defaultValue="Calmo Labs" />
            <Select label="Default locale" defaultValue="en">
              <option value="en">English</option>
              <option value="de">German</option>
            </Select>
            <BottomInfo title="Keep settings calm" description="Avoid turning every field row into a mini layout system." />
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "guide",
    slug: "internal-tool-dashboard-example",
    title: "Internal tool dashboard example",
    eyebrow: "guide",
    description: "An internal tool dashboard example with Calmo UI using TopBar, Card, SearchField, Table, and compact list surfaces.",
    seoTitle: "Internal tool dashboard example | Calmo UI guide",
    seoDescription: "See an internal tool dashboard example built with Calmo UI using tables, filters, list rows, top bars, and calm product surfaces.",
    aliases: ["internal tool dashboard", "admin dashboard example", "ops dashboard ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Internal dashboards should prioritize scan speed, not decoration. Calmo UI favors compact cards, simple filters, restrained badges, and reliable table rhythm.</Text>
        <Inline gap={10} wrap>
          <SearchField placeholder="Search workspace" />
          <Button variant="weak">Status</Button>
          <Button variant="weak">Region</Button>
        </Inline>
      </Stack>
    ),
  },
  {
    kind: "guide",
    slug: "approval-flow-ui-example",
    title: "Approval flow UI example",
    eyebrow: "guide",
    description: "An approval flow UI example with banners, dialogs, bottom sheets, progress surfaces, and result states using Calmo UI.",
    seoTitle: "Approval flow UI example | Calmo UI guide",
    seoDescription: "Build approval flows with Calmo UI using banners, progress steppers, confirm dialogs, bottom sheets, and calm result states.",
    aliases: ["approval flow ui", "approval dialog flow", "review flow ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Calmo UI works well for approval and review flows because banners, sheets, dialogs, and result surfaces all share the same product rhythm.</Text>
        <ProgressStepper
          steps={[
            { label: "Draft", description: "Basic information" },
            { label: "Review", description: "Team validation" },
            { label: "Approve", description: "Final confirmation" },
          ]}
          currentStep={1}
        />
      </Stack>
    ),
  },
  {
    kind: "compare",
    slug: "calmo-ui-vs-mui",
    title: "Calmo UI vs MUI",
    eyebrow: "comparison",
    description: "Compare Calmo UI vs MUI for calm product surfaces, mobile-first density, internal tools, overlays, and AI-guided app generation.",
    seoTitle: "Calmo UI vs MUI",
    seoDescription: "Compare Calmo UI and MUI for product surfaces, dashboards, internal tools, overlays, mobile-first layouts, and AI-generated app shells.",
    aliases: ["mui alternative", "react ui library comparison", "material ui alternative"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Choose Calmo UI when you want calmer product surfaces and a tighter default design direction. Choose MUI when you need a much larger ecosystem and Material Design alignment.</Text>
        <Card>
          <Stack gap={10}>
            <Text variant="label">Calmo UI</Text>
            <Text variant="body">Better for calm product UI, mobile-first density, AI-readable metadata, and structured internal-tool surfaces.</Text>
            <Text variant="label">MUI</Text>
            <Text variant="body">Better for broad ecosystem coverage, Material UI familiarity, and teams already standardized on Material Design.</Text>
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "compare",
    slug: "calmo-ui-vs-shadcn-ui",
    title: "Calmo UI vs shadcn/ui",
    eyebrow: "comparison",
    description: "Compare Calmo UI vs shadcn/ui for teams choosing between a styled product component library and a compose-it-yourself component baseline.",
    seoTitle: "Calmo UI vs shadcn/ui",
    seoDescription: "Compare Calmo UI and shadcn/ui for dashboards, internal tools, settings flows, product surfaces, and AI-assisted React UI work.",
    aliases: ["shadcn alternative", "shadcn vs component library", "product ui library comparison"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Choose Calmo UI if you want a stronger product-facing default style and fewer design decisions in every app. Choose shadcn/ui if you want lower-level ownership and are comfortable shaping the whole visual system yourself.</Text>
        <Card>
          <Stack gap={10}>
            <Text variant="label">Calmo UI</Text>
            <Text variant="body">Opinionated, calmer, and more ready for dashboards, settings, and approval surfaces out of the box.</Text>
            <Text variant="label">shadcn/ui</Text>
            <Text variant="body">Flexible and composable, but asks your team to define more of the final design language.</Text>
          </Stack>
        </Card>
      </Stack>
    ),
  },
  {
    kind: "compare",
    slug: "react-ui-library-for-product-surfaces",
    title: "React UI library for product surfaces",
    eyebrow: "comparison",
    description: "Why Calmo UI is a good React UI library for product surfaces such as dashboards, settings, overlays, approval flows, and internal tools.",
    seoTitle: "React UI library for product surfaces | Calmo UI",
    seoDescription: "Calmo UI is a React UI library for product surfaces, with calm typography, mobile-first density, overlays, tables, lists, forms, and AI-friendly docs.",
    aliases: ["product ui react", "product surfaces ui", "internal product ui"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Product surfaces need calmer defaults than marketing pages. Calmo UI emphasizes structured lists, compact forms, restrained feedback, and stable navigation for software that people use every day.</Text>
      </Stack>
    ),
  },
  {
    kind: "compare",
    slug: "toss-inspired-react-ui-library",
    title: "Toss-inspired React UI library",
    eyebrow: "comparison",
    description: "Why teams looking for a toss-inspired React UI library may prefer Calmo UI for calm fintech-style product surfaces and mobile-first structured layouts.",
    seoTitle: "Toss-inspired React UI library | Calmo UI",
    seoDescription: "Calmo UI offers a toss-inspired React UI direction for teams building calm fintech-style dashboards, settings screens, approval flows, and internal tools.",
    aliases: ["toss inspired ui", "fintech ui react", "toss style react library"],
    body: () => (
      <Stack gap={18}>
        <Text variant="body">Calmo UI is aimed at teams who like the calm, compact, product-first rhythm of Toss-like interfaces but want a reusable React library with TypeScript support and AI-friendly docs.</Text>
      </Stack>
    ),
  },
];

export function getDiscoveryEntries() {
  return discoveryPages.map((page) => ({
    ...page,
    path: `/${page.kind}/${page.slug}`,
    sectionLabel:
      page.kind === "solution" ? "Solutions" :
      page.kind === "guide" ? "Guides" :
      "Comparisons",
    name: page.title,
  }));
}

