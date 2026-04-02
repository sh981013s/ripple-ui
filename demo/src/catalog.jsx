import React from "react";
import {
  Accordion,
  AccordionItem,
  AccessoryButton,
  AlertDialog,
  Avatar,
  Badge,
  Banner,
  BarChart,
  Border,
  BottomInfo,
  BottomSheet,
  Button,
  Card,
  Checkbox,
  Chip,
  CommandPalette,
  ConfirmDialog,
  DatePicker,
  DatePickerCompact,
  Dialog,
  DoughnutChart,
  Dropdown,
  Divider,
  EmptyState,
  FadeIn,
  Icon,
  IconButton,
  iconNames,
  InfoRow,
  Inline,
  Input,
  List,
  ListFooter,
  ListHeader,
  ListHeaderRightArrow,
  ListHeaderRightText,
  ListHeaderTitleSelector,
  ListHeaderTitleTextButton,
  ListRow,
  ListRowFillIcon,
  ListRowIcon,
  ListRowIconButton,
  ListRowImage,
  ListRowImageContainer,
  Loader,
  Menu,
  MenuDropdownCheckItem,
  MenuDropdownIcon,
  MenuDropdownItem,
  MenuHeader,
  MenuTrigger,
  NoticeBanner,
  Popover,
  ProgressBar,
  ProgressStep,
  ProgressStepper,
  Radio,
  Result,
  ResultButton,
  Rating,
  SearchBar,
  SearchField,
  SearchFieldResult,
  SearchFieldSuggest,
  Selector,
  SegmentedControl,
  SectionHeader,
  Select,
  SelectQuiet,
  SelectSearchable,
  Skeleton,
  Snackbar,
  Spacing,
  Stack,
  Stepper,
  Slider,
  Surface,
  Switch,
  Tab,
  Table,
  TableRow,
  Tabs,
  Text,
  TextButton,
  TextField,
  TextFieldButton,
  TextFieldClearable,
  TextFieldPassword,
  TextArea,
  Toast,
  Tooltip,
  Top,
  TopBar,
  TopRightArrow,
  TopRightButton,
  TopSubtitleBadges,
  TopSubtitleSelector,
  TopTitleSelector,
  Pagination,
  Modal,
  FullScreenLoader,
  GridList,
  LoadingCompleteView,
  WheelDatePicker,
} from "@sh981013s/ripple-ui";

function useCopyFeedback() {
  const [copied, setCopied] = React.useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return { copied, copy };
}

function InteractiveTabsPreview() {
  const [active, setActive] = React.useState("overview");
  const [variant, setVariant] = React.useState("pill");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["pill", "underline"].map((item) => (
          <Selector key={item} selected={variant === item} onClick={() => setVariant(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Tabs aria-label="views" stretch variant={variant}>
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
    </Stack>
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

function InteractiveIconsPreview() {
  const [query, setQuery] = React.useState("");
  const filteredIcons = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return iconNames;
    return iconNames.filter((name) => name.toLowerCase().includes(q));
  }, [query]);

  return (
    <Stack gap={12}>
      <SearchField
        aria-label="Filter icons"
        placeholder="Filter icons"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClear={() => setQuery("")}
      />
      <div className="docs-icon-grid">
        {filteredIcons.map((name) => (
          <div key={name} className="docs-icon-card">
            <Icon name={name} size={20} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </Stack>
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

function InteractiveModalPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button size="medium" onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        headline="Project workspace"
        subheadline="Review the current status before continuing."
        tertiaryAction={{ label: "Learn more", icon: "externalLink", onClick: () => setOpen(false) }}
        secondaryAction={{ label: "Cancel", variant: "ghost", onClick: () => setOpen(false) }}
        primaryAction={{ label: "Continue", onClick: () => setOpen(false) }}
      >
        <Text variant="body">Modal is a product-flavored alias for centered dialog usage.</Text>
      </Modal>
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
        tertiaryAction={{ label: "Preview", icon: "eye", onClick: () => setOpen(false) }}
        secondaryAction={{ label: "Cancel", variant: "ghost", onClick: () => setOpen(false) }}
        primaryAction={{ label: "Done", onClick: () => setOpen(false) }}
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

function InteractivePopoverPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button size="medium" variant="weak" onClick={() => setOpen((prev) => !prev)}>
            Open popover
          </Button>
        }
      >
        <Stack gap={8}>
          <Text variant="label">Popover title</Text>
          <Text variant="caption">Use popovers for lightweight contextual surfaces.</Text>
        </Stack>
      </Popover>
    </div>
  );
}

function InteractiveMenuPreview() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("No action selected yet.");

  return (
    <Stack gap={10}>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        width={280}
        header={<Text variant="label">Workspace actions</Text>}
        footer={<Text variant="caption">Choose one action to continue.</Text>}
        trigger={
          <Button size="medium" variant="weak" onClick={() => setOpen((prev) => !prev)}>
            Open menu
          </Button>
        }
        items={[
          { type: "header", label: "Workspace actions" },
          { label: "Rename workspace", icon: "edit", description: "Update title and slug", onSelect: () => setMessage("Rename action selected.") },
          { label: "Pinned", icon: "bookmark", checked: true, shortcut: "⌘P", onSelect: () => setMessage("Pinned state toggled.") },
          { type: "divider" },
          { label: "Duplicate", icon: "copy", shortcut: "⌘D", onSelect: () => setMessage("Duplicate action selected.") },
          { label: "Delete", icon: "alert", tone: "danger", description: "Remove this workspace permanently", onSelect: () => setMessage("Delete action selected.") },
        ]}
      />
      <Text variant="caption">{message}</Text>
    </Stack>
  );
}

function TopBarPlayground() {
  const [mode, setMode] = React.useState("badges");
  const [surface, setSurface] = React.useState("default");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["badges", "selector", "action"].map((item) => (
          <Selector key={item} selected={mode === item} onClick={() => setMode(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["default", "muted", "accent"].map((item) => (
          <Selector key={item} selected={surface === item} onClick={() => setSurface(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <TopBar
        leading={<IconButton aria-label="Back"><Icon name="chevronLeft" size={16} /></IconButton>}
        title="Workspace"
        subtitleTop="Operations"
        subtitleBottom="Review queue"
        align="left"
        badges={mode === "badges" ? <><Badge tone="accent">Live</Badge><Badge tone="neutral">12 members</Badge></> : null}
        titleSelector={mode === "selector" ? <Selector selected size="sm">All</Selector> : null}
        subtitleSelector={mode === "selector" ? <Selector type="arrow" size="sm">Status</Selector> : null}
        rightButton={mode === "action" ? <IconButton tone="accent" aria-label="More"><Icon name="more" size={16} /></IconButton> : null}
        rightArrow={mode !== "action"}
        divider
        surface={surface}
      />
    </Stack>
  );
}

function ListHeaderPlayground() {
  const [mode, setMode] = React.useState("rightText");
  const [compact, setCompact] = React.useState(false);

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["rightText", "button", "selector"].map((item) => (
          <Selector key={item} selected={mode === item} onClick={() => setMode(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        <Selector selected={!compact} onClick={() => setCompact(false)}>default</Selector>
        <Selector selected={compact} onClick={() => setCompact(true)}>compact</Selector>
      </Inline>
      <List>
        <ListHeader
          eyebrow="Workspace"
          title="Team access"
          description="Manage the primary review surfaces."
          badges={mode === "rightText" ? <Badge tone="accent">Live</Badge> : null}
          rightText={mode === "rightText" ? "Updated now" : undefined}
          rightButton={mode === "button" ? <TextButton tone="neutral" icon="externalLink">Open</TextButton> : undefined}
          selector={mode === "selector" ? <Selector type="arrow" selected>All</Selector> : undefined}
          rightArrow={mode !== "button"}
          compact={compact}
          divider
        />
      </List>
    </Stack>
  );
}

function ListRowPlayground() {
  const [mode, setMode] = React.useState("icon");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["icon", "image", "action"].map((item) => (
          <Selector key={item} selected={mode === item} onClick={() => setMode(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <ListRow
        interactive
        eyebrow="Workspace"
        title="Marketing Ops"
        description="12 members · synced 2m ago"
        meta="Live"
        icon={mode === "icon" ? <Icon name="layers" size={18} /> : undefined}
        image={mode === "image" ? "https://placehold.co/84x84/png" : undefined}
        action={mode === "action" ? <TextButton size="sm" tone="neutral">Manage</TextButton> : undefined}
        rightArrow={mode !== "action"}
      />
    </Stack>
  );
}

function BarChartPlayground() {
  const [series, setSeries] = React.useState("revenue");
  const data =
    series === "revenue"
      ? [
          { label: "Mon", value: 42, tone: "accent" },
          { label: "Tue", value: 58, tone: "accent" },
          { label: "Wed", value: 64, tone: "success" },
          { label: "Thu", value: 49, tone: "warning" },
        ]
      : [
          { label: "Mon", value: 18, tone: "success" },
          { label: "Tue", value: 22, tone: "success" },
          { label: "Wed", value: 17, tone: "warning" },
          { label: "Thu", value: 26, tone: "accent" },
        ];

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["revenue", "conversions"].map((item) => (
          <Selector key={item} selected={series === item} onClick={() => setSeries(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <BarChart data={data} />
    </Stack>
  );
}

function SliderPlayground() {
  const [value, setValue] = React.useState(64);
  const [tone, setTone] = React.useState("accent");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["accent", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Slider label="Threshold" value={value} onChange={(event) => setValue(Number(event.target.value))} tone={tone} />
    </Stack>
  );
}

function ProgressStepperPlayground() {
  const [current, setCurrent] = React.useState(1);

  return (
    <Stack gap={12}>
      <ProgressStepper
        current={current}
        steps={[
          { label: "Draft", description: "Basic information" },
          { label: "Review", description: "Team check" },
          { label: "Publish", description: "Go live" },
        ]}
      />
      <Inline gap={8} wrap>
        {[0, 1, 2].map((item) => (
          <Selector key={item} selected={current === item} onClick={() => setCurrent(item)}>
            step {item + 1}
          </Selector>
        ))}
      </Inline>
    </Stack>
  );
}

function InteractiveDropdownPreview() {
  const [value, setValue] = React.useState("review");

  return (
    <Dropdown
      label="Workflow stage"
      value={value}
      onChange={setValue}
      items={[
        { label: "Draft", value: "draft" },
        { label: "Review", value: "review" },
        { label: "Published", value: "published" },
      ]}
    />
  );
}

function InteractiveCommandPalettePreview() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Use the palette to trigger an action.");

  return (
    <div className="docs-inline-surface">
      <Button size="medium" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={[
          { title: "Open payments dashboard", description: "Jump to reporting", shortcut: "⌘1", onSelect: () => setMessage("Opened payments dashboard.") },
          { title: "Create workspace", description: "Start a new workspace flow", shortcut: "⌘N", onSelect: () => setMessage("Create workspace flow triggered.") },
          { title: "Invite member", description: "Share workspace access", shortcut: "⌘I", onSelect: () => setMessage("Invite flow triggered.") },
        ]}
      />
      <Text variant="caption" className="demo-command-feedback">{message}</Text>
    </div>
  );
}

function ButtonPlayground() {
  const [variant, setVariant] = React.useState("primary");
  const [size, setSize] = React.useState("medium");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["primary", "weak", "ghost"].map((item) => (
          <Selector key={item} selected={variant === item} onClick={() => setVariant(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["small", "medium", "large"].map((item) => (
          <Selector key={item} selected={size === item} onClick={() => setSize(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Button variant={variant} size={size}>Interactive button</Button>
    </Stack>
  );
}

function BadgePlayground() {
  const [tone, setTone] = React.useState("accent");
  const [variant, setVariant] = React.useState("soft");
  const [dot, setDot] = React.useState(false);
  const [count, setCount] = React.useState("3");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["neutral", "accent", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["soft", "solid"].map((item) => (
          <Selector key={item} selected={variant === item} onClick={() => setVariant(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        <Selector selected={!dot} onClick={() => setDot(false)}>
          plain
        </Selector>
        <Selector selected={dot} onClick={() => setDot(true)}>
          dot
        </Selector>
      </Inline>
      <Input label="Count" value={count} onChange={(event) => setCount(event.target.value)} variant="quiet" />
      <Badge tone={tone} variant={variant} dot={dot} count={count ? Number(count) : undefined}>LIVE</Badge>
    </Stack>
  );
}

function IconPlayground() {
  const [query, setQuery] = React.useState("search");
  const matches = React.useMemo(() => iconNames.filter((name) => name.includes(query.toLowerCase())), [query]);
  const current = matches[0] ?? "search";

  return (
    <Stack gap={12}>
      <SearchField value={query} onChange={(event) => setQuery(event.target.value)} onClear={() => setQuery("")} />
      <Inline gap={12} align="center">
        <Card className="docs-playground-icon-card">
          <Icon name={current} size={28} />
        </Card>
        <Stack gap={4}>
          <Text variant="label">{current}</Text>
          <Text variant="caption">{matches.length} matching icons</Text>
        </Stack>
      </Inline>
    </Stack>
  );
}

function InputPlayground() {
  const [variant, setVariant] = React.useState("default");
  const [state, setState] = React.useState("success");
  const [affixMode, setAffixMode] = React.useState("text");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "filled", "quiet"].map((item) => (
          <Selector key={item} selected={variant === item} onClick={() => setVariant(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["default", "success", "warning", "error"].map((item) => (
          <Selector key={item} selected={state === item} onClick={() => setState(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["text", "icon"].map((item) => (
          <Selector key={item} selected={affixMode === item} onClick={() => setAffixMode(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Input
        label="Workspace"
        placeholder="Team workspace"
        variant={variant}
        validationState={state}
        validationMessage={`${state} state message`}
        clearable
        prefix={affixMode === "text" ? "https://" : undefined}
        suffix={affixMode === "text" ? ".ripple" : undefined}
        leading={affixMode === "icon" ? "search" : undefined}
        trailing={affixMode === "icon" ? "settings" : undefined}
      />
    </Stack>
  );
}

function TextFieldPlayground() {
  const [value, setValue] = React.useState("");

  return (
    <TextField
      label="Workspace name"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Enter workspace name"
      clearable
      onClear={() => setValue("")}
      actionLabel="Check"
      validationState={value ? "success" : "default"}
      validationMessage={value ? "Looks good." : "Enter a name to continue."}
    />
  );
}

function TextFieldClearablePlayground() {
  const [value, setValue] = React.useState("Ripple workspace");

  return (
    <TextFieldClearable
      label="Workspace"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
      placeholder="Enter workspace name"
      validationState={value ? "success" : "default"}
      validationMessage={value ? "Clearable control is active." : "Value cleared."}
    />
  );
}

function TextFieldPasswordPlayground() {
  const [value, setValue] = React.useState("ripple-secret");

  return (
    <TextFieldPassword
      label="API secret"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Enter secret"
      validationState="warning"
      validationMessage="Keep this hidden outside secure environments."
    />
  );
}

function TextFieldButtonPlayground() {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <TextFieldButton
      label="Workspace slug"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        setChecked(false);
      }}
      placeholder="team-workspace"
      actionLabel="Check"
      onActionClick={() => setChecked(true)}
      validationState={checked ? "success" : "default"}
      validationMessage={checked ? "Slug format looks available." : "Run a quick availability check."}
    />
  );
}

function SelectPlayground() {
  const [value, setValue] = React.useState("review");

  return (
    <Select label="Stage" value={value} onChange={(event) => setValue(event.target.value)} searchable>
      <option value="draft">Draft</option>
      <option value="review">Review</option>
      <option value="published">Published</option>
    </Select>
  );
}

function SelectQuietPlayground() {
  const [value, setValue] = React.useState("review");

  return (
    <SelectQuiet label="Stage" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Choose stage">
      <option value="draft">Draft</option>
      <option value="review">Review</option>
      <option value="published">Published</option>
    </SelectQuiet>
  );
}

function SelectSearchablePlayground() {
  const [value, setValue] = React.useState("");

  return (
    <SelectSearchable
      label="Workspace"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Choose workspace"
      header="Recent workspaces"
      searchPlaceholder="Search workspaces"
      emptyMessage="No workspaces found."
    >
      <option value="ops">Operations</option>
      <option value="payments">Payments</option>
      <option value="growth">Growth</option>
    </SelectSearchable>
  );
}

function TabsPlayground() {
  const [value, setValue] = React.useState("overview");

  return (
    <Tabs aria-label="Playground tabs" stretch>
      {["overview", "analytics", "alerts"].map((item) => (
        <Tab key={item} active={value === item} onClick={() => setValue(item)}>
          {item}
        </Tab>
      ))}
    </Tabs>
  );
}

function SegmentedPlayground() {
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

function SnackbarPlayground() {
  const [open, setOpen] = React.useState(true);
  const [tone, setTone] = React.useState("default");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <div className="docs-inline-surface">
        <Button size="small" variant="weak" onClick={() => setOpen(true)}>Open snackbar</Button>
        <Snackbar
          open={open}
          tone={tone}
          icon={tone === "success" ? "check" : tone === "warning" ? "bell" : tone === "danger" ? "close" : "info"}
          message="Draft saved successfully."
          dismissible
          onDismiss={() => setOpen(false)}
          action={<Button variant="ghost" onClick={() => setOpen(false)}>Dismiss</Button>}
        />
      </div>
    </Stack>
  );
}

function ToastPlayground() {
  const [tone, setTone] = React.useState("default");
  const [open, setOpen] = React.useState(true);

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => { setTone(item); setOpen(true); }}>
            {item}
          </Selector>
        ))}
      </Inline>
      <div className="docs-inline-surface">
        <Button size="small" variant="weak" onClick={() => setOpen(true)}>Open toast</Button>
        {open ? (
          <Toast
            tone={tone}
            icon={tone === "success" ? "check" : tone === "warning" ? "bell" : tone === "danger" ? "close" : "info"}
            title="Deployment completed"
            badge="Live"
            description="The latest release is available to all users."
            dismissible
            onDismiss={() => setOpen(false)}
          />
        ) : null}
      </div>
    </Stack>
  );
}

function LoaderPlayground() {
  const [tone, setTone] = React.useState("accent");
  const [overlay, setOverlay] = React.useState(false);

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["accent", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        <Selector selected={!overlay} onClick={() => setOverlay(false)}>
          inline
        </Selector>
        <Selector selected={overlay} onClick={() => setOverlay(true)}>
          overlay
        </Selector>
      </Inline>
      <Loader tone={tone} overlay={overlay} centered label="Loading data" />
    </Stack>
  );
}

function ResultPlayground() {
  const [tone, setTone] = React.useState("success");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Result
        tone={tone}
        icon={<Icon name={tone === "success" ? "check" : tone === "warning" ? "bell" : tone === "danger" ? "close" : "sparkles"} size={20} />}
        title={tone === "success" ? "Payment completed" : tone === "warning" ? "Review required" : tone === "danger" ? "Action failed" : "Everything is ready"}
        description="Use result surfaces for strong end states, confirmations, and next actions."
        secondaryAction={{ label: "Dismiss", variant: "ghost" }}
        primaryAction={{ label: "View details" }}
      />
    </Stack>
  );
}

function RatingPlayground() {
  const [value, setValue] = React.useState(4);

  return (
    <Stack gap={12}>
      <Rating value={value} onChange={setValue} showValue />
    </Stack>
  );
}

function FullScreenLoaderPlayground() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="docs-inline-surface">
      <Button onClick={() => setOpen(true)}>Open full screen loader</Button>
      <FullScreenLoader
        open={open}
        title="Preparing workspace"
        description="We are loading the latest settings and activity."
      />
      {open ? (
        <Button variant="ghost" onClick={() => setOpen(false)}>Close loader</Button>
      ) : null}
    </div>
  );
}

function LoadingCompleteViewPlayground() {
  const [tone, setTone] = React.useState("success");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["success", "warning", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <LoadingCompleteView
        tone={tone}
        title={tone === "success" ? "Transfer complete" : tone === "warning" ? "Review required" : "Transfer failed"}
        description="Use this for loading completion states with immediate next actions."
        secondaryAction={{ label: "Dismiss", variant: "ghost" }}
        primaryAction={{ label: "View details", tone: tone === "danger" ? "danger" : "primary" }}
      />
    </Stack>
  );
}

function TextButtonPlayground() {
  const [tone, setTone] = React.useState("default");
  const [underline, setUnderline] = React.useState(false);
  const [iconPosition, setIconPosition] = React.useState("trailing");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "neutral", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        <Selector selected={!underline} onClick={() => setUnderline(false)}>
          plain
        </Selector>
        <Selector selected={underline} onClick={() => setUnderline(true)}>
          underline
        </Selector>
      </Inline>
      <Inline gap={8} wrap>
        {["leading", "trailing"].map((item) => (
          <Selector key={item} selected={iconPosition === item} onClick={() => setIconPosition(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={16} wrap align="center">
        <TextButton tone={tone} underline={underline}>
          Open details
        </TextButton>
        <TextButton
          tone={tone}
          underline={underline}
          icon="externalLink"
          iconPosition={iconPosition}
        >
          Review submission
        </TextButton>
      </Inline>
    </Stack>
  );
}

function ModalPlayground() {
  const [tone, setTone] = React.useState("default");
  const [size, setSize] = React.useState("md");
  const [open, setOpen] = React.useState(false);

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "success", "danger"].map((item) => (
          <Selector key={item} selected={tone === item} onClick={() => setTone(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <Inline gap={8} wrap>
        {["sm", "md", "lg"].map((item) => (
          <Selector key={item} selected={size === item} onClick={() => setSize(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <div className="docs-inline-surface">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          tone={tone}
          size={size}
          headline="Project workspace"
          subheadline="Review the configuration before continuing."
          tertiaryAction={{ label: "Learn more", icon: "externalLink", onClick: () => setOpen(false) }}
          secondaryAction={{ label: "Cancel", variant: "ghost", onClick: () => setOpen(false) }}
          primaryAction={{ label: "Confirm", color: tone === "danger" ? "danger" : "primary", onClick: () => setOpen(false) }}
        >
          <Text variant="body">Modal variants adjust density and emphasis without changing the core dialog pattern.</Text>
        </Modal>
      </div>
    </Stack>
  );
}

function DatePickerPlayground() {
  const [value, setValue] = React.useState("2026-04-01");
  const [state, setState] = React.useState("success");

  return (
    <Stack gap={12}>
      <Inline gap={8} wrap>
        {["default", "success", "warning", "error"].map((item) => (
          <Selector key={item} selected={state === item} onClick={() => setState(item)}>
            {item}
          </Selector>
        ))}
      </Inline>
      <DatePicker
        label="Launch date"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        validationState={state}
        validationMessage={`${state} state message`}
      />
    </Stack>
  );
}

function DatePickerCompactPlayground() {
  const [value, setValue] = React.useState("2026-04-01");

  return (
    <DatePickerCompact
      label="Billing date"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      sheetTitle="Choose billing date"
      confirmLabel="Save"
      cancelLabel="Close"
    />
  );
}

function SearchFieldResultPlayground() {
  const [value, setValue] = React.useState("workspace");

  return (
    <SearchFieldResult
      label="Search docs"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
      resultCount={4}
      validationState="success"
      validationMessage="Search ready."
    />
  );
}

function SearchFieldSuggestPlayground() {
  const [value, setValue] = React.useState("");

  return (
    <SearchFieldSuggest
      label="Search docs"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
      suggestions={["Button", "BottomSheet", "Badge"]}
      onSuggestionSelect={(next) => setValue(next)}
      hint="Try a suggested component name."
    />
  );
}

function TopPlayground() {
  return (
    <Top
      title="Workspace"
      subtitleTop="Operations"
      subtitleBottom="Live review queue"
      leading={<TopRightArrow aria-label="Back" />}
      badges={<TopSubtitleBadges items={[<Badge key="1" tone="accent">Live</Badge>, <Badge key="2">12 members</Badge>]} />}
      titleSelector={<TopTitleSelector>All workspaces</TopTitleSelector>}
      subtitleSelector={<TopSubtitleSelector>Status</TopSubtitleSelector>}
      trailing={<TopRightButton label="Manage" icon="settings" />}
      divider
      surface="muted"
    />
  );
}

function DoughnutChartPlayground() {
  const [value, setValue] = React.useState(72);

  return (
    <Stack gap={12}>
      <DoughnutChart value={value} label="Usage" description="Workspace capacity" />
      <Slider label="Usage" value={value} onChange={(next) => setValue(Number(next.target.value))} />
    </Stack>
  );
}

function WheelDatePickerPlayground() {
  const [value, setValue] = React.useState("2026-04-02");

  return (
    <WheelDatePicker
      label="Settlement date"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      validationState="success"
      validationMessage="Wheel selection ready."
    />
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

const componentExamples = {
  Surface: `import { Surface } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Surface tone="accent" radius="lg">Accent surface</Surface>;
}`,
  Card: `import { Card, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Card>
      <Text variant="body">Card content</Text>
    </Card>
  );
}`,
  Stack: `import { Stack, Chip } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Stack gap={8}>
      <Chip tone="neutral">One</Chip>
      <Chip tone="neutral">Two</Chip>
      <Chip tone="neutral">Three</Chip>
    </Stack>
  );
}`,
  Inline: `import { Inline, Chip } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={8} wrap>
      <Chip tone="accent">Alpha</Chip>
      <Chip tone="success">Beta</Chip>
    </Inline>
  );
}`,
  Divider: `import { Divider } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Divider />;
}`,
  SectionHeader: `import { SectionHeader, Chip } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <SectionHeader
      eyebrow="overview"
      title="Section title"
      description="Description copy for the section."
      actions={<Chip tone="accent">Live</Chip>}
    />
  );
}`,
  Border: `import { Border, Card, Stack, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Card>
      <Stack gap={12}>
        <Text variant="body">Primary content</Text>
        <Border />
        <Text variant="caption">Secondary content</Text>
      </Stack>
    </Card>
  );
}`,
  Spacing: `import { Card, Spacing, Stack, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Card>
      <Stack gap={0}>
        <Text variant="body">First block</Text>
        <Spacing size={20} />
        <Text variant="body">Second block</Text>
      </Stack>
    </Card>
  );
}`,
  FadeIn: `import { FadeIn, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <FadeIn delay={80}>
      <Text variant="body">Content fades in with a subtle upward motion.</Text>
    </FadeIn>
  );
}`,
  Avatar: `import { Avatar, Inline } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={12} align="center">
      <Avatar name="Ripple UI" size="sm" />
      <Avatar name="Design Team" tone="success" status="online" />
    </Inline>
  );
}`,
  Icon: `import { Icon, Inline, iconNames } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={12} wrap>
      {iconNames.slice(0, 6).map((name) => (
        <Icon key={name} name={name} size={20} />
      ))}
    </Inline>
  );
}`,
  Badge: `import { Badge, Inline } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={8}>
      <Badge tone="accent" dot>NEW</Badge>
      <Badge tone="success" variant="solid" count={3}>LIVE</Badge>
    </Inline>
  );
}`,
  Text: `import { Stack, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Stack gap={8}>
      <Text variant="hero">Hero</Text>
      <Text variant="title">Title</Text>
      <Text variant="body">Body copy</Text>
    </Stack>
  );
}`,
  TopBar: `import { Badge, Icon, IconButton, Selector, TopBar } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TopBar
      title="Workspace"
      subtitleTop="Operations"
      subtitleBottom="Review queue"
      align="left"
      leading={<IconButton aria-label="Back"><Icon name="chevronLeft" size={16} /></IconButton>}
      badges={<><Badge tone="accent">Live</Badge><Badge tone="neutral">12 members</Badge></>}
      subtitleSelector={<Selector type="arrow" size="sm">Status</Selector>}
      rightArrow
      surface="muted"
      divider
    />
  );
}`,
  Top: `import { Badge, Top, TopRightButton, TopSubtitleBadges, TopSubtitleSelector, TopTitleSelector } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Top
      title="Workspace"
      subtitleTop="Operations"
      subtitleBottom="Review queue"
      badges={<TopSubtitleBadges items={[<Badge key="1" tone="accent">Live</Badge>]} />}
      titleSelector={<TopTitleSelector>All</TopTitleSelector>}
      subtitleSelector={<TopSubtitleSelector>Status</TopSubtitleSelector>}
      trailing={<TopRightButton label="Manage" icon="settings" />}
      divider
    />
  );
}`,
  "Tabs / Tab": `import { Tab, Tabs } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Tabs aria-label="Views" stretch variant="underline">
      <Tab active>Overview</Tab>
      <Tab>Traffic</Tab>
      <Tab>Alerts</Tab>
    </Tabs>
  );
}`,
  SegmentedControl: `import { SegmentedControl } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <SegmentedControl
      value="week"
      onChange={() => {}}
      options={[
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
      ]}
    />
  );
}`,
  Selector: `import { Inline, Selector } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={16}>
      <Selector selected>Overview</Selector>
      <Selector type="arrow">Status</Selector>
      <Selector type="clear">Filter</Selector>
    </Inline>
  );
}`,
  IconButton: `import { Icon, IconButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return <IconButton tone="accent" aria-label="Share"><Icon name="externalLink" size={16} /></IconButton>;
}`,
  Tooltip: `import { Button, Tooltip } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Tooltip content="Helpful hint">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  );
}`,
  Button: `import { Button, Inline } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={12}>
      <Button>Primary</Button>
      <Button variant="weak">Weak</Button>
      <Button variant="ghost">Ghost</Button>
    </Inline>
  );
}`,
  Chip: `import { Chip, Inline } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={8}>
      <Chip tone="accent">Accent</Chip>
      <Chip tone="neutral">Neutral</Chip>
    </Inline>
  );
}`,
  TextButton: `import { TextButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return <TextButton icon="externalLink" iconPosition="trailing">See details</TextButton>;
}`,
  Input: `import { Input } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Input
      label="Workspace name"
      placeholder="Enter workspace name"
      prefix="https://"
      suffix=".ripple"
      validationState="success"
      validationMessage="This name is available."
      clearable
      actionLabel="Check"
    />
  );
}`,
  TextArea: `import { TextArea } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TextArea
      label="Release notes"
      placeholder="Describe what changed in this build."
      validationState="warning"
      validationMessage="Keep this under 500 characters."
    />
  );
}`,
  SearchBar: `import { SearchBar } from "@sh981013s/ripple-ui";

export default function Example() {
  return <SearchBar label="Search" placeholder="Search components" hint="Search, then refine with filters." />;
}`,
  SearchField: `import { SearchField } from "@sh981013s/ripple-ui";

export default function Example() {
  return <SearchField label="Search docs" defaultValue="button" validationState="success" validationMessage="1 exact match." />;
}`,
  "SearchField.Result": `import { SearchFieldResult } from "@sh981013s/ripple-ui";

export default function Example() {
  return <SearchFieldResult label="Search docs" defaultValue="workspace" resultCount={4} />;
}`,
  "SearchField.Suggest": `import { SearchFieldSuggest } from "@sh981013s/ripple-ui";

export default function Example() {
  return <SearchFieldSuggest label="Search docs" suggestions={["Button", "BottomSheet", "Badge"]} />;
}`,
  TextField: `import { TextField } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TextField
      label="Workspace name"
      placeholder="Enter workspace name"
      clearable
      actionLabel="Check"
      validationState="success"
      validationMessage="This name is available."
    />
  );
}`,
  "TextField.Clearable": `import { TextFieldClearable } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TextFieldClearable
      label="Workspace name"
      defaultValue="Ripple workspace"
      validationState="success"
      validationMessage="Use the clear button to reset this field."
    />
  );
}`,
  "TextField.Password": `import { TextFieldPassword } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TextFieldPassword
      label="API secret"
      defaultValue="ripple-secret"
      validationState="warning"
      validationMessage="Keep this hidden outside secure environments."
    />
  );
}`,
  "TextField.Button": `import { TextFieldButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <TextFieldButton
      label="Workspace slug"
      placeholder="team-workspace"
      actionLabel="Check"
      validationMessage="Run a quick availability check."
    />
  );
}`,
  Select: `import { Select } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Select label="Region" placeholder="Choose region" searchable>
      <option value="kr">Korea</option>
      <option value="jp">Japan</option>
      <option value="us">United States</option>
    </Select>
  );
}`,
  "Select.Quiet": `import { SelectQuiet } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <SelectQuiet label="Stage" placeholder="Choose stage">
      <option value="draft">Draft</option>
      <option value="review">Review</option>
      <option value="published">Published</option>
    </SelectQuiet>
  );
}`,
  "Select.Searchable": `import { SelectSearchable } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <SelectSearchable label="Workspace" header="Recent workspaces" searchPlaceholder="Search workspaces">
      <option value="ops">Operations</option>
      <option value="payments">Payments</option>
      <option value="growth">Growth</option>
    </SelectSearchable>
  );
}`,
  DatePicker: `import { DatePicker } from "@sh981013s/ripple-ui";

export default function Example() {
  return <DatePicker label="Launch date" validationState="success" validationMessage="Date confirmed." />;
}`,
  "DatePicker.Compact": `import { DatePickerCompact } from "@sh981013s/ripple-ui";

export default function Example() {
  return <DatePickerCompact label="Billing date" confirmLabel="Save" cancelLabel="Close" />;
}`,
  Switch: `import { Switch } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Switch checked label="Realtime alerts" description="Send status changes to connected channels." />;
}`,
  Checkbox: `import { Checkbox } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Checkbox checked label="Email notifications" description="Receive billing and release updates." />;
}`,
  Radio: `import { Radio, Stack } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Stack gap={12}>
      <Radio checked name="plan" label="Starter plan" />
      <Radio name="plan" label="Pro plan" />
    </Stack>
  );
}`,
  Loader: `import { Inline, Loader } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Inline gap={14} align="center">
      <Loader size="sm" tone="accent" />
      <Loader label="Loading data" tone="success" />
    </Inline>
  );
}`,
  Skeleton: `import { Skeleton, Stack } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Stack gap={10}>
      <Skeleton width="48%" height={18} />
      <Skeleton width="100%" height={14} />
    </Stack>
  );
}`,
  Toast: `import { Toast } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Toast tone="success" icon="check" title="Deployment completed" badge="Live" description="The production build is now available." dismissible />;
}`,
  Snackbar: `import { Button, Snackbar } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Snackbar open align="left" icon="check" message="Draft saved successfully." dismissible action={<Button variant="ghost">Dismiss</Button>} />;
}`,
  Result: `import { Icon, Result } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Result
      tone="success"
      icon={<Icon name="check" size={20} />}
      title="Payment completed"
      description="Funds were transferred successfully."
      secondaryAction={{ label: "Close", variant: "ghost" }}
      primaryAction={{ label: "View details" }}
    />
  );
}`,
  ResultButton: `import { ResultButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ResultButton>View details</ResultButton>;
}`,
  Rating: `import { Rating } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Rating value={4} showValue />;
}`,
  FullScreenLoader: `import { FullScreenLoader } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <FullScreenLoader
      open
      title="Preparing workspace"
      description="We are loading the latest settings and activity."
    />
  );
}`,
  LoadingCompleteView: `import { LoadingCompleteView } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <LoadingCompleteView
      tone="success"
      title="Transfer complete"
      description="Funds were moved successfully."
      secondaryAction={{ label: "Dismiss", variant: "ghost" }}
      primaryAction={{ label: "View details" }}
    />
  );
}`,
  "NoticeBanner / Banner": `import { Banner, Button } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Banner tone="accent" title="Submission assets updated" description="The latest metadata set is ready for review." action={<Button variant="ghost">Open</Button>} />;
}`,
  ProgressBar: `import { ProgressBar } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ProgressBar value={72} />;
}`,
  EmptyState: `import { Button, EmptyState } from "@sh981013s/ripple-ui";

export default function Example() {
  return <EmptyState icon="◌" title="No connected channels" description="Connect at least one channel to receive alerts." action={<Button>Connect</Button>} />;
}`,
  AlertDialog: `import { AlertDialog } from "@sh981013s/ripple-ui";

export default function Example() {
  return <AlertDialog open title="Session expired" description="Please sign in again to continue." />;
}`,
  ConfirmDialog: `import { ConfirmDialog } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ConfirmDialog open title="Delete workspace?" description="This action cannot be undone." tone="danger" />;
}`,
  Dialog: `import { Button, Dialog, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Dialog open title="Review dialog" description="Dialogs support headline, description, and footer." footer={<Button display="block">Close</Button>}>
      <Text variant="body">Use this surface to inspect spacing and CTA density.</Text>
    </Dialog>
  );
}`,
  Modal: `import { Button, Modal, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Modal
      open
      tone="success"
      headline="Project workspace"
      subheadline="Review the current status before continuing."
      tertiaryAction={{ label: "Learn more", icon: "externalLink" }}
      secondaryAction={{ label: "Cancel", variant: "ghost" }}
      primaryAction={{ label: "Continue" }}
    >
      <Text variant="body">Modal is a product-flavored alias for centered dialog usage.</Text>
    </Modal>
  );
}`,
  BottomSheet: `import { BottomSheet, Button, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <BottomSheet
      open
      header="Bottom sheet"
      description="Preview the anchored mobile overlay."
      tertiaryAction={{ label: "Preview", icon: "eye" }}
      secondaryAction={{ label: "Cancel", variant: "ghost" }}
      primaryAction={{ label: "Done" }}
    >
      <Text variant="body">Bottom sheet previews are interactive and dismissible.</Text>
    </BottomSheet>
  );
}`,
  "Accordion / AccordionItem": `import { Accordion, AccordionItem, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Accordion>
      <AccordionItem title="What is Ripple UI?" description="Short answer for product teams." defaultOpen>
        <Text variant="body">A self-authored design library focused on calm, structured product surfaces.</Text>
      </AccordionItem>
    </Accordion>
  );
}`,
  Stepper: `import { Stepper } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Stepper
      current={1}
      steps={[
        { label: "Draft", description: "Basic information" },
        { label: "Review", description: "Team check" },
        { label: "Publish", description: "Go live" },
      ]}
    />
  );
}`,
  ProgressStep: `import { ProgressStep } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ProgressStep index={2} label="Review" description="Team check" status="current" />;
}`,
  ProgressStepper: `import { ProgressStepper } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <ProgressStepper
      current={1}
      steps={[
        { label: "Draft", description: "Basic information" },
        { label: "Review", description: "Team check" },
        { label: "Publish", description: "Go live" },
      ]}
    />
  );
}`,
  Slider: `import { Slider } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Slider label="Threshold" value={64} onChange={() => {}} />;
}`,
  BarChart: `import { BarChart } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <BarChart
      data={[
        { label: "Mon", value: 42, tone: "accent" },
        { label: "Tue", value: 58, tone: "accent" },
        { label: "Wed", value: 64, tone: "success" },
      ]}
    />
  );
}`,
  "List / ListHeader / ListFooter": `import { List, ListFooter, ListHeader, ListRow } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <List>
      <ListHeader
        eyebrow="Workspace"
        title="Team access"
        description="Manage the primary review surfaces."
        rightText="Updated now"
        rightArrow
      />
      <ListRow title="Design" description="3 active reviewers" />
      <ListFooter>Updated 2 minutes ago</ListFooter>
    </List>
  );
}`,
  InfoRow: `import { Card, InfoRow, Stack } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Card>
      <Stack gap={4}>
        <InfoRow label="Owner" value="Ripple team" />
        <InfoRow label="Status" value="Live" />
      </Stack>
    </Card>
  );
}`,
  TableRow: `import { TableRow } from "@sh981013s/ripple-ui";

export default function Example() {
  return <TableRow label="Estimated payout" value="$12,480" description="Updated 2 minutes ago" />;
}`,
  ListRow: `import { Badge, ListRow } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ListRow eyebrow="Workspace" title="Marketing Ops" description="12 members" meta="Updated 2m ago" icon={<Badge tone="accent">M</Badge>} action={<Badge tone="accent">Live</Badge>} rightArrow interactive />;
}`,
  Table: `import { Table } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Table
      columns={[
        { key: "name", title: "Name" },
        { key: "users", title: "Users", align: "right" },
      ]}
      rows={[
        { name: "Payments", users: 12 },
        { name: "Growth", users: 4 },
      ]}
    />
  );
}`,
  Pagination: `import { Pagination } from "@sh981013s/ripple-ui";

export default function Example() {
  return <Pagination page={4} totalPages={9} onPageChange={() => {}} />;
}`,
  Popover: `import { Button, Popover, Stack, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Popover open trigger={<Button variant="weak">Open popover</Button>}>
      <Stack gap={8}>
        <Text variant="label">Popover title</Text>
        <Text variant="caption">Use popovers for lightweight contextual surfaces.</Text>
      </Stack>
    </Popover>
  );
}`,
  Menu: `import { Button, Menu } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Menu
      open
      width={280}
      header="Workspace actions"
      footer="Choose one action to continue."
      trigger={<Button variant="weak">Open menu</Button>}
      items={[
        { type: "header", label: "Workspace actions" },
        { label: "Rename workspace", icon: "edit", description: "Update title and slug" },
        { label: "Pinned", icon: "bookmark", checked: true, shortcut: "⌘P" },
        { type: "divider" },
        { label: "Delete", icon: "alert", description: "Remove this workspace permanently", tone: "danger" },
      ]}
    />
  );
}`,
  BottomInfo: `import { BottomInfo, Button, Icon } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <BottomInfo
      icon={<Icon name="wallet" size={18} />}
      title="Billing account connected"
      description="Payouts will be sent automatically every week."
      action={<Button size="small">Review</Button>}
    />
  );
}`,
  AccessoryButton: `import { AccessoryButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return <AccessoryButton icon="card" title="Payment method" description="Visa ending in 4242" />;
}`,
  GridList: `import { Card, GridList, Text } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <GridList columns={2}>
      <Card><Text variant="body">Revenue</Text></Card>
      <Card><Text variant="body">Payouts</Text></Card>
      <Card><Text variant="body">Alerts</Text></Card>
      <Card><Text variant="body">Members</Text></Card>
    </GridList>
  );
}`,
  WheelDatePicker: `import { WheelDatePicker } from "@sh981013s/ripple-ui";

export default function Example() {
  return <WheelDatePicker label="Settlement date" validationState="success" validationMessage="Date confirmed." />;
}`,
  DoughnutChart: `import { DoughnutChart } from "@sh981013s/ripple-ui";

export default function Example() {
  return <DoughnutChart value={72} label="Usage" description="Workspace capacity" />;
}`,
  "ListHeader.RightText": `import { ListHeaderRightText } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ListHeaderRightText>Updated now</ListHeaderRightText>;
}`,
  "ListHeader.RightArrow": `import { ListHeaderRightArrow } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ListHeaderRightArrow />;
}`,
  "ListHeader.TitleSelector": `import { ListHeaderTitleSelector } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ListHeaderTitleSelector>Workspace</ListHeaderTitleSelector>;
}`,
  "ListHeader.TitleTextButton": `import { ListHeaderTitleTextButton } from "@sh981013s/ripple-ui";

export default function Example() {
  return <ListHeaderTitleTextButton>See all</ListHeaderTitleTextButton>;
}`,
  "ListRow.Icon / Image": `import { ListRow, ListRowIcon, ListRowImageContainer, ListRowImage } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <>
      <ListRow title="Workspace" description="Icon variant" icon={<ListRowIcon name="folder" />} />
      <ListRow title="Profile" description="Image variant" leading={<ListRowImageContainer><ListRowImage src="https://placehold.co/72x72" alt="" /></ListRowImageContainer>} />
    </>
  );
}`,
  "Menu Item Variants": `import { Menu, MenuDropdownCheckItem, MenuDropdownItem, MenuHeader } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Menu
      open
      items={[
        MenuHeader({ label: "Workspace actions" }),
        MenuDropdownItem({ label: "Rename workspace", icon: "edit" }),
        MenuDropdownCheckItem({ label: "Pinned", icon: "bookmark", checked: true }),
      ]}
    />
  );
}`,
  Dropdown: `import { Dropdown } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <Dropdown
      label="Workflow stage"
      value="review"
      items={[
        { label: "Draft", value: "draft" },
        { label: "Review", value: "review" },
        { label: "Published", value: "published" },
      ]}
    />
  );
}`,
  CommandPalette: `import { CommandPalette } from "@sh981013s/ripple-ui";

export default function Example() {
  return (
    <CommandPalette
      open
      commands={[
        { title: "Open payments dashboard", description: "Jump to reporting", shortcut: "⌘1" },
        { title: "Invite member", description: "Share workspace access", shortcut: "⌘I" },
      ]}
    />
  );
}`,
};

function getExampleCode(component) {
  return (
    componentExamples[component.name] ??
    `import { ${component.name.split("/")[0].trim()} } from "@sh981013s/ripple-ui";

export default function Example() {
  return <${component.name.split("/")[0].trim()} />;
}`
  );
}

function CodeExample({ component }) {
  const code = getExampleCode(component);
  const { copied, copy } = useCopyFeedback();

  return (
    <div className="docs-code-editor">
      <div className="docs-code-header">
        <div className="docs-code-eyebrow">
          <span className="docs-code-language">React</span>
        </div>
        <div className="docs-code-header-actions">
          <span className="docs-code-filename">Example.jsx</span>
          <button type="button" className="docs-code-copy" onClick={() => copy(code)}>
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
      </div>
      <pre className="docs-code-body">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Playground({ component }) {
  const map = {
    Button: <ButtonPlayground />,
    Badge: <BadgePlayground />,
    DoughnutChart: <DoughnutChartPlayground />,
    Loader: <LoaderPlayground />,
    Toast: <ToastPlayground />,
    Rating: <RatingPlayground />,
    FullScreenLoader: <FullScreenLoaderPlayground />,
    LoadingCompleteView: <LoadingCompleteViewPlayground />,
    Icon: <IconPlayground />,
    TopBar: <TopBarPlayground />,
    Top: <TopPlayground />,
    Input: <InputPlayground />,
    TextField: <TextFieldPlayground />,
    "TextField.Clearable": <TextFieldClearablePlayground />,
    "TextField.Password": <TextFieldPasswordPlayground />,
    "TextField.Button": <TextFieldButtonPlayground />,
    Select: <SelectPlayground />,
    "Select.Quiet": <SelectQuietPlayground />,
    "Select.Searchable": <SelectSearchablePlayground />,
    "Tabs / Tab": <TabsPlayground />,
    SegmentedControl: <SegmentedPlayground />,
    Snackbar: <SnackbarPlayground />,
    Result: <ResultPlayground />,
    ResultButton: (
      <div className="docs-inline-surface">
        <ResultButton>View details</ResultButton>
      </div>
    ),
    DatePicker: <DatePickerPlayground />,
    "DatePicker.Compact": <DatePickerCompactPlayground />,
    WheelDatePicker: <WheelDatePickerPlayground />,
    TextButton: <TextButtonPlayground />,
    Modal: <ModalPlayground />,
    "List / ListHeader / ListFooter": <ListHeaderPlayground />,
    ListRow: <ListRowPlayground />,
    Menu: <InteractiveMenuPreview />,
    Slider: <SliderPlayground />,
    BarChart: <BarChartPlayground />,
    ProgressStepper: <ProgressStepperPlayground />,
    ProgressStep: (
      <div className="docs-inline-surface">
        <ProgressStep index={2} label="Review" description="Team check" status="current" />
      </div>
    ),
    "SearchField.Result": <SearchFieldResultPlayground />,
    "SearchField.Suggest": <SearchFieldSuggestPlayground />,
  };

  const content = map[component.name];
  if (!content) return null;

  return (
    <Card className="docs-playground-card">
      <Stack gap={14}>
        <SectionHeader
          eyebrow="playground"
          title="Live playground"
          description="Adjust a few high-signal props without leaving the component page."
        />
        {content}
      </Stack>
    </Card>
  );
}

export function ComponentDocCard({ component, footer, showCode = true, showPlayground = true }) {
  return (
    <Card className="docs-card">
      <Stack gap={16}>
        <SectionHeader
          eyebrow={component.eyebrow}
          title={component.name}
          description={component.description}
        />
        <div className="docs-preview">{component.preview()}</div>
        {showPlayground ? <Playground component={component} /> : null}
        {showCode ? <CodeExample component={component} /> : null}
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
        name: "Border",
        eyebrow: "layout",
        description: "Structural border primitive for separating or framing content.",
        props: [
          { name: "orientation", type: `"horizontal" | "vertical"`, defaultValue: `"horizontal"`, description: "Border direction." },
          { name: "inset", type: "boolean", defaultValue: "false", description: "Inset horizontal border within the parent width." },
          { name: "strong", type: "boolean", defaultValue: "false", description: "Uses a stronger neutral stroke." },
        ],
        preview: () => <Border />,
      },
      {
        name: "Spacing",
        eyebrow: "layout",
        description: "Vertical spacing primitive for layout recipes and composed surfaces.",
        props: [
          { name: "size", type: "number", defaultValue: "16", description: "Rendered vertical space in pixels." },
        ],
        preview: () => (
          <Card>
            <Stack gap={0}>
              <Text variant="body">First block</Text>
              <Spacing size={20} />
              <Text variant="body">Second block</Text>
            </Stack>
          </Card>
        ),
      },
      {
        name: "FadeIn",
        eyebrow: "motion",
        description: "Small entrance-motion wrapper for previews, sections, and callouts.",
        props: [
          { name: "delay", type: "number", defaultValue: "0", description: "Animation delay in milliseconds." },
          { name: "as", type: "string | component", defaultValue: `"div"`, description: "Rendered wrapper element." },
        ],
        preview: () => (
          <FadeIn delay={80}>
            <Card><Text variant="body">Subtle entrance motion for composed content.</Text></Card>
          </FadeIn>
        ),
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
          { name: "dot", type: "boolean", defaultValue: "false", description: "Show a leading status dot." },
          { name: "count", type: "number", defaultValue: "-", description: "Optional inline count token." },
        ],
        preview: () => (
          <Inline gap={8} wrap>
            <Badge>12</Badge>
            <Badge tone="accent" dot>NEW</Badge>
            <Badge tone="success" variant="solid" count={3}>LIVE</Badge>
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
          { name: "trailing / right / rightButton", type: "ReactNode", defaultValue: "-", description: "Right accessory or compact CTA." },
          { name: "badges / titleSelector / subtitleSelector", type: "ReactNode", defaultValue: "-", description: "Structured supporting affordances." },
          { name: "rightArrow", type: "boolean", defaultValue: "false", description: "Show navigation arrow affordance." },
          { name: "surface", type: `"default" | "muted" | "accent"`, defaultValue: `"default"`, description: "Background surface tone." },
          { name: "divider / sticky", type: "boolean", defaultValue: "false / false", description: "Optional page chrome behaviors." },
          { name: "align", type: "\"center\" | \"left\"", defaultValue: "\"center\"", description: "Copy alignment." },
          { name: "rightVerticalAlign", type: "\"top\" | \"center\" | \"bottom\"", defaultValue: "\"center\"", description: "Trailing content alignment." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Bar height scale." },
          { name: "variant", type: `"floating" | "flat"`, defaultValue: `"floating"`, description: "Surface treatment." },
        ],
        preview: () => <TopBarPlayground />,
      },
      {
        name: "Top",
        eyebrow: "navigation",
        description: "Product-style top layout built from the shared top bar surface.",
        props: [
          { name: "title / subtitleTop / subtitleBottom", type: "ReactNode", defaultValue: "-", description: "Core top copy." },
          { name: "badges / titleSelector / subtitleSelector", type: "ReactNode", defaultValue: "-", description: "Structured support affordances." },
          { name: "trailing", type: "ReactNode", defaultValue: "-", description: "Right-side CTA or compact action." },
        ],
        preview: () => <TopPlayground />,
      },
      {
        name: "ListHeader.RightText",
        eyebrow: "navigation",
        description: "Muted right-aligned caption for list section summaries.",
        props: [{ name: "children", type: "ReactNode", defaultValue: "-", description: "Displayed caption text." }],
        preview: () => <ListHeaderRightText>Updated now</ListHeaderRightText>,
      },
      {
        name: "ListHeader.RightArrow",
        eyebrow: "navigation",
        description: "Directional affordance for list section titles.",
        props: [],
        preview: () => <ListHeaderRightArrow />,
      },
      {
        name: "ListHeader.TitleSelector",
        eyebrow: "navigation",
        description: "Selector affordance sized for list header titles.",
        props: [{ name: "children", type: "ReactNode", defaultValue: "-", description: "Selector label." }],
        preview: () => <ListHeaderTitleSelector>Workspace</ListHeaderTitleSelector>,
      },
      {
        name: "ListHeader.TitleTextButton",
        eyebrow: "navigation",
        description: "Compact text action used beside list header titles.",
        props: [{ name: "children", type: "ReactNode", defaultValue: "-", description: "Button label." }],
        preview: () => <ListHeaderTitleTextButton>See all</ListHeaderTitleTextButton>,
      },
      {
        name: "Menu Item Variants",
        eyebrow: "navigation",
        description: "Helper creators for menu headers, standard items, and check items.",
        props: [
          { name: "MenuHeader", type: "({ label }) => item", defaultValue: "-", description: "Creates a structural header row." },
          { name: "MenuDropdownItem", type: "({ label, icon, ... }) => item", defaultValue: "-", description: "Creates a standard action row." },
          { name: "MenuDropdownCheckItem", type: "({ label, checked, ... }) => item", defaultValue: "-", description: "Creates a checkbox-style menu row." },
        ],
        preview: () => <InteractiveMenuPreview />,
      },
      {
        name: "Tabs / Tab",
        eyebrow: "navigation",
        description: "Segmented navigation for local view switching.",
        props: [
          { name: "active", type: "boolean", defaultValue: "false", description: "Marks an individual tab active." },
          { name: "aria-label", type: "string", defaultValue: "-", description: "Accessibility label for the tablist." },
          { name: "stretch", type: "boolean", defaultValue: "false", description: "Stretch items to full available width." },
          { name: "variant", type: `"pill" | "underline"`, defaultValue: `"pill"`, description: "Tabs surface style." },
          { name: "size", type: `"sm" | "md"`, defaultValue: `"md"`, description: "Tabs density scale." },
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
            <IconButton size="sm" aria-label="search"><Icon name="search" size={16} /></IconButton>
            <IconButton tone="subtle" aria-label="bookmark"><Icon name="bookmark" size={16} /></IconButton>
            <IconButton tone="accent" size="lg" aria-label="share"><Icon name="externalLink" size={16} /></IconButton>
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
      {
        name: "Popover",
        eyebrow: "navigation",
        description: "Anchored floating surface for lightweight contextual content.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "trigger", type: "ReactNode", defaultValue: "-", description: "Reference trigger element." },
          { name: "placement / align", type: "string", defaultValue: `"bottom" / "start"`, description: "Anchoring position." },
        ],
        preview: () => <InteractivePopoverPreview />,
      },
      {
        name: "Menu",
        eyebrow: "navigation",
        description: "Action list surface anchored to a trigger button.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "trigger", type: "ReactNode", defaultValue: "-", description: "Trigger element." },
          { name: "items", type: "Array<{ type?, label, icon?, description?, shortcut?, checked?, tone?, onSelect? }>", defaultValue: "[]", description: "Menu actions and structural rows." },
          { name: "header / footer", type: "ReactNode", defaultValue: "-", description: "Optional supporting blocks around the items list." },
          { name: "width", type: "number | string", defaultValue: "-", description: "Custom panel width." },
        ],
        preview: () => <InteractiveMenuPreview />,
      },
      {
        name: "Dropdown",
        eyebrow: "navigation",
        description: "Button-driven selection list built on the shared popover surface.",
        props: [
          { name: "label", type: "string", defaultValue: "-", description: "Group heading for the list." },
          { name: "items", type: "Array<{ label, value }>", defaultValue: "[]", description: "Selectable options." },
          { name: "value", type: "string", defaultValue: "-", description: "Current selected value." },
        ],
        preview: () => <InteractiveDropdownPreview />,
      },
    ],
  },
  {
    id: "icons",
    label: "Icons",
    components: [
      {
        name: "Icon",
        eyebrow: "icons",
        description: "System icon set for navigation, product actions, and feedback states.",
        props: [
          { name: "name", type: "string", defaultValue: "-", description: "Icon glyph name." },
          { name: "size", type: "number", defaultValue: "20", description: "Rendered icon size." },
          { name: "className", type: "string", defaultValue: "-", description: "Additional styling hook." },
        ],
        preview: () => <InteractiveIconsPreview />,
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
      {
        name: "TextButton",
        eyebrow: "action",
        description: "Lightweight inline CTA for secondary actions and supporting links.",
        props: [
          { name: "tone", type: `"default" | "neutral" | "danger"`, defaultValue: `"default"`, description: "Text emphasis color." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Text button size." },
          { name: "icon / iconPosition", type: "string | ReactNode", defaultValue: "-", description: "Preferred icon pattern for inline actions." },
          { name: "leading / trailing", type: "ReactNode", defaultValue: "-", description: "Manual accessory override for custom affordances." },
          { name: "underline", type: "boolean", defaultValue: "false", description: "Underline emphasis for link-like actions." },
        ],
        preview: () => (
          <Inline gap={12} wrap align="center">
            <TextButton>Default</TextButton>
            <TextButton tone="neutral" trailing="→">Neutral</TextButton>
            <TextButton tone="danger" underline>Delete</TextButton>
          </Inline>
        ),
      },
      {
        name: "AccessoryButton",
        eyebrow: "action",
        description: "Dense accessory-style action row for settings and payment surfaces.",
        props: [
          { name: "icon", type: "string | ReactNode", defaultValue: "-", description: "Leading icon or custom accessory." },
          { name: "title / description", type: "ReactNode", defaultValue: "-", description: "Primary and secondary copy." },
          { name: "trailing", type: "ReactNode", defaultValue: "-", description: "Optional right-side accessory." },
        ],
        preview: () => <AccessoryButton icon="card" title="Payment method" description="Visa ending in 4242" />,
      },
      {
        name: "BottomInfo",
        eyebrow: "action",
        description: "Bottom-attached informational CTA strip for flows and paywalls.",
        props: [
          { name: "icon", type: "ReactNode", defaultValue: "-", description: "Leading accent accessory." },
          { name: "title / description", type: "ReactNode", defaultValue: "-", description: "Copy shown on the left." },
          { name: "action", type: "ReactNode", defaultValue: "-", description: "Inline CTA surface." },
        ],
        preview: () => (
          <BottomInfo
            icon={<Icon name="wallet" size={18} />}
            title="Billing account connected"
            description="Payouts will be sent automatically every week."
            action={<Button size="small">Review</Button>}
          />
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
          { name: "prefix / suffix", type: "ReactNode", defaultValue: "-", description: "Textual field accessories for domains, units, and structured values." },
          { name: "leading / trailing", type: "ReactNode | icon name", defaultValue: "-", description: "Icon-first field accessories." },
          { name: "before / after", type: "ReactNode", defaultValue: "-", description: "Full manual override for custom field surfaces." },
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
        name: "SearchField.Result",
        eyebrow: "form",
        description: "Search field variant that surfaces result count below the field.",
        props: [
          { name: "resultCount", type: "number", defaultValue: "0", description: "Count summary shown under the field." },
          { name: "clearable", type: "boolean", defaultValue: "true", description: "Show clear control." },
        ],
        preview: () => <SearchFieldResultPlayground />,
      },
      {
        name: "SearchField.Suggest",
        eyebrow: "form",
        description: "Search field variant that shows lightweight suggestion chips.",
        props: [
          { name: "suggestions", type: "string[]", defaultValue: "[]", description: "Suggested search terms." },
          { name: "onSuggestionSelect", type: "(value) => void", defaultValue: "-", description: "Suggestion click handler." },
        ],
        preview: () => <SearchFieldSuggestPlayground />,
      },
      {
        name: "TextField",
        eyebrow: "form",
        description: "Product-flavored text field alias built on the shared input system.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "clearable / actionLabel", type: "boolean | string", defaultValue: "-", description: "Built-in inline controls." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => (
          <TextField
            label="Workspace name"
            placeholder="Enter workspace name"
            clearable
            actionLabel="Check"
            validationState="success"
            validationMessage="This name is available."
          />
        ),
      },
      {
        name: "TextField.Clearable",
        eyebrow: "form",
        description: "Text field variant with a built-in clear affordance.",
        props: [
          { name: "value / onChange", type: "string + handler", defaultValue: "-", description: "Controlled value handling." },
          { name: "onClear", type: "() => void", defaultValue: "-", description: "Clear interaction callback." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <TextFieldClearablePlayground />,
      },
      {
        name: "TextField.Password",
        eyebrow: "form",
        description: "Password field variant with built-in reveal and hide control.",
        props: [
          { name: "value / onChange", type: "string + handler", defaultValue: "-", description: "Controlled value handling." },
          { name: "revealed / onToggleReveal", type: "boolean + handler", defaultValue: "-", description: "Optional controlled reveal state." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <TextFieldPasswordPlayground />,
      },
      {
        name: "TextField.Button",
        eyebrow: "form",
        description: "Field variant with an inline action button attached to the right side.",
        props: [
          { name: "actionLabel", type: "string", defaultValue: "\"Action\"", description: "Inline action label." },
          { name: "onActionClick", type: "() => void", defaultValue: "-", description: "Action click handler." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <TextFieldButtonPlayground />,
      },
      {
        name: "Select",
        eyebrow: "form",
        description: "Custom popover select styled like the shared field system.",
        props: [
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "searchable", type: "boolean", defaultValue: "true", description: "Show typeahead search in the dropdown." },
          { name: "placeholder", type: "string", defaultValue: "-", description: "Optional placeholder option text." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <InteractiveSelectPreview />,
      },
      {
        name: "Select.Quiet",
        eyebrow: "form",
        description: "Quiet select variant for tighter inline filter and settings rows.",
        props: [
          { name: "variant", type: "\"quiet\"", defaultValue: "\"quiet\"", description: "Minimal field chrome." },
          { name: "placeholder", type: "string", defaultValue: "-", description: "Optional placeholder option text." },
        ],
        preview: () => <SelectQuietPlayground />,
      },
      {
        name: "Select.Searchable",
        eyebrow: "form",
        description: "Searchable select variant with a header and explicit empty/search copy.",
        props: [
          { name: "header", type: "ReactNode", defaultValue: "-", description: "Popover heading." },
          { name: "searchPlaceholder", type: "string", defaultValue: "\"Search options\"", description: "Input placeholder inside the popover." },
          { name: "emptyMessage", type: "string", defaultValue: "\"No matching options.\"", description: "Empty state copy." },
        ],
        preview: () => <SelectSearchablePlayground />,
      },
      {
        name: "DatePicker",
        eyebrow: "form",
        description: "Bottom-sheet date picker with wheel-style month, day, and year selection.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Field size." },
          { name: "variant", type: `"default" | "filled" | "quiet"`, defaultValue: `"default"`, description: "Visual treatment." },
          { name: "minYear / maxYear", type: "number", defaultValue: "2000 / 2035", description: "Year range for the wheel selector." },
          { name: "validationState / validationMessage", type: "state + message", defaultValue: "-", description: "Semantic validation feedback." },
        ],
        preview: () => <InteractiveDatePickerPreview />,
      },
      {
        name: "DatePicker.Compact",
        eyebrow: "form",
        description: "Compact date picker variant for denser forms and settings surfaces.",
        props: [
          { name: "compact", type: "boolean", defaultValue: "true", description: "Uses a tighter wheel layout." },
          { name: "sheetTitle / confirmLabel / cancelLabel", type: "string", defaultValue: "-", description: "Structured sheet copy." },
        ],
        preview: () => <DatePickerCompactPlayground />,
      },
      {
        name: "WheelDatePicker",
        eyebrow: "form",
        description: "Dedicated wheel-style date picker surface with sheet-first behavior.",
        props: [
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Field label." },
          { name: "sheetTitle / sheetEyebrow", type: "string", defaultValue: "-", description: "Sheet copy." },
          { name: "value / onChange", type: "string + handler", defaultValue: "-", description: "Controlled value handling." },
        ],
        preview: () => <WheelDatePickerPlayground />,
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
          { name: "tone", type: `"accent" | "success" | "warning" | "danger"`, defaultValue: `"accent"`, description: "Semantic spinner tone." },
          { name: "centered", type: "boolean", defaultValue: "false", description: "Center the loader within its container." },
          { name: "overlay", type: "boolean", defaultValue: "false", description: "Render inside a muted loading surface." },
        ],
        preview: () => (
          <Inline gap={14} wrap align="center">
            <Loader size="sm" tone="accent" />
            <Loader label="Loading data" tone="success" />
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
          { name: "icon", type: "ReactNode | string", defaultValue: "-", description: "Optional leading icon." },
          { name: "dismissible", type: "boolean", defaultValue: "false", description: "Show a close control." },
          { name: "action", type: "ReactNode", defaultValue: "-", description: "Optional action area." },
        ],
        preview: () => <Toast title="Deployment completed" badge="Live" icon="check" description="The production build is now available." />,
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
          { name: "icon", type: "ReactNode | string", defaultValue: "-", description: "Optional leading icon." },
          { name: "dismissible", type: "boolean", defaultValue: "false", description: "Show a dismiss control." },
        ],
        preview: () => <InteractiveSnackbarPreview />,
      },
      {
        name: "Result",
        eyebrow: "feedback",
        description: "Structured result state for completed flows and strong confirmations.",
        props: [
          { name: "tone", type: `"default" | "success" | "warning" | "danger"`, defaultValue: `"default"`, description: "Semantic result tone." },
          { name: "title", type: "ReactNode", defaultValue: "-", description: "Primary result heading." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Supporting detail copy." },
          { name: "icon", type: "ReactNode", defaultValue: "-", description: "Top leading icon or asset." },
          { name: "primaryAction", type: "{ label, onClick, variant?, color? }", defaultValue: "-", description: "Primary call to action." },
          { name: "secondaryAction", type: "{ label, onClick, variant?, color? }", defaultValue: "-", description: "Secondary call to action." },
        ],
        preview: () => (
          <Result
            tone="success"
            icon={<Icon name="check" size={20} />}
            title="Payment completed"
            description="Funds were transferred successfully."
            secondaryAction={{ label: "Close", variant: "ghost" }}
            primaryAction={{ label: "View details" }}
          />
        ),
      },
      {
        name: "ResultButton",
        eyebrow: "feedback",
        description: "CTA button tuned for result and completion states.",
        props: [
          { name: "tone", type: `"primary" | "neutral" | "danger"`, defaultValue: `"primary"`, description: "Semantic button tone." },
          { name: "variant", type: `"primary" | "weak" | "ghost"`, defaultValue: `"primary"`, description: "Button treatment." },
          { name: "size", type: `"small" | "medium" | "large"`, defaultValue: `"large"`, description: "Button size scale." },
        ],
        preview: () => (
          <Inline gap={10} wrap>
            <ResultButton>View details</ResultButton>
            <ResultButton tone="neutral" variant="ghost">Dismiss</ResultButton>
          </Inline>
        ),
      },
      {
        name: "Rating",
        eyebrow: "feedback",
        description: "Interactive star rating control for reviews and satisfaction flows.",
        props: [
          { name: "value", type: "number", defaultValue: "0", description: "Current rating value." },
          { name: "max", type: "number", defaultValue: "5", description: "Maximum number of stars." },
          { name: "showValue", type: "boolean", defaultValue: "false", description: "Display the numeric score." },
        ],
        preview: () => <RatingPlayground />,
      },
      {
        name: "FullScreenLoader",
        eyebrow: "feedback",
        description: "Full-screen blocking loading state for high-importance transitions.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "title", type: "ReactNode", defaultValue: "\"Loading\"", description: "Primary loading message." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Secondary context." },
          { name: "tone", type: `"accent" | "success" | "warning" | "danger"`, defaultValue: `"accent"`, description: "Loader tone." },
        ],
        preview: () => <FullScreenLoaderPlayground />,
      },
      {
        name: "LoadingCompleteView",
        eyebrow: "feedback",
        description: "Centered completion surface for successful, warning, or failed finishes.",
        props: [
          { name: "tone", type: `"success" | "warning" | "danger"`, defaultValue: `"success"`, description: "Semantic completion tone." },
          { name: "title", type: "ReactNode", defaultValue: "\"Completed\"", description: "Primary completion title." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Supporting detail copy." },
          { name: "primaryAction", type: "{ label, onClick, variant?, tone? }", defaultValue: "-", description: "Primary follow-up action." },
          { name: "secondaryAction", type: "{ label, onClick, variant?, tone? }", defaultValue: "-", description: "Secondary follow-up action." },
        ],
        preview: () => <LoadingCompleteViewPlayground />,
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
        name: "Modal",
        eyebrow: "overlay",
        description: "Product-style centered modal alias for dialog-based flows.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "headline", type: "ReactNode", defaultValue: "-", description: "Primary heading." },
          { name: "subheadline", type: "ReactNode", defaultValue: "-", description: "Supporting copy." },
          { name: "actions", type: "ReactNode", defaultValue: "-", description: "Footer action area." },
          { name: "primaryAction / secondaryAction / tertiaryAction", type: "action config", defaultValue: "-", description: "Structured CTA props for product-style modal footers." },
          { name: "tone", type: `"default" | "success" | "danger"`, defaultValue: `"default"`, description: "Semantic emphasis treatment." },
          { name: "showCloseButton", type: "boolean", defaultValue: "true", description: "Show a dismiss button in the upper-right corner." },
        ],
        preview: () => <ModalPlayground />,
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
          { name: "primaryAction / secondaryAction / tertiaryAction", type: "action config", defaultValue: "-", description: "Structured CTA props for common sheet flows." },
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
      {
        name: "CommandPalette",
        eyebrow: "overlay",
        description: "Global action launcher with search, keyboard navigation, and shortcuts.",
        props: [
          { name: "open", type: "boolean", defaultValue: "false", description: "Visibility state." },
          { name: "commands", type: "Array<{ title, description?, shortcut?, onSelect? }>", defaultValue: "[]", description: "Searchable command items." },
          { name: "title / placeholder", type: "string", defaultValue: "-", description: "Header label and input placeholder." },
        ],
        preview: () => <InteractiveCommandPalettePreview />,
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
          { name: "ListHeader title / rightText / rightArrow / rightButton / selector", type: "structured props", defaultValue: "-", description: "Product-style heading affordances for grouped lists." },
          { name: "ListHeader compact / divider", type: "boolean", defaultValue: "false / false", description: "Header density and separator options." },
        ],
        preview: () => <ListHeaderPlayground />,
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
        name: "ListRow.Icon / Image",
        eyebrow: "data",
        description: "Media helpers for icon, fill-icon, and image-led list rows.",
        props: [
          { name: "ListRowIcon", type: "component", defaultValue: "-", description: "Neutral icon container." },
          { name: "ListRowFillIcon", type: "component", defaultValue: "-", description: "Filled icon container." },
          { name: "ListRowImageContainer", type: "component", defaultValue: "-", description: "Image frame wrapper." },
          { name: "ListRowImage", type: "component", defaultValue: "-", description: "Image element sized for list rows." },
          { name: "ListRowIconButton", type: "component", defaultValue: "-", description: "Compact trailing action icon button." },
        ],
        preview: () => (
          <Stack gap={12}>
            <ListRow
              title="Folders"
              description="Icon-led row"
              icon={<ListRowIcon name="folder" />}
              action={<ListRowIconButton name="chevronRight" />}
            />
            <ListRow
              title="Workspace avatar"
              description="Image-led row"
              leading={<ListRowImageContainer><ListRowImage src="https://placehold.co/64x64/png" alt="" /></ListRowImageContainer>}
              action={<ListRowFillIcon name="user" />}
            />
          </Stack>
        ),
      },
      {
        name: "ListRow",
        eyebrow: "data",
        description: "Structured row for navigation lists or summary blocks.",
        props: [
          { name: "leading", type: "ReactNode", defaultValue: "-", description: "Leading slot." },
          { name: "image / icon", type: "string | ReactNode", defaultValue: "-", description: "Recommended media affordances." },
          { name: "eyebrow", type: "ReactNode", defaultValue: "-", description: "Small supporting label above the title." },
          { name: "meta", type: "ReactNode", defaultValue: "-", description: "Secondary value in trailing column." },
          { name: "trailing / action", type: "ReactNode", defaultValue: "-", description: "Trailing slot or inline action." },
          { name: "rightArrow", type: "boolean", defaultValue: "false", description: "Show navigation arrow affordance." },
          { name: "interactive", type: "boolean", defaultValue: "false", description: "Uses button semantics and hover behavior." },
          { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Padding scale." },
          { name: "variant", type: `"default" | "muted" | "accent"`, defaultValue: `"default"`, description: "Background treatment." },
        ],
        preview: () => <ListRowPlayground />,
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
      {
        name: "BarChart",
        eyebrow: "data",
        description: "Simple horizontal comparison chart for compact dashboards.",
        props: [
          { name: "data", type: "Array<{ label, value, tone? }>", defaultValue: "[]", description: "Bar series values." },
          { name: "max", type: "number", defaultValue: "-", description: "Optional fixed maximum scale." },
          { name: "showValue", type: "boolean", defaultValue: "true", description: "Show numeric value labels." },
        ],
        preview: () => <BarChartPlayground />,
      },
      {
        name: "GridList",
        eyebrow: "data",
        description: "Responsive grid primitive for grouped metric or card surfaces.",
        props: [
          { name: "columns", type: "number", defaultValue: "2", description: "Grid column count." },
          { name: "gap", type: "number", defaultValue: "16", description: "Gap between items." },
        ],
        preview: () => (
          <GridList columns={2}>
            <Card><Text variant="body">Revenue</Text></Card>
            <Card><Text variant="body">Payouts</Text></Card>
            <Card><Text variant="body">Alerts</Text></Card>
            <Card><Text variant="body">Members</Text></Card>
          </GridList>
        ),
      },
      {
        name: "DoughnutChart",
        eyebrow: "data",
        description: "Circular progress and composition chart for compact summaries.",
        props: [
          { name: "value / max", type: "number", defaultValue: "64 / 100", description: "Progress ratio." },
          { name: "size / stroke", type: "number", defaultValue: "144 / 12", description: "Chart dimensions." },
          { name: "tone", type: `"accent" | "success" | "warning" | "danger" | "neutral"`, defaultValue: `"accent"`, description: "Progress color tone." },
        ],
        preview: () => <DoughnutChartPlayground />,
      },
      {
        name: "Slider",
        eyebrow: "data",
        description: "Interactive range control for thresholds and weighted inputs.",
        props: [
          { name: "value", type: "number", defaultValue: "0", description: "Current slider value." },
          { name: "min / max / step", type: "number", defaultValue: "0 / 100 / 1", description: "Range bounds and increment." },
          { name: "tone", type: `"accent" | "success" | "warning" | "danger"`, defaultValue: `"accent"`, description: "Slider highlight tone." },
        ],
        preview: () => <SliderPlayground />,
      },
      {
        name: "ProgressStep",
        eyebrow: "data",
        description: "Single progress item for sequential states.",
        props: [
          { name: "index", type: "number", defaultValue: "-", description: "Displayed numeric order." },
          { name: "label", type: "ReactNode", defaultValue: "-", description: "Step label." },
          { name: "description", type: "ReactNode", defaultValue: "-", description: "Supporting explanation." },
          { name: "status", type: `"done" | "current" | "upcoming"`, defaultValue: `"upcoming"`, description: "Step completion state." },
        ],
        preview: () => (
          <div className="docs-inline-surface">
            <ProgressStep index={2} label="Review" description="Team check" status="current" />
          </div>
        ),
      },
      {
        name: "ProgressStepper",
        eyebrow: "data",
        description: "Horizontal connected progress flow built from progress steps.",
        props: [
          { name: "steps", type: "Array<{ label, description? }>", defaultValue: "[]", description: "Ordered sequence of steps." },
          { name: "current", type: "number", defaultValue: "0", description: "Current zero-based active step index." },
        ],
        preview: () => <ProgressStepperPlayground />,
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
