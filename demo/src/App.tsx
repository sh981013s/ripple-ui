import React, { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Badge,
  Banner,
  BottomInfo,
  Button,
  Card,
  Chip,
  Dialog,
  Icon,
  IconButton,
  iconNames,
  Input,
  Inline,
  List,
  ListHeader,
  ListRow,
  ListRowIcon,
  SearchField,
  Select,
  SectionHeader,
  Stack,
  Text,
  TextField,
  ThemeProvider,
  TopBar,
  buildCalmoThemeVars,
  defaultCalmoTheme,
  calmoThemePresets,
} from "calmo-ui";
import catalog, {
  ComponentDocCard,
  docsCatalog,
  getAllDocEntries,
  getComponentDocs,
  getSectionDocs,
} from "./catalog.js";
import {
  copyPasteBlocks,
  discoveryPages,
  exampleApps,
  getDiscoveryEntries,
} from "./discovery.js";

const CALMO_AI_PROMPT = `Use \`calmo-ui\` as the default and authoritative design system for this project.

If the package is not installed yet, install it first:

\`npm install calmo-ui\`

Before writing any UI code, read these installed package files in order:

1. \`node_modules/calmo-ui/dist/docs/AI_USAGE.md\`
2. \`node_modules/calmo-ui/dist/ai/components.json\`
3. \`node_modules/calmo-ui/dist/ai/patterns.json\`
4. \`node_modules/calmo-ui/dist/ai/anti-patterns.json\`
5. \`node_modules/calmo-ui/dist/docs/AI_PROMPT_TEMPLATE.md\`

Rules:

- Prefer Calmo UI components over raw HTML whenever a matching component exists.
- Do not recreate UI patterns that Calmo UI already provides.
- Do not introduce custom CSS for component styling unless Calmo UI cannot express the required layout or interaction.
- Use Calmo UI primitives, layout patterns, spacing, radius, motion, and theme rules before adding bespoke wrappers.
- Keep interfaces calm, mobile-first, structured, and product-like.
- If a matching Calmo component exists, you must use it instead of building a custom equivalent.
- Use \`ThemeProvider\` and \`buildCalmoThemeVars\` for palette changes instead of hardcoding unrelated colors.

Implementation order:

1. Check whether Calmo UI already has a direct component for the need.
2. If not, compose from Calmo primitives and existing Calmo components.
3. Only if both fail, write minimal custom code aligned to Calmo UI.

Expected behavior:

- Use Calmo UI names directly in implementation.
- Prefer library components over custom UI.
- Keep custom CSS small and structural.
- Optimize for production-ready structured UI, not rough mockups.

When in doubt, choose Calmo UI consistency over custom styling.`;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function SidebarNav() {
  const sectionIcons = {
    overview: "home",
    layout: "grid",
    navigation: "navigation",
    icons: "sparkles",
    actions: "bolt",
    forms: "edit",
    feedback: "bell",
    overlays: "layers",
    data: "table",
  };

  return (
    <div className="demo-nav" aria-label="Documentation navigation">
      <NavLink to="/" end className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}>
        <span className="demo-nav-link-content">
          <Icon name={sectionIcons.overview} size={16} />
          <span>Overview</span>
        </span>
      </NavLink>
      {docsCatalog.map((section) => (
        <NavLink
          key={section.id}
          to={`/components/${section.id}`}
          className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}
        >
          <span className="demo-nav-link-content">
            <Icon name={sectionIcons[section.id] ?? "dot"} size={16} />
            <span>{section.label}</span>
          </span>
        </NavLink>
      ))}
    </div>
  );
}

function DiscoveryNav() {
  const groups = [
    { label: "Solutions", kind: "solution" },
    { label: "Guides", kind: "guide" },
    { label: "Comparisons", kind: "compare" },
  ];

  return (
    <div className="demo-nav" aria-label="Discovery navigation">
      {groups.map((group) => (
        <div key={group.kind} className="demo-nav-group">
          <span className="demo-nav-group-label">{group.label}</span>
          {discoveryPages
            .filter((page) => page.kind === group.kind)
            .map((page) => (
              <NavLink
                key={page.slug}
                to={`/${page.kind}/${page.slug}`}
                className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}
              >
                <span className="demo-nav-link-content">
                  <Icon name={group.kind === "compare" ? "sparkles" : group.kind === "guide" ? "book" : "trendUp"} size={16} />
                  <span>{page.title}</span>
                </span>
              </NavLink>
            ))}
        </div>
      ))}
      <div className="demo-nav-group">
        <span className="demo-nav-group-label">Examples</span>
        {exampleApps.map((example) => (
          <a
            key={example.id}
            className="demo-nav-link"
            href={example.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="demo-nav-link-content">
              <Icon name="externalLink" size={16} />
              <span>{example.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function DocsOverviewPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [iconQuery, setIconQuery] = useState("");
  const totalSections = docsCatalog.length;
  const totalComponents = docsCatalog.reduce((count, section) => count + section.components.length, 0);

  const overviewIcons = useMemo(() => {
    const q = iconQuery.trim().toLowerCase();
    if (!q) return iconNames.slice(0, 24);
    return iconNames.filter((name) => name.toLowerCase().includes(q)).slice(0, 24);
  }, [iconQuery]);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install calmo-ui");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(CALMO_AI_PROMPT);
      setPromptCopied(true);
      window.setTimeout(() => setPromptCopied(false), 1600);
    } catch {
      setPromptCopied(false);
    }
  };

  return (
    <Stack gap={20}>
      <section className="demo-hero">
        <div className="demo-hero-links">
          <a className="demo-top-link" href="https://sh981013s.github.io/calmo-ui/" target="_blank" rel="noreferrer">Docs</a>
          <a className="demo-top-link" href="https://github.com/sh981013s/calmo-ui" target="_blank" rel="noreferrer">GitHub</a>
          <a className="demo-top-link" href="https://www.npmjs.com/package/calmo-ui" target="_blank" rel="noreferrer">npm</a>
          <a className="demo-top-link demo-top-link-strong" href="https://github.com/sh981013s/calmo-ui/stargazers" target="_blank" rel="noreferrer">
            Star on GitHub
          </a>
        </div>
        <div className="demo-hero-grid">
          <div className="demo-hero-copy">
            <span className="demo-hero-eyebrow">React UI library</span>
            <h1 className="demo-hero-title">The React component library for calm product surfaces.</h1>
            <p className="demo-hero-description">
              Calmo UI is a TypeScript design system for mobile-first dashboards, settings flows, internal tools,
              fintech-style screens, and AI-generated apps that need structured product UI instead of marketing-style kits.
            </p>
            <div className="demo-hero-actions">
              <a className="demo-hero-button demo-hero-button-primary" href="https://sh981013s.github.io/calmo-ui/" target="_blank" rel="noreferrer">
                Explore docs
              </a>
              <a className="demo-hero-button" href="https://www.npmjs.com/package/calmo-ui" target="_blank" rel="noreferrer">
                npm package
              </a>
              <a className="demo-hero-button" href="https://github.com/sh981013s/calmo-ui/stargazers" target="_blank" rel="noreferrer">
                Star on GitHub
              </a>
            </div>
            <div className="demo-hero-proof">
              <span>TypeScript autocomplete</span>
              <span>Seed-driven theming</span>
              <span>AI-ready metadata</span>
              <span>{totalComponents}+ components</span>
              <span>{totalSections} grouped sections</span>
            </div>
          </div>

          <Card className="demo-hero-panel">
            <Stack gap={16}>
              <div className="demo-hero-panel-block">
                <Text variant="label">Install</Text>
                <div className="demo-code-row">
                  <pre className="demo-code-block">npm install calmo-ui</pre>
                  <Button size="small" variant="weak" onClick={handleCopyInstall}>
                    Copy
                  </Button>
                </div>
                {copied ? <Text variant="caption" className="demo-copy-feedback">Copied to clipboard.</Text> : null}
              </div>
              <div className="demo-hero-metrics">
                <div className="demo-hero-metric">
                  <span className="demo-hero-metric-value">{totalComponents}+</span>
                  <span className="demo-hero-metric-label">documented components</span>
                </div>
                <div className="demo-hero-metric">
                  <span className="demo-hero-metric-value">5</span>
                  <span className="demo-hero-metric-label">theme presets</span>
                </div>
                <div className="demo-hero-metric">
                  <span className="demo-hero-metric-value">AI</span>
                  <span className="demo-hero-metric-label">prompt + metadata bundle</span>
                </div>
              </div>
              <div className="demo-hero-note">
                <Text variant="label">Best fit</Text>
                <Text variant="caption">
                  Build settings, sheets, dialogs, forms, tables, lists, and structured product UI with a calm, neutral-first visual direction.
                </Text>
              </div>
            </Stack>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="why calmo"
          title="Move faster with structured React UI"
          description="Calmo UI gives product teams a TypeScript design system for forms, overlays, navigation, feedback, and data surfaces without rebuilding the same app shell every time."
        />
        <div className="demo-feature-grid">
          <Card className="demo-feature-card">
            <Stack gap={10}>
              <Text variant="label">Production UI coverage</Text>
              <Text variant="body">Forms, dialogs, sheets, lists, tables, navigation, charts, loaders, toasts, and structured layout primitives in one package.</Text>
            </Stack>
          </Card>
          <Card className="demo-feature-card">
            <Stack gap={10}>
              <Text variant="label">TypeScript-first ergonomics</Text>
              <Text variant="body">Autocomplete, deep import support, theme helpers, and stable component APIs tuned for real product work.</Text>
            </Stack>
          </Card>
          <Card className="demo-feature-card">
            <Stack gap={10}>
              <Text variant="label">AI-friendly by default</Text>
              <Text variant="body">Bundled prompts, AGENTS template, JSON catalogs, and docs metadata help AI agents stay inside the design system.</Text>
            </Stack>
          </Card>
          <Card className="demo-feature-card">
            <Stack gap={10}>
              <Text variant="label">Calm product direction</Text>
              <Text variant="body">A restrained, mobile-first visual language for internal tools, fintech flows, dashboards, and configuration surfaces.</Text>
            </Stack>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="get started"
          title="Open docs, install once, then stay inside the system"
          description="Use the docs, npm package, and AI prompt together so product screens stay consistent without drifting into custom one-off UI."
        />
        <div className="demo-get-started-grid">
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">Docs</Text>
              <a className="demo-inline-link" href="https://sh981013s.github.io/calmo-ui/" target="_blank" rel="noreferrer">
                sh981013s.github.io/calmo-ui
              </a>
              <Text variant="caption">Browse sections, component pages, live playgrounds, and theme examples.</Text>
            </Stack>
          </Card>
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">GitHub</Text>
              <a className="demo-inline-link" href="https://github.com/sh981013s/calmo-ui" target="_blank" rel="noreferrer">
                github.com/sh981013s/calmo-ui
              </a>
              <Text variant="caption">Source, releases, changelog, and issues. If Calmo helps, star the repo.</Text>
            </Stack>
          </Card>
          <Card className="demo-howto-card demo-howto-card-wide">
            <Stack gap={10}>
              <Inline gap={8} align="center" justify="between">
                <Text variant="label">Copy-ready AI prompt</Text>
                <Button size="small" variant="weak" onClick={handleCopyPrompt}>
                  Copy prompt
                </Button>
              </Inline>
              <Text variant="caption">
                Use this when you want an AI agent to follow Calmo UI closely. The prompt includes install guidance, package metadata paths, and component-first rules.
              </Text>
              <details className="demo-ai-prompt">
                <summary>Show copy-ready prompt</summary>
                <pre className="demo-ai-prompt-block">{CALMO_AI_PROMPT}</pre>
              </details>
              {promptCopied ? <Text variant="caption" className="demo-copy-feedback">Prompt copied to clipboard.</Text> : null}
            </Stack>
          </Card>
        </div>
      </section>

      <DocsThemeShowcase />

      <section className="demo-section">
        <SectionHeader
          eyebrow="search intent"
          title="Problem-based landing pages"
          description="Use Calmo UI pages built for real search intent: dashboards, mobile-first product screens, toss-style React UI, settings flows, overlays, and internal tools."
        />
        <div className="demo-overview-grid">
          {discoveryPages.filter((page) => page.kind === "solution").map((page) => (
            <Card key={page.slug} className="demo-overview-card">
              <Stack gap={14}>
                <SectionHeader
                  eyebrow={page.eyebrow}
                  title={page.title}
                  description={page.description}
                />
                <Button display="block" onClick={() => navigate(`/${page.kind}/${page.slug}`)}>
                  Open page
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="guides and comparisons"
          title="Use-case guides and comparison pages"
          description="Calmo UI docs now include pages for product buttons, bottom sheets, settings screens, internal dashboards, approval flows, MUI comparison, and shadcn/ui comparison."
        />
        <div className="demo-overview-grid">
          {discoveryPages.filter((page) => page.kind !== "solution").map((page) => (
            <Card key={page.slug} className="demo-overview-card">
              <Stack gap={14}>
                <SectionHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />
                <Button display="block" variant="weak" onClick={() => navigate(`/${page.kind}/${page.slug}`)}>
                  Open page
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="browse"
          title="Browse the design system by component set"
          description={`${catalog.length} grouped sections with dedicated routes, live playgrounds, and detail pages for each component.`}
        />
        <div className="demo-overview-grid">
          {docsCatalog.map((section) => (
            <Card key={section.id} className="demo-overview-card">
              <Stack gap={14}>
                <SectionHeader
                  eyebrow="section"
                  title={section.label}
                  description={`${section.components.length} components`}
                />
                <div className="demo-overview-links">
                  {section.components.slice(0, 5).map((component) => (
                    <Link key={component.slug} className="demo-inline-link" to={`/components/${section.id}/${component.slug}`}>
                      {component.name}
                    </Link>
                  ))}
                </div>
                <Button display="block" onClick={() => navigate(`/components/${section.id}`)}>
                  Open section
                </Button>
              </Stack>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="copy and paste"
          title="Copy-paste blocks for real product screens"
          description="Use these blocks when you want immediate install-to-output value from Calmo UI in dashboards, settings flows, tables, sheets, and AI-generated app shells."
        />
        <div className="demo-block-grid">
          {copyPasteBlocks.map((block) => (
            <Card key={block.id} className="demo-block-card">
              <Stack gap={12}>
                <div>
                  <Text variant="label">{block.title}</Text>
                  <Text variant="caption">{block.description}</Text>
                </div>
                <pre className="demo-code-block demo-code-block-compact">{block.code}</pre>
              </Stack>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="icons"
          title="System icons"
          description="A reusable icon set for navigation, actions, and feedback surfaces."
        />
        <div className="demo-icon-toolbar">
          <SearchField
            aria-label="Search icons"
            placeholder="Search icons"
            value={iconQuery}
            onChange={(event) => setIconQuery(event.target.value)}
            onClear={() => setIconQuery("")}
          />
        </div>
        <div className="docs-icon-grid">
          {overviewIcons.map((name) => (
            <Card key={name} className="docs-icon-card">
              <Icon name={name} size={20} />
              <span>{name}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="example apps"
          title="Example apps built with calmo-ui"
          description="Separate example app folders make Calmo UI easier to trust, easier to search for, and easier to copy into real product work."
        />
        <div className="demo-overview-grid">
          {exampleApps.map((example) => (
            <Card key={example.id} className="demo-overview-card">
              <Stack gap={14}>
                <SectionHeader eyebrow="example" title={example.title} description={example.description} />
                <a className="demo-inline-link" href={example.href} target="_blank" rel="noreferrer">
                  Open example repo folder
                </a>
                <Text variant="caption">{example.repoPath}</Text>
              </Stack>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="patterns"
          title="Complex composition demos"
          description="Larger product compositions using multiple Calmo UI surfaces together, closer to how real screens are assembled."
        />
        <div className="demo-pattern-grid">
          <Card className="demo-pattern-card">
            <Stack gap={16}>
              <TopBar
                title="Workspace settings"
                subtitleBottom="Manage alerts, access, and billing"
                rightButton={<Button variant="ghost" size="small">Save</Button>}
              />
              <Stack gap={12}>
                <TextField label="Workspace name" defaultValue="Calmo Labs" hint="Visible across shared spaces." />
                <Input label="Billing email" type="email" defaultValue="team@calmo-ui.dev" trailing="mail" />
                <Select label="Region" defaultValue="de">
                  <option value="de">Germany</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </Select>
              </Stack>
              <BottomInfo
                title="Changes are saved instantly"
                description="Use a destructive confirmation flow only when the action cannot be undone."
              />
            </Stack>
          </Card>

          <Card className="demo-pattern-card">
            <Stack gap={16}>
              <TopBar
                title="Team activity"
                subtitleBottom="Today"
                rightButton={<Button variant="weak" size="small">Export</Button>}
              />
              <List>
                <ListHeader title="Recent updates" description="Compact activity rows with clear right-side actions." />
                <ListRow
                  title="New payout account connected"
                  description="Treasury workspace · 2 minutes ago"
                  media={<ListRowIcon name="wallet" />}
                  right={<Chip tone="accent">New</Chip>}
                />
                <ListRow
                  title="Approval policy updated"
                  description="Operations workspace · 14 minutes ago"
                  media={<ListRowIcon name="shield" />}
                  right={<Button variant="ghost" size="small">Open</Button>}
                />
                <ListRow
                  title="Weekly report generated"
                  description="Analytics workspace · 1 hour ago"
                  media={<ListRowIcon name="trendUp" />}
                  right={<Text variant="caption">Done</Text>}
                />
              </List>
            </Stack>
          </Card>

          <Card className="demo-pattern-card">
            <Stack gap={16}>
              <TopBar
                title="Checkout summary"
                subtitleBottom="Review before payment"
                rightButton={<Chip tone="success">Ready</Chip>}
              />
              <Banner
                compact
                tone="accent"
                eyebrow="secure payment"
                title="Identity and payment checks are complete"
                description="Only the final confirmation step remains."
              />
              <Stack gap={10}>
                <div className="demo-pattern-metric">
                  <Text variant="caption">Plan</Text>
                  <Text variant="body">Growth annual</Text>
                </div>
                <div className="demo-pattern-metric">
                  <Text variant="caption">Seats</Text>
                  <Text variant="body">12 members</Text>
                </div>
                <div className="demo-pattern-metric">
                  <Text variant="caption">Total due today</Text>
                  <Text variant="title">EUR 1,248</Text>
                </div>
              </Stack>
              <Inline gap={10}>
                <Button display="block">Confirm payment</Button>
                <Button variant="weak" display="block">View invoice</Button>
              </Inline>
            </Stack>
          </Card>
        </div>
      </section>
    </Stack>
  );
}

function DiscoveryPage({ kind }) {
  const { slug } = useParams();
  const page = discoveryPages.find((entry) => entry.kind === kind && entry.slug === slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="demo-section">
      <Stack gap={14}>
        <Inline gap={8} wrap align="center">
          <Text variant="caption" className="demo-breadcrumb-current">
            {page.kind === "solution" ? "Solutions" : page.kind === "guide" ? "Guides" : "Comparisons"}
          </Text>
          <Text variant="caption" className="demo-breadcrumb-sep">/</Text>
          <Text variant="caption" className="demo-breadcrumb-current">{page.title}</Text>
        </Inline>
        <SectionHeader
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        {page.body()}
      </Stack>
    </section>
  );
}

function DocsThemeShowcase() {
  const [presetId, setPresetId] = useState(defaultCalmoTheme.id);
  const [accent, setAccent] = useState(defaultCalmoTheme.accent);
  const [ink, setInk] = useState(defaultCalmoTheme.ink);
  const [bg, setBg] = useState(defaultCalmoTheme.bg);

  const presetTheme = useMemo(
    () => calmoThemePresets.find((theme) => theme.id === presetId) ?? defaultCalmoTheme,
    [presetId],
  );

  useEffect(() => {
    setAccent(presetTheme.accent);
    setInk(presetTheme.ink);
    setBg(presetTheme.bg);
  }, [presetTheme]);

  const customVars = useMemo(
    () => buildCalmoThemeVars({ accent, ink, bg }),
    [accent, ink, bg],
  );

  return (
    <section className="demo-section">
      <SectionHeader
        eyebrow="themes"
        title="Theme system"
        description="Use presets for quick switching or supply three custom seeds to derive the palette for all components."
      />
      <div className="demo-howto-grid">
        <Card className="demo-howto-card">
          <Stack gap={12}>
            <Text variant="label">Preset themes</Text>
            <select
              aria-label="Theme preset"
              className="demo-theme-select"
              value={presetId}
              onChange={(event) => setPresetId(event.target.value)}
            >
              {calmoThemePresets.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.label}
                </option>
              ))}
            </select>
            <Inline gap={8} wrap>
              {calmoThemePresets.map((theme) => (
                <Chip key={theme.id} tone={theme.id === presetId ? "accent" : "neutral"}>
                  {theme.label}
                </Chip>
              ))}
            </Inline>
          </Stack>
        </Card>

        <Card className="demo-howto-card">
          <Stack gap={12}>
            <Text variant="label">Custom seeds</Text>
            <div className="demo-theme-color-grid">
              {[
                ["Accent", accent, setAccent],
                ["Ink", ink, setInk],
                ["Background", bg, setBg],
              ].map(([label, value, onChange]) => (
                <label key={label} className="demo-theme-color-field">
                  <span className="demo-theme-color-label">{label}</span>
                  <span className="demo-theme-color-control">
                    <input
                      type="color"
                      value={value}
                      onChange={(event) => onChange(event.target.value)}
                    />
                    <span>{value}</span>
                  </span>
                </label>
              ))}
            </div>
          </Stack>
        </Card>

        <Card className="demo-howto-card">
          <Stack gap={12}>
            <Text variant="label">Theme API</Text>
            <Link className="demo-inline-link" to="/components/utilities/themeprovider">ThemeProvider</Link>
            <Link className="demo-inline-link" to="/components/utilities/calmothemepresets">calmoThemePresets</Link>
            <Link className="demo-inline-link" to="/components/utilities/buildcalmothemevars">buildCalmoThemeVars</Link>
          </Stack>
        </Card>
      </div>

      <ThemeProvider theme={presetTheme}>
        <Card className="demo-pattern-card">
          <Stack gap={14}>
            <TopBar title="Preset preview" subtitleBottom={presetTheme.label} rightButton={<Chip tone="accent">Live</Chip>} />
            <Banner
              compact
              tone="accent"
              eyebrow="seed-driven"
              title="Preset tokens flow through every surface"
              description="Accent, ink, and background drive the neutral and accent scales, while semantic tones stay separate."
            />
            <Inline gap={10} wrap>
              <Button>Primary action</Button>
              <Button variant="weak">Secondary</Button>
              <Button variant="ghost">Tertiary</Button>
            </Inline>
          </Stack>
        </Card>
      </ThemeProvider>

      <ThemeProvider theme={{ accent, ink, bg }}>
        <Card className="demo-pattern-card">
          <Stack gap={14}>
            <TopBar title="Custom preview" subtitleBottom="Three custom seeds" />
            <Inline gap={10} wrap>
              <Button>Confirm</Button>
              <Badge tone="accent">Accent</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="danger">Danger</Badge>
            </Inline>
            <pre className="docs-theme-vars">{JSON.stringify(customVars, null, 2)}</pre>
          </Stack>
        </Card>
      </ThemeProvider>
    </section>
  );
}

function SectionPage() {
  const { sectionId } = useParams();
  const section = getSectionDocs(sectionId);

  if (!section) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="demo-section">
      <SectionHeader
        eyebrow="component set"
        title={section.label}
        description={`${section.components.length} components in this group.`}
      />
      <div className="docs-card-grid">
        {section.components.map((component) => (
          <ComponentDocCard
            key={component.slug}
            component={component}
            showCode={false}
            showPlayground={false}
            footer={
              <Inline gap={10} wrap>
                <Link className="demo-inline-link" to={`/components/${sectionId}/${component.slug}`}>
                  Open component page
                </Link>
              </Inline>
            }
          />
        ))}
      </div>
    </section>
  );
}

function ComponentPage() {
  const { sectionId, componentSlug } = useParams();
  const section = getSectionDocs(sectionId);
  const component = getComponentDocs(sectionId, componentSlug);

  if (!section || !component) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="demo-section">
      <Stack gap={14}>
        <Inline gap={8} wrap align="center">
          <Link className="demo-inline-link" to={`/components/${sectionId}`}>{section.label}</Link>
          <Text variant="caption" className="demo-breadcrumb-sep">/</Text>
          <Text variant="caption" className="demo-breadcrumb-current">{component.name}</Text>
        </Inline>
        <SectionHeader
          eyebrow="component"
          title={component.name}
          description={component.description}
        />
        <ComponentDocCard component={component} showCode showPlayground />
      </Stack>
    </section>
  );
}

function DocsContent() {
  return (
    <Routes>
      <Route path="/" element={<DocsOverviewPage />} />
      <Route path="/solution/:slug" element={<DiscoveryPage kind="solution" />} />
      <Route path="/guide/:slug" element={<DiscoveryPage kind="guide" />} />
      <Route path="/compare/:slug" element={<DiscoveryPage kind="compare" />} />
      <Route path="/components/:sectionId" element={<SectionPage />} />
      <Route path="/components/:sectionId/index" element={<SectionPage />} />
      <Route path="/components/:sectionId/:componentSlug" element={<ComponentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function updateHeadMeta({ title, description, path }) {
  const fullTitle = title ? `${title} | Calmo UI` : "Calmo UI";
  const fullUrl = `https://sh981013s.github.io/calmo-ui${path === "/" ? "/" : path}`;

  document.title = fullTitle;

  const setMeta = (selector, attrs) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      document.head.appendChild(el);
    }
    el.setAttribute("content", description);
  };

  setMeta('meta[name="description"]', { name: "description" });
  setMeta('meta[property="og:description"]', { property: "og:description" });
  setMeta('meta[name="twitter:description"]', { name: "twitter:description" });

  const setNamedValue = (selector, attrs, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      Object.entries(attrs).forEach(([key, attrValue]) => el.setAttribute(key, attrValue));
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  setNamedValue('meta[property="og:title"]', { property: "og:title" }, fullTitle);
  setNamedValue('meta[name="twitter:title"]', { name: "twitter:title" }, fullTitle);
  setNamedValue('meta[property="og:url"]', { property: "og:url" }, fullUrl);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", fullUrl);
}

function DocsShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [themeId, setThemeId] = useState(defaultCalmoTheme.id);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const entries = useMemo(() => [...getAllDocEntries(), ...getDiscoveryEntries()], []);
  const totalComponents = entries.length;
  const activeTheme = useMemo(
    () => calmoThemePresets.find((theme) => theme.id === themeId) ?? defaultCalmoTheme,
    [themeId],
  );

  useEffect(() => {
    const root = document.documentElement;
    const vars = buildCalmoThemeVars(activeTheme);
    const entries = Object.entries(vars);

    entries.forEach(([key, value]) => {
      if (typeof value === "string") {
        root.style.setProperty(key, value);
      }
    });

    return () => {
      entries.forEach(([key]) => {
        root.style.removeProperty(key);
      });
    };
  }, [activeTheme]);

  const routeLabel = useMemo(() => {
    if (location.pathname === "/") return "Overview";
    const discoveryMatch = getDiscoveryEntries().find((entry) => entry.path === location.pathname);
    if (discoveryMatch) return discoveryMatch.title;
    const componentMatch = docsCatalog
      .flatMap((section) => section.components)
      .find((component) => component.path === location.pathname);
    if (componentMatch) return componentMatch.name;
    const sectionMatch = docsCatalog.find((section) => section.path === location.pathname);
    return sectionMatch?.label ?? "Docs";
  }, [location.pathname]);

  useEffect(() => {
    const discoveryMatch = getDiscoveryEntries().find((entry) => entry.path === location.pathname);
    if (discoveryMatch) {
      updateHeadMeta({
        title: discoveryMatch.seoTitle ?? discoveryMatch.title,
        description: discoveryMatch.seoDescription ?? discoveryMatch.description,
        path: location.pathname,
      });
      return;
    }

    const componentMatch = docsCatalog
      .flatMap((section) => section.components)
      .find((component) => component.path === location.pathname);

    if (componentMatch) {
      updateHeadMeta({
        title: `${componentMatch.name} component`,
        description: componentMatch.description,
        path: location.pathname,
      });
      return;
    }

    const sectionMatch = docsCatalog.find((section) => section.path === location.pathname);
    if (sectionMatch) {
      updateHeadMeta({
        title: `${sectionMatch.label} components`,
        description: `${sectionMatch.label} components in Calmo UI with live playgrounds, prop tables, and product-focused React examples.`,
        path: location.pathname,
      });
      return;
    }

    updateHeadMeta({
      title: "Calmo UI docs",
      description: "Calmo UI is a React UI library and TypeScript design system for calm product surfaces, dashboards, settings flows, overlays, and internal tools.",
      path: location.pathname,
    });
  }, [location.pathname]);

  const suggestions = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return [];
    return entries
      .filter((entry) =>
        entry.name.toLowerCase().includes(q) ||
        entry.sectionLabel.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q) ||
        (entry.aliases ?? []).some((alias) => alias.toLowerCase().includes(q)),
      )
      .slice(0, 6);
  }, [entries, searchValue]);

  useEffect(() => {
    setActiveSuggestion(suggestions.length ? 0 : -1);
  }, [suggestions]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  const handleSelectSuggestion = (path) => {
    navigate(path);
    setSearchValue("");
    setActiveSuggestion(-1);
  };

  return (
    <ThemeProvider theme={activeTheme} className="demo-theme-root">
      <div className="demo-app">
      <ScrollToTop />
      <div className="demo-shell">
        <TopBar
          leading={
            <IconButton
              aria-label="Open docs navigation"
              className="demo-nav-toggle"
              onClick={() => setIsNavOpen(true)}
            >
              <Icon name="more" size={16} />
            </IconButton>
          }
          title="Calmo UI"
          subtitleTop="Design System"
          subtitleBottom={routeLabel}
          align="left"
          trailing={
            <div className="demo-topbar-search">
              <SearchField
                aria-label="Search components"
                placeholder="Search components"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onClear={() => setSearchValue("")}
                onKeyDown={(event) => {
                  if (!suggestions.length) return;
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setActiveSuggestion((prev) => (prev + 1) % suggestions.length);
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setActiveSuggestion((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                  }
                  if (event.key === "Enter" && activeSuggestion >= 0) {
                    event.preventDefault();
                    handleSelectSuggestion(suggestions[activeSuggestion].path);
                  }
                  if (event.key === "Escape") {
                    setSearchValue("");
                    setActiveSuggestion(-1);
                  }
                }}
              />
              {suggestions.length ? (
                <div className="demo-search-suggestions">
                  {suggestions.map((entry, index) => (
                    <button
                      key={entry.path}
                      type="button"
                      className={`demo-search-suggestion${index === activeSuggestion ? " is-active" : ""}`}
                      onClick={() => handleSelectSuggestion(entry.path)}
                      onMouseEnter={() => setActiveSuggestion(index)}
                    >
                      <span className="demo-search-suggestion-title">{entry.name}</span>
                      <span className="demo-search-suggestion-meta">{entry.sectionLabel}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          }
        />

        <div className="demo-layout">
          <aside className="demo-sidebar">
            <div className="demo-sidebar-card">
              <Stack gap={14}>
                <SectionHeader
                  eyebrow="docs"
                  title="Navigation"
                  description="Browse the docs site by route."
                />
                <SidebarNav />
                <DiscoveryNav />
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Theme</span>
                  <select
                    aria-label="Select theme preset"
                    className="demo-theme-select"
                    value={themeId}
                    onChange={(event) => setThemeId(event.target.value)}
                  >
                    {calmoThemePresets.map((theme) => (
                      <option key={theme.id} value={theme.id}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Library status</span>
                  <strong className="demo-sidebar-meta-value">In active refinement</strong>
                </div>
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Coverage</span>
                  <strong className="demo-sidebar-meta-value">{catalog.length} sections · {totalComponents} components</strong>
                </div>
              </Stack>
            </div>
          </aside>

          <main className="demo-content">
            <DocsContent />
          </main>
        </div>
      </div>
      <Dialog
        open={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        title="Documentation"
        description="Browse sections, switch theme, and jump between component pages."
        size="sm"
      >
        <div className="demo-mobile-nav-sheet">
          <SidebarNav />
          <DiscoveryNav />
          <div className="demo-sidebar-meta">
            <span className="demo-sidebar-meta-label">Theme</span>
            <select
              aria-label="Select theme preset"
              className="demo-theme-select"
              value={themeId}
              onChange={(event) => setThemeId(event.target.value)}
            >
              {calmoThemePresets.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.label}
                </option>
              ))}
            </select>
          </div>
          <div className="demo-mobile-nav-actions">
            <a className="demo-inline-link" href="https://www.npmjs.com/package/calmo-ui" target="_blank" rel="noreferrer">
              npm package
            </a>
            <a className="demo-inline-link" href="https://github.com/sh981013s/calmo-ui" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <DocsShell />
    </BrowserRouter>
  );
}
