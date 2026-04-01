import React from "react";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Banner,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  Chip,
  DatePicker,
  Dialog,
  Divider,
  EmptyState,
  IconButton,
  InfoRow,
  Inline,
  Input,
  ListRow,
  NoticeBanner,
  ProgressBar,
  Radio,
  SearchBar,
  SegmentedControl,
  SectionHeader,
  Select,
  Snackbar,
  Stack,
  Stepper,
  Surface,
  Switch,
  Tab,
  Table,
  Tabs,
  Text,
  TextArea,
  Toast,
  Tooltip,
  TopBar,
  Pagination,
} from "@ripple-ui/core";

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

export function ComponentDocCard({ component }) {
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
        ],
        preview: () => (
          <Tabs aria-label="views">
            <Tab active>Overview</Tab>
            <Tab>Traffic</Tab>
            <Tab>Alerts</Tab>
          </Tabs>
        ),
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
        preview: () => (
          <SegmentedControl
            value="week"
            options={[
              { label: "Day", value: "day" },
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
            ]}
          />
        ),
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
        preview: () => (
          <Inline gap={12}>
            <Tooltip content="Helpful hint">
              <Button variant="ghost">Hover me</Button>
            </Tooltip>
            <Tooltip content="Shown below" position="bottom">
              <Chip tone="neutral">Bottom</Chip>
            </Tooltip>
          </Inline>
        ),
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
          { name: "hint", type: "ReactNode", defaultValue: "-", description: "Helper text." },
          { name: "error", type: "ReactNode", defaultValue: "-", description: "Error text and style." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field height scale." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "before / after", type: "ReactNode", defaultValue: "-", description: "Primary field-side accessories." },
          { name: "clearable / actionLabel / passwordToggle", type: "boolean | string", defaultValue: "-", description: "Built-in inline controls." },
        ],
        preview: () => (
          <Input label="Workspace name" placeholder="Enter workspace name" hint="Use a clear, concise title." clearable actionLabel="Check" />
        ),
      },
      {
        name: "TextArea",
        eyebrow: "form",
        description: "Multi-line input field sharing input styling rules.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
        ],
        preview: () => <TextArea label="Release notes" placeholder="Describe what changed in this build." />,
      },
      {
        name: "SearchBar",
        eyebrow: "form",
        description: "Specialized search input with rounded treatment.",
        props: [
          { name: "leading", type: "ReactNode", defaultValue: `"⌕"`, description: "Search icon replacement." },
        ],
        preview: () => <SearchBar label="Search" placeholder="Search components" />,
      },
      {
        name: "Select",
        eyebrow: "form",
        description: "Native select control styled like other inputs.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
        ],
        preview: () => (
          <Select label="Region" defaultValue="kr">
            <option value="kr">Korea</option>
            <option value="jp">Japan</option>
            <option value="us">United States</option>
          </Select>
        ),
      },
      {
        name: "DatePicker",
        eyebrow: "form",
        description: "Date input variant sharing the same input field system.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
        ],
        preview: () => <DatePicker label="Launch date" defaultValue="2026-04-01" />,
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
        preview: () => <Switch checked readOnly label="Realtime alerts" description="Send status changes to connected channels." />,
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
        preview: () => <Checkbox checked readOnly label="Email notifications" description="Receive billing and release updates." />,
      },
      {
        name: "Radio",
        eyebrow: "form",
        description: "Round single-select choice control.",
        props: [
          { name: "checked", type: "boolean", defaultValue: "false", description: "Checked state." },
          { name: "name", type: "string", defaultValue: "-", description: "Native radio group name." },
        ],
        preview: () => <Radio checked readOnly name="plan" label="Pro plan" description="Advanced analytics and shared access." />,
      },
    ],
  },
  {
    id: "feedback",
    label: "Feedback",
    components: [
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
        ],
        preview: () => <div className="docs-inline-surface"><Snackbar open tone="default" message="Draft saved successfully." /></div>,
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
        name: "Dialog",
        eyebrow: "overlay",
        description: "Centered modal surface.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "closeOnBackdrop", type: "boolean", defaultValue: "true", description: "Backdrop close behavior." },
          { name: "panelClassName", type: "string", defaultValue: "-", description: "Panel class hook." },
        ],
        preview: () => <div className="docs-inline-surface"><Chip tone="neutral">Open via live demo controls</Chip></div>,
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
        preview: () => <div className="docs-inline-surface"><Chip tone="neutral">Open via live demo controls</Chip></div>,
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
        preview: () => (
          <Accordion>
            <AccordionItem title="What is Ripple UI?" description="Short answer for product teams." defaultOpen>
              <Text variant="body">A self-authored design library focused on calm, structured product surfaces.</Text>
            </AccordionItem>
          </Accordion>
        ),
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
        preview: () => (
          <Table
            columns={[
              { key: "name", title: "Name" },
              { key: "status", title: "Status" },
              { key: "users", title: "Users", align: "right" },
            ]}
            rows={[
              { name: "Payments", status: "Live", users: "12" },
              { name: "Growth", status: "Draft", users: "4" },
            ]}
          />
        ),
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
        preview: () => <Pagination page={4} totalPages={9} />,
      },
    ],
  },
];

export default docs;
