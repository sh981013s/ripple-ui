import React from "react";
import {
  Accordion,
  AccordionItem,
  AlertDialog,
  Avatar,
  Badge,
  Banner,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  Chip,
  ConfirmDialog,
  DatePicker,
  Dialog,
  Divider,
  EmptyState,
  IconButton,
  InfoRow,
  Inline,
  Input,
  List,
  ListFooter,
  ListHeader,
  ListRow,
  Loader,
  NoticeBanner,
  ProgressBar,
  Radio,
  SearchBar,
  SearchField,
  Selector,
  SegmentedControl,
  SectionHeader,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  Stepper,
  Surface,
  Switch,
  Tab,
  Table,
  TableRow,
  Tabs,
  Text,
  TextArea,
  Toast,
  Tooltip,
  TopBar,
  Pagination,
} from "@ripple-ui/core";

function InteractiveTabsPreview() {
  const [active, setActive] = React.useState("overview");

  return (
    <Tabs aria-label="views" stretch>
      {[
        ["overview", "Overview"],
        ["traffic", "Traffic"],
        ["alerts", "Alerts"],
      ].map(([value, label]) => (
        <Tab key={value} active={active === value} onClick={() => setActive(value)}>
          {label}
        </Tab>
      ))}
    </Tabs>
  );
}

function InteractiveSegmentedPreview() {
  const [value, setValue] = React.useState("week");

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      options={[
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
      ]}
    />
  );
}

function InteractiveSelectorPreview() {
  const [selected, setSelected] = React.useState("overview");

  return (
    <Inline gap={16} wrap align="center">
      <Selector selected={selected === "overview"} onClick={() => setSelected("overview")}>
        Overview
      </Selector>
      <Selector type="arrow" selected={selected === "status"} onClick={() => setSelected("status")}>
        Status
      </Selector>
      <Selector type="clear" selected={selected === "filter"} onClick={() => setSelected("filter")}>
        Filter
      </Selector>
    </Inline>
  );
}

function InteractiveDialogPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button size="medium" onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Review dialog"
        description="Dialogs in the docs are interactive previews."
        footer={<Button display="block" onClick={() => setOpen(false)}>Close</Button>}
      >
        <Text variant="body">Use this preview to inspect spacing, motion, and CTA density.</Text>
      </Dialog>
    </div>
  );
}

function InteractiveSheetPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button size="medium" variant="weak" onClick={() => setOpen(true)}>Open sheet</Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        header="Bottom sheet"
        description="Preview the anchored mobile overlay."
        footer={<Button display="block" onClick={() => setOpen(false)}>Done</Button>}
      >
        <Text variant="body">Bottom sheet previews are interactive and dismissible.</Text>
      </BottomSheet>
    </div>
  );
}

function InteractiveAlertDialogPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button size="medium" onClick={() => setOpen(true)}>Open alert dialog</Button>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Session expired"
        description="Please sign in again to continue."
      />
    </div>
  );
}

function InteractiveConfirmDialogPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button color="danger" size="medium" onClick={() => setOpen(true)}>Open confirm dialog</Button>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Delete workspace?"
        description="This action cannot be undone."
        tone="danger"
      />
    </div>
  );
}

function InteractiveDatePickerPreview() {
  const [value, setValue] = React.useState("2026-04-01");

  return (
    <DatePicker
      label="Launch date"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      validationState="success"
      validationMessage="Date confirmed."
    />
  );
}

function InteractiveSwitchPreview() {
  const [checked, setChecked] = React.useState(true);

  return <Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} label="Realtime alerts" description="Send status changes to connected channels." />;
}

function InteractiveCheckboxPreview() {
  const [checked, setChecked] = React.useState(true);

  return <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} label="Email notifications" description="Receive billing and release updates." />;
}

function InteractiveRadioPreview() {
  const [value, setValue] = React.useState("pro");

  return (
    <Stack gap={12}>
      <Radio checked={value === "starter"} onChange={() => setValue("starter")} name="plan" label="Starter plan" description="Basic usage for small teams." />
      <Radio checked={value === "pro"} onChange={() => setValue("pro")} name="plan" label="Pro plan" description="Advanced analytics and shared access." />
    </Stack>
  );
}

function InteractivePaginationPreview() {
  const [page, setPage] = React.useState(4);
  return <Pagination page={page} totalPages={9} onPageChange={setPage} />;
}

function InteractiveSelectPreview() {
  const [value, setValue] = React.useState("");

  return (
    <Select
      label="Region"
      value={value}
      placeholder="Choose region"
      onChange={(event) => setValue(event.target.value)}
      validationState={value ? "success" : "error"}
      validationMessage={value ? "Region selected." : "Select a region before continuing."}
    >
      <option value="kr">Korea</option>
      <option value="jp">Japan</option>
      <option value="us">United States</option>
    </Select>
  );
}

function InteractiveAccordionPreview() {
  return (
    <Accordion>
      <AccordionItem title="What is Ripple UI?" description="Short answer for product teams." defaultOpen>
        <Text variant="body">A self-authored design library focused on calm, structured product surfaces.</Text>
      </AccordionItem>
      <AccordionItem title="Why route-based docs?" description="Direct links for review and component inspection.">
        <Text variant="body">Routes make sections and individual components linkable and easier to review.</Text>
      </AccordionItem>
    </Accordion>
  );
}

function InteractiveTooltipPreview() {
  return (
    <Inline gap={12}>
      <Tooltip content="Helpful hint">
        <Button variant="ghost">Hover me</Button>
      </Tooltip>
      <Tooltip content="Shown below" position="bottom">
        <button type="button" className="demo-tooltip-trigger">
          Bottom
        </button>
      </Tooltip>
    </Inline>
  );
}

function InteractiveSnackbarPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button size="medium" onClick={() => setOpen(true)}>Open snackbar</Button>
      <Snackbar
        open={open}
        align="left"
        tone="default"
        message="Draft saved successfully."
        action={<Button variant="ghost" onClick={() => setOpen(false)}>Dismiss</Button>}
      />
    </div>
  );
}

function InteractiveTablePreview() {
  const [sortKey, setSortKey] = React.useState("name");

  const rows = React.useMemo(() => {
    const base = [
      { name: "Payments", status: "Live", users: 12 },
      { name: "Growth", status: "Draft", users: 4 },
      { name: "Operations", status: "Review", users: 8 },
    ];

    return [...base].sort((a, b) => {
      if (sortKey === "users") return b.users - a.users;
      return String(a[sortKey]).localeCompare(String(b[sortKey]));
    });
  }, [sortKey]);

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        <Button size="small" variant={sortKey === "name" ? "weak" : "ghost"} onClick={() => setSortKey("name")}>Sort by name</Button>
        <Button size="small" variant={sortKey === "status" ? "weak" : "ghost"} onClick={() => setSortKey("status")}>Sort by status</Button>
        <Button size="small" variant={sortKey === "users" ? "weak" : "ghost"} onClick={() => setSortKey("users")}>Sort by users</Button>
      </Inline>
      <Table
        columns={[
          { key: "name", title: "Name" },
          { key: "status", title: "Status" },
          { key: "users", title: "Users", align: "right" },
        ]}
        rows={rows}
      />
    </Stack>
  );
}

function PropTable({ props }) {
  return (
    <div className="docs-props-table">
      <div className="docs-props-head">Props</div>
      <div className="docs-props-grid">
        {props.map((prop) => (
          <React.Fragment key={prop.name}>
            <div className="docs-prop-name">{prop.name}</div>
            <div className="docs-prop-type">{prop.type}</div>
            <div className="docs-prop-default">{prop.defaultValue ?? "-"}</div>
            <div className="docs-prop-description">{prop.description}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function ComponentDocCard({ component, footer }) {
  return (
    <Card className="docs-card">
      <Stack gap={16}>
        <SectionHeader
          eyebrow={component.eyebrow}
          title={component.name}
          description={component.description}
        />
        <div className="docs-preview">{component.preview()}</div>
        <PropTable props={component.props} />
        {footer ? <div className="docs-card-footer">{footer}</div> : null}
      </Stack>
    </Card>
  );
}

const docs = [
  {
    id: "layout",
    label: "Layout",
    components: [
      {
        name: "Surface",
        eyebrow: "primitive",
        description: "Base container with tone and radius control.",
        props: [
          { name: "tone", type: `"default" | "muted" | "accent" | "success" | "warning"`, defaultValue: `"default"`, description: "Surface color treatment." },
          { name: "radius", type: `"sm" | "md" | "lg" | "xl"`, defaultValue: `"lg"`, description: "Corner radius scale." },
        ],
        preview: () => (
          <Inline gap={12} wrap>
            <Surface tone="default" radius="lg" className="docs-surface-box">Default</Surface>
            <Surface tone="muted" radius="lg" className="docs-surface-box">Muted</Surface>
            <Surface tone="accent" radius="lg" className="docs-surface-box">Accent</Surface>
          </Inline>
        ),
      },
      {
        name: "Card",
        eyebrow: "layout",
        description: "Elevated surface with built-in padding.",
        props: [
          { name: "tone", type: `"default" | "muted" | "accent" | "success" | "warning"`, defaultValue: `"default"`, description: "Card tone." },
          { name: "radius", type: `"sm" | "md" | "lg" | "xl"`, defaultValue: `"lg"`, description: "Card radius." },
        ],
        preview: () => <Card><Text variant="body">Card content</Text></Card>,
      },
      {
        name: "Stack",
        eyebrow: "primitive",
        description: "Vertical flex primitive for spacing content.",
        props: [
          { name: "gap", type: "number", defaultValue: "12", description: "Gap between children." },
          { name: "align", type: "string", defaultValue: `"stretch"`, description: "Cross-axis alignment." },
          { name: "justify", type: "string", defaultValue: `"flex-start"`, description: "Main-axis alignment." },
        ],
        preview: () => (
          <Stack gap={8}>
            <Chip tone="neutral">One</Chip>
            <Chip tone="neutral">Two</Chip>
            <Chip tone="neutral">Three</Chip>
          </Stack>
        ),
      },
      {
        name: "Inline",
        eyebrow: "primitive",
        description: "Horizontal flex primitive with optional wrapping.",
        props: [
          { name: "gap", type: "number", defaultValue: "12", description: "Gap between children." },
          { name: "wrap", type: "boolean", defaultValue: "false", description: "Enable wrapping." },
        ],
        preview: () => (
          <Inline gap={8} wrap>
            <Chip tone="accent">Alpha</Chip>
            <Chip tone="neutral">Beta</Chip>
            <Chip tone="success">Gamma</Chip>
          </Inline>
        ),
      },
      {
        name: "Divider",
        eyebrow: "layout",
        description: "Simple visual separator.",
        props: [
          { name: "orientation", type: `"horizontal" | "vertical"`, defaultValue: `"horizontal"`, description: "Divider direction." },
          { name: "inset", type: "boolean", defaultValue: "false", description: "Apply horizontal inset." },
        ],
        preview: () => <Divider />,
      },
      {
        name: "SectionHeader",
        eyebrow: "content",
        description: "Section heading block with optional action slot.",
        props: [
          { name: "eyebrow", type: "ReactNode", defaultValue: "-", description: "Small label above title." },
          { name: "title", type: "ReactNode", defaultValue: "-", description: "Main heading text." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Secondary description text." },
          { name: "actions", type: "ReactNode", defaultValue: "-", description: "Right-side action area." },
        ],
        preview: () => <SectionHeader eyebrow="overview" title="Header title" description="Description copy for the section." actions={<Chip tone="accent">Live</Chip>} />,
      },
      {
        name: "Avatar",
        eyebrow: "identity",
        description: "Circular identity primitive with fallback initials and optional status.",
        props: [
          { name: "src", type: "string", defaultValue: "-", description: "Avatar image source." },
          { name: "name", type: "string", defaultValue: "-", description: "Used to derive initials fallback." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Avatar size scale." },
          { name: "tone", type: `"default" | "accent" | "success" | "warning"`, defaultValue: `"default"`, description: "Fallback background tone." },
          { name: "status", type: `"online" | "busy" | "away"`, defaultValue: "-", description: "Presence dot." },
        ],
        preview: () => (
          <Inline gap={12} align="center">
            <Avatar name="Ripple UI" size="sm" />
            <Avatar name="Review Bot" tone="accent" status="online" />
            <Avatar name="Design Team" size="lg" tone="success" />
          </Inline>
        ),
      },
      {
        name: "Badge",
        eyebrow: "status",
        description: "Compact count or status indicator.",
        props: [
          { name: "tone", type: `"neutral" | "accent" | "success" | "warning" | "danger"`, defaultValue: `"neutral"`, description: "Semantic tone." },
          { name: "variant", type: `"soft" | "solid"`, defaultValue: `"soft"`, description: "Fill treatment." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Badge size." },
        ],
        preview: () => (
          <Inline gap={8} wrap>
            <Badge>12</Badge>
            <Badge tone="accent">NEW</Badge>
            <Badge tone="success" variant="solid">LIVE</Badge>
          </Inline>
        ),
      },
      {
        name: "Text",
        eyebrow: "typography",
        description: "Shared typography primitive with five variants.",
        props: [
          { name: "variant", type: `"hero" | "title" | "body" | "label" | "caption"`, defaultValue: `"body"`, description: "Typography scale." },
          { name: "as", type: "string | component", defaultValue: `"p"`, description: "Rendered element." },
        ],
        preview: () => (
          <Stack gap={8}>
            <Text variant="hero">Hero</Text>
            <Text variant="title">Title</Text>
            <Text variant="body">Body copy</Text>
            <Text variant="label">Label</Text>
            <Text variant="caption">Caption</Text>
          </Stack>
        ),
      },
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    components: [
      {
        name: "TopBar",
        eyebrow: "navigation",
        description: "Sticky header shell for product pages.",
        props: [
          { name: "leading", type: "ReactNode", defaultValue: "-", description: "Left accessory." },
          { name: "title", type: "ReactNode", defaultValue: "-", description: "Primary title." },
          { name: "subtitleTop / subtitleBottom", type: "ReactNode", defaultValue: "-", description: "Upper and lower supporting copy." },
          { name: "trailing / right", type: "ReactNode", defaultValue: "-", description: "Right accessory." },
          { name: "align", type: "\"center\" | \"left\"", defaultValue: "\"center\"", description: "Copy alignment." },
          { name: "rightVerticalAlign", type: "\"top\" | \"center\" | \"bottom\"", defaultValue: "\"center\"", description: "Trailing content alignment." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Bar height scale." },
          { name: "variant", type: `"floating" | "flat"`, defaultValue: `"floating"`, description: "Surface treatment." },
        ],
        preview: () => <TopBar title="Project detail" subtitleTop="Workspace" subtitleBottom="Review channel" align="left" leading={<IconButton aria-label="back">←</IconButton>} trailing={<IconButton tone="accent" aria-label="more">⋯</IconButton>} />,
      },
      {
        name: "Tabs / Tab",
        eyebrow: "navigation",
        description: "Segmented navigation for local view switching.",
        props: [
          { name: "active", type: "boolean", defaultValue: "false", description: "Marks an individual tab active." },
          { name: "aria-label", type: "string", defaultValue: "-", description: "Accessibility label for the tablist." },
          { name: "stretch", type: "boolean", defaultValue: "false", description: "Stretch items to full available width." },
        ],
        preview: () => <InteractiveTabsPreview />,
      },
      {
        name: "SegmentedControl",
        eyebrow: "navigation",
        description: "Compact segmented switcher for local mode changes.",
        props: [
          { name: "options", type: "Array<{ label, value }>", defaultValue: "[]", description: "Segment options." },
          { name: "value", type: "string", defaultValue: "-", description: "Active option value." },
          { name: "onChange", type: "(value) => void", defaultValue: "-", description: "Selection change handler." },
        ],
        preview: () => <InteractiveSegmentedPreview />,
      },
      {
        name: "Selector",
        eyebrow: "navigation",
        description: "Single interactive selection control.",
        props: [
          { name: "selected", type: "boolean", defaultValue: "false", description: "Selected state." },
          { name: "type", type: `"underline" | "arrow" | "clear"`, defaultValue: `"underline"`, description: "Visual selector style." },
        ],
        preview: () => <InteractiveSelectorPreview />,
      },
      {
        name: "IconButton",
        eyebrow: "action",
        description: "Circular icon-first button.",
        props: [
          { name: "tone", type: `"default" | "accent" | "subtle"`, defaultValue: `"default"`, description: "Visual emphasis." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Button size." },
        ],
        preview: () => (
          <Inline gap={10}>
            <IconButton size="sm" aria-label="search">⌕</IconButton>
            <IconButton tone="subtle" aria-label="bookmark">☆</IconButton>
            <IconButton tone="accent" size="lg" aria-label="share">↗</IconButton>
          </Inline>
        ),
      },
      {
        name: "Tooltip",
        eyebrow: "navigation",
        description: "Lightweight hover or focus hint.",
        props: [
          { name: "content", type: "ReactNode", defaultValue: "-", description: "Tooltip body." },
          { name: "position", type: `"top" | "bottom"`, defaultValue: `"top"`, description: "Placement relative to trigger." },
        ],
        preview: () => <InteractiveTooltipPreview />,
      },
    ],
  },
  {
    id: "actions",
    label: "Actions",
    components: [
      {
        name: "Button",
        eyebrow: "action",
        description: "Primary clickable action surface.",
        props: [
          { name: "variant", type: `"primary" | "weak" | "ghost" | "icon"`, defaultValue: `"primary"`, description: "Button emphasis." },
        ],
        preview: () => (
          <Inline gap={12} wrap>
            <Button>Primary</Button>
            <Button variant="weak">Weak</Button>
            <Button variant="ghost">Ghost</Button>
          </Inline>
        ),
      },
      {
        name: "Chip",
        eyebrow: "action",
        description: "Compact status or filter token.",
        props: [
          { name: "tone", type: `"accent" | "neutral" | "success" | "warning"`, defaultValue: `"accent"`, description: "Chip color." },
        ],
        preview: () => (
          <Inline gap={8} wrap>
            <Chip tone="accent">Accent</Chip>
            <Chip tone="neutral">Neutral</Chip>
            <Chip tone="success">Success</Chip>
            <Chip tone="warning">Warning</Chip>
          </Inline>
        ),
      },
    ],
  },
  {
    id: "forms",
    label: "Forms",
    components: [
      {
        name: "Input",
        eyebrow: "form",
        description: "Single-line text field with labels and status text.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "hint", type: "ReactNode", defaultValue: "-", description: "Neutral helper text." },
          { name: "validationState", type: `"default" | "success" | "warning" | "error"`, defaultValue: `"default"`, description: "Semantic validation state." },
          { name: "validationMessage", type: "ReactNode", defaultValue: "-", description: "Message paired with the current validation state." },
          { name: "error / warning / success", type: "ReactNode", defaultValue: "-", description: "Backward-compatible shortcuts that map to validation state and message." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field height scale." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "before / after", type: "ReactNode", defaultValue: "-", description: "Primary field-side accessories." },
          { name: "clearable / actionLabel / passwordToggle", type: "boolean | string", defaultValue: "-", description: "Built-in inline controls." },
        ],
        preview: () => (
          <Input
            label="Workspace name"
            placeholder="Enter workspace name"
            validationState="success"
            validationMessage="This name is available."
            clearable
            actionLabel="Check"
          />
        ),
      },
      {
        name: "TextArea",
        eyebrow: "form",
        description: "Multi-line input field sharing input styling rules.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => (
          <TextArea
            label="Release notes"
            placeholder="Describe what changed in this build."
            validationState="warning"
            validationMessage="Keep this under 500 characters."
          />
        ),
      },
      {
        name: "SearchBar",
        eyebrow: "form",
        description: "Specialized search input with rounded treatment.",
        props: [
          { name: "leading", type: "ReactNode", defaultValue: `"⌕"`, description: "Search icon replacement." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Optional validation feedback." },
        ],
        preview: () => <SearchBar label="Search" placeholder="Search components" hint="Search, then refine with filters." />,
      },
      {
        name: "SearchField",
        eyebrow: "form",
        description: "Search input with built-in clear affordance.",
        props: [
          { name: "clearable", type: "boolean", defaultValue: "true", description: "Show clear control." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Optional validation feedback." },
        ],
        preview: () => (
          <SearchField
            label="Search docs"
            defaultValue="button"
            validationState="success"
            validationMessage="1 exact match."
          />
        ),
      },
      {
        name: "Select",
        eyebrow: "form",
        description: "Custom popover select styled like the shared field system.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "placeholder", type: "string", defaultValue: "-", description: "Optional placeholder option text." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <InteractiveSelectPreview />,
      },
      {
        name: "DatePicker",
        eyebrow: "form",
        description: "Date input variant sharing the same input field system.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <InteractiveDatePickerPreview />,
      },
      {
        name: "Switch",
        eyebrow: "form",
        description: "Binary toggle for settings surfaces.",
        props: [
          { name: "checked", type: "boolean", defaultValue: "false", description: "Checked state." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Track size." },
          { name: "tone", type: `"accent" | "success" | "warning"`, defaultValue: `"accent"`, description: "On-state color." },
        ],
        preview: () => <InteractiveSwitchPreview />,
      },
      {
        name: "Checkbox",
        eyebrow: "form",
        description: "Square multi-select choice control.",
        props: [
          { name: "checked", type: "boolean", defaultValue: "false", description: "Checked state." },
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Primary label." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Secondary copy." },
        ],
        preview: () => <InteractiveCheckboxPreview />,
      },
      {
        name: "Radio",
        eyebrow: "form",
        description: "Round single-select choice control.",
        props: [
          { name: "checked", type: "boolean", defaultValue: "false", description: "Checked state." },
          { name: "name", type: "string", defaultValue: "-", description: "Native radio group name." },
        ],
        preview: () => <InteractiveRadioPreview />,
      },
    ],
  },
  {
    id: "feedback",
    label: "Feedback",
    components: [
      {
        name: "Loader",
        eyebrow: "feedback",
        description: "Compact spinner with optional label.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Spinner size." },
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Optional inline label." },
        ],
        preview: () => (
          <Inline gap={14} wrap align="center">
            <Loader size="sm" />
            <Loader label="Loading data" />
          </Inline>
        ),
      },
      {
        name: "Skeleton",
        eyebrow: "feedback",
        description: "Animated placeholder for loading surfaces.",
        props: [
          { name: "width", type: "number | string", defaultValue: "-", description: "Placeholder width." },
          { name: "height", type: "number | string", defaultValue: "16", description: "Placeholder height." },
          { name: "radius", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Corner rounding." },
        ],
        preview: () => (
          <Stack gap={10}>
            <Skeleton width="48%" height={18} />
            <Skeleton width="100%" height={14} />
            <Skeleton width="82%" height={14} />
          </Stack>
        ),
      },
      {
        name: "Toast",
        eyebrow: "feedback",
        description: "Transient inline notification surface.",
        props: [
          { name: "tone", type: `"default" | "success" | "warning" | "danger"`, defaultValue: `"default"`, description: "Semantic tone." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Spacing scale." },
          { name: "variant", type: `"soft" | "solid"`, defaultValue: `"soft"`, description: "Background treatment." },
          { name: "badge", type: "ReactNode", defaultValue: "-", description: "Optional badge." },
          { name: "action", type: "ReactNode", defaultValue: "-", description: "Optional action area." },
        ],
        preview: () => <Toast title="Deployment completed" badge="Live" description="The production build is now available." />,
      },
      {
        name: "Snackbar",
        eyebrow: "feedback",
        description: "Fixed bottom notification with optional action.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "tone", type: `"default" | "success" | "warning" | "danger"`, defaultValue: `"default"`, description: "Color tone." },
          { name: "message", type: "ReactNode", defaultValue: "-", description: "Primary message." },
          { name: "align", type: "\"center\" | \"left\"", defaultValue: "\"center\"", description: "Horizontal anchor position." },
        ],
        preview: () => <InteractiveSnackbarPreview />,
      },
      {
        name: "NoticeBanner / Banner",
        eyebrow: "feedback",
        description: "Prominent message banner for page-level notices.",
        props: [
          { name: "tone", type: `"neutral" | "accent" | "success" | "warning" | "danger"`, defaultValue: `"neutral"`, description: "Notice tone." },
          { name: "action", type: "ReactNode", defaultValue: "-", description: "Action slot." },
          { name: "compact", type: "boolean", defaultValue: "false", description: "Tighter banner density." },
        ],
        preview: () => <Banner tone="accent" title="Submission assets updated" description="The latest metadata set is ready for review." action={<Button variant="ghost">Open</Button>} />,
      },
      {
        name: "ProgressBar",
        eyebrow: "feedback",
        description: "Simple progress indicator with semantic tones.",
        props: [
          { name: "value", type: "number", defaultValue: "0", description: "Current value." },
          { name: "max", type: "number", defaultValue: "100", description: "Maximum value." },
          { name: "tone", type: `"accent" | "success" | "warning" | "danger"`, defaultValue: `"accent"`, description: "Fill color." },
        ],
        preview: () => <ProgressBar value={72} />,
      },
      {
        name: "EmptyState",
        eyebrow: "feedback",
        description: "Centered blank-slate pattern.",
        props: [
          { name: "icon", type: "ReactNode", defaultValue: "-", description: "Icon or illustration slot." },
          { name: "title", type: "ReactNode", defaultValue: "-", description: "Heading text." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Supporting copy." },
          { name: "action", type: "ReactNode", defaultValue: "-", description: "CTA slot." },
        ],
        preview: () => <EmptyState icon="◌" title="No connected channels" description="Connect at least one channel to receive alerts." action={<Button>Connect</Button>} />,
      },
    ],
  },
  {
    id: "overlays",
    label: "Overlays",
    components: [
      {
        name: "AlertDialog",
        eyebrow: "overlay",
        description: "Single CTA dialog for acknowledgement flows.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "confirmLabel", type: "string", defaultValue: `"Confirm"`, description: "Primary CTA label." },
        ],
        preview: () => <InteractiveAlertDialogPreview />,
      },
      {
        name: "ConfirmDialog",
        eyebrow: "overlay",
        description: "Dual-action dialog for destructive confirmation.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "confirmLabel / cancelLabel", type: "string", defaultValue: "-", description: "CTA labels." },
        ],
        preview: () => <InteractiveConfirmDialogPreview />,
      },
      {
        name: "Dialog",
        eyebrow: "overlay",
        description: "Centered modal surface.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "closeOnBackdrop", type: "boolean", defaultValue: "true", description: "Backdrop close behavior." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Dialog width scale." },
          { name: "panelClassName", type: "string", defaultValue: "-", description: "Panel class hook." },
        ],
        preview: () => <InteractiveDialogPreview />,
      },
      {
        name: "BottomSheet",
        eyebrow: "overlay",
        description: "Bottom anchored overlay with size variants.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "size", type: `"sm" | "md" | "lg" | "full"`, defaultValue: `"md"`, description: "Panel width/height scale." },
          { name: "variant", type: `"floating" | "flat"`, defaultValue: `"floating"`, description: "Surface treatment." },
          { name: "header / description / footer", type: "ReactNode", defaultValue: "-", description: "Structured header and CTA areas." },
        ],
        preview: () => <InteractiveSheetPreview />,
      },
      {
        name: "Accordion / AccordionItem",
        eyebrow: "overlay",
        description: "Expandable disclosure rows.",
        props: [
          { name: "title", type: "ReactNode", defaultValue: "-", description: "Item heading." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Secondary item copy." },
          { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Initial open state." },
        ],
        preview: () => <InteractiveAccordionPreview />,
      },
      {
        name: "Stepper",
        eyebrow: "overlay",
        description: "Progress indicator for multistep flows.",
        props: [
          { name: "steps", type: "Array<{ label, description }>", defaultValue: "[]", description: "Ordered step metadata." },
          { name: "current", type: "number", defaultValue: "0", description: "Current zero-based step index." },
          { name: "orientation", type: `"horizontal" | "vertical"`, defaultValue: `"horizontal"`, description: "Layout direction." },
        ],
        preview: () => (
          <Stepper
            current={1}
            steps={[
              { label: "Draft", description: "Basic information" },
              { label: "Review", description: "Team check" },
              { label: "Publish", description: "Go live" },
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "data",
    label: "Data & Lists",
    components: [
      {
        name: "List / ListHeader / ListFooter",
        eyebrow: "data",
        description: "Structured grouped list surface.",
        props: [
          { name: "inset", type: "boolean", defaultValue: "false", description: "Larger outer rounding." },
          { name: "divided", type: "boolean", defaultValue: "true", description: "Show row separators." },
        ],
        preview: () => (
          <List>
            <ListHeader>Workspace members</ListHeader>
            <ListRow title="Design" description="3 active reviewers" />
            <ListRow title="Engineering" description="5 active reviewers" />
            <ListFooter>Updated 2 minutes ago</ListFooter>
          </List>
        ),
      },
      {
        name: "InfoRow",
        eyebrow: "data",
        description: "Two-column label/value primitive.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Label cell." },
          { name: "value", type: "ReactNode", defaultValue: "-", description: "Value cell." },
        ],
        preview: () => <InfoRow label="Monthly revenue" value="₩12,480,000" />,
      },
      {
        name: "TableRow",
        eyebrow: "data",
        description: "Two-column metric row with optional accessories.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Primary label." },
          { name: "value", type: "ReactNode", defaultValue: "-", description: "Main value." },
        ],
        preview: () => (
          <Card>
            <TableRow label="Total volume" value="₩12,340,000" trailing={<Badge tone="accent">+12%</Badge>} />
          </Card>
        ),
      },
      {
        name: "ListRow",
        eyebrow: "data",
        description: "Structured row for navigation lists or summary blocks.",
        props: [
          { name: "leading", type: "ReactNode", defaultValue: "-", description: "Leading slot." },
          { name: "eyebrow", type: "ReactNode", defaultValue: "-", description: "Small supporting label above the title." },
          { name: "meta", type: "ReactNode", defaultValue: "-", description: "Secondary value in trailing column." },
          { name: "trailing", type: "ReactNode", defaultValue: "-", description: "Trailing slot." },
          { name: "interactive", type: "boolean", defaultValue: "false", description: "Uses button semantics and hover behavior." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Padding scale." },
          { name: "variant", type: `"default" | "muted" | "accent"`, defaultValue: `"default"`, description: "Background treatment." },
        ],
        preview: () => (
          <ListRow
            interactive
            variant="accent"
            leading={<Chip tone="warning">!</Chip>}
            eyebrow="submission"
            title="Review required"
            description="A manual approval is waiting in the queue."
            meta="now"
            trailing={<Text variant="caption">Open</Text>}
          />
        ),
      },
      {
        name: "Table",
        eyebrow: "data",
        description: "Scrollable data table with simple column configuration.",
        props: [
          { name: "columns", type: "Array<{ key, title, align?, render? }>", defaultValue: "[]", description: "Column definitions." },
          { name: "rows", type: "Array<object>", defaultValue: "[]", description: "Row records." },
          { name: "dense", type: "boolean", defaultValue: "false", description: "Compact row spacing." },
        ],
        preview: () => <InteractiveTablePreview />,
      },
      {
        name: "Pagination",
        eyebrow: "data",
        description: "Simple page switcher with windowed page range.",
        props: [
          { name: "page", type: "number", defaultValue: "1", description: "Current page." },
          { name: "totalPages", type: "number", defaultValue: "1", description: "Maximum page count." },
          { name: "onPageChange", type: "(page) => void", defaultValue: "-", description: "Page selection callback." },
        ],
        preview: () => <InteractivePaginationPreview />,
      },
    ],
  },
];

export function slugifyComponentName(name) {
  return String(name)
    .toLowerCase()
    .replaceAll("/", " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const docsCatalog = docs.map((section) => ({
  ...section,
  path: `/components/${section.id}`,
  components: section.components.map((component) => ({
    ...component,
    slug: slugifyComponentName(component.name),
    path: `/components/${section.id}/${slugifyComponentName(component.name)}`,
  })),
}));

export function getSectionDocs(sectionId) {
  return docsCatalog.find((section) => section.id === sectionId) ?? null;
}

export function getComponentDocs(sectionId, componentSlug) {
  return getSectionDocs(sectionId)?.components.find((component) => component.slug === componentSlug) ?? null;
}

export function getAllDocEntries() {
  return docsCatalog.flatMap((section) => section.components.map((component) => ({
    sectionId: section.id,
    sectionLabel: section.label,
    ...component,
  })));
}

export default docs;
