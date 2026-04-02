import React, { useEffect, useMemo, useState } from "react";
import {
  HashRouter,
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
  Icon,
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
  buildRippleThemeVars,
  defaultRippleTheme,
  rippleThemePresets,
} from "@sh981013s/ripple-ui";
import catalog, {
  ComponentDocCard,
  docsCatalog,
  getAllDocEntries,
  getComponentDocs,
  getSectionDocs,
} from "./catalog.js";

const RIPPLE_AI_PROMPT = `Use \`@sh981013s/ripple-ui\` as the default and authoritative design system for this project.

If the package is not installed yet, install it first:

\`npm install @sh981013s/ripple-ui\`

Before writing any UI code, read these installed package files in order:

1. \`node_modules/@sh981013s/ripple-ui/dist/docs/AI_USAGE.md\`
2. \`node_modules/@sh981013s/ripple-ui/dist/ai/components.json\`
3. \`node_modules/@sh981013s/ripple-ui/dist/ai/patterns.json\`
4. \`node_modules/@sh981013s/ripple-ui/dist/ai/anti-patterns.json\`
5. \`node_modules/@sh981013s/ripple-ui/dist/docs/AI_PROMPT_TEMPLATE.md\`

Rules:

- Prefer Ripple UI components over raw HTML whenever a matching component exists.
- Do not recreate UI patterns that Ripple UI already provides.
- Do not introduce custom CSS for component styling unless Ripple UI cannot express the required layout or interaction.
- Use Ripple UI primitives, layout patterns, spacing, radius, motion, and theme rules before adding bespoke wrappers.
- Keep interfaces calm, mobile-first, structured, and product-like.
- If a matching Ripple component exists, you must use it instead of building a custom equivalent.
- Use \`ThemeProvider\` and \`buildRippleThemeVars\` for palette changes instead of hardcoding unrelated colors.

Implementation order:

1. Check whether Ripple UI already has a direct component for the need.
2. If not, compose from Ripple primitives and existing Ripple components.
3. Only if both fail, write minimal custom code aligned to Ripple UI.

Expected behavior:

- Use Ripple UI names directly in implementation.
- Prefer library components over custom UI.
- Keep custom CSS small and structural.
- Optimize for production-ready structured UI, not rough mockups.

When in doubt, choose Ripple UI consistency over custom styling.`;

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

function DocsOverviewPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [iconQuery, setIconQuery] = useState("");

  const overviewIcons = useMemo(() => {
    const q = iconQuery.trim().toLowerCase();
    if (!q) return iconNames.slice(0, 24);
    return iconNames.filter((name) => name.toLowerCase().includes(q)).slice(0, 24);
  }, [iconQuery]);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install @sh981013s/ripple-ui");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(RIPPLE_AI_PROMPT);
      setPromptCopied(true);
      window.setTimeout(() => setPromptCopied(false), 1600);
    } catch {
      setPromptCopied(false);
    }
  };

  return (
    <Stack gap={20}>
      <section className="demo-hero">
        <div className="demo-hero-copy">
          <span className="demo-hero-eyebrow">React UI Library</span>
          <h1 className="demo-hero-title">Ripple UI</h1>
          <p className="demo-hero-description">
            A TypeScript design system for calm, mobile-first product surfaces. Build fintech-style dashboards,
            settings flows, internal tools, and AI-generated apps with reusable React components.
          </p>
          <Inline gap={8} wrap>
            <Chip tone="accent">React UI library</Chip>
            <Chip tone="neutral">TypeScript design system</Chip>
            <Chip tone="success">Mobile-first components</Chip>
          </Inline>
        </div>
        <div className="demo-hero-proof">
          <span>Forms</span>
          <span>Overlays</span>
          <span>Navigation</span>
          <span>Data views</span>
          <span>Theme presets</span>
          <span>AI-friendly docs</span>
        </div>
      </section>

      <Banner
        tone="neutral"
        compact
        eyebrow="overview"
        title="A React component library for product UI, not a marketing kit"
        description="Ripple UI is built for dashboards, settings, lists, forms, dialogs, sheets, and mobile-first internal tools with a calm Toss-style UI direction."
      />

      <section className="demo-section">
        <SectionHeader
          eyebrow="quick start"
          title="Use Ripple UI in your product"
          description="Install the package, open the docs, and use Ripple UI as your default React UI library for structured product surfaces."
        />
        <div className="demo-howto-grid">
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">Docs</Text>
              <a className="demo-inline-link" href="https://sh981013s.github.io/ripple-ui/" target="_blank" rel="noreferrer">
                sh981013s.github.io/ripple-ui
              </a>
            </Stack>
          </Card>
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">GitHub</Text>
              <a className="demo-inline-link" href="https://github.com/sh981013s/ripple-ui" target="_blank" rel="noreferrer">
                github.com/sh981013s/ripple-ui
              </a>
            </Stack>
          </Card>
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">Install</Text>
              <div className="demo-code-row">
                <pre className="demo-code-block">npm install @sh981013s/ripple-ui</pre>
                <Button size="small" variant="weak" onClick={handleCopyInstall}>
                  Copy
                </Button>
              </div>
              {copied ? <Text variant="caption" className="demo-copy-feedback">Copied to clipboard.</Text> : null}
            </Stack>
          </Card>
          <Card className="demo-howto-card">
            <Stack gap={10}>
              <Text variant="label">Best for</Text>
              <Text variant="caption">React dashboards, admin panels, fintech workflows, settings flows, internal tools, and AI-generated apps.</Text>
            </Stack>
          </Card>

          <Card className="demo-howto-card demo-howto-card-wide">
            <Stack gap={10}>
              <Inline gap={8} align="center" justify="between">
                <Text variant="label">AI prompt</Text>
                <Button size="small" variant="weak" onClick={handleCopyPrompt}>
                  Copy prompt
                </Button>
              </Inline>
              <Text variant="caption">Use this when you want an AI agent to fully follow Ripple UI. If the package is missing, the prompt tells it to install `@sh981013s/ripple-ui` first.</Text>
              <details className="demo-ai-prompt">
                <summary>Show copy-ready prompt</summary>
                <pre className="demo-ai-prompt-block">{RIPPLE_AI_PROMPT}</pre>
              </details>
              {promptCopied ? <Text variant="caption" className="demo-copy-feedback">Prompt copied to clipboard.</Text> : null}
            </Stack>
          </Card>
        </div>
      </section>

      <DocsThemeShowcase />

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
          eyebrow="patterns"
          title="Complex composition demos"
          description="Larger product compositions using multiple Ripple UI surfaces together, closer to how real screens are assembled."
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
                <TextField label="Workspace name" defaultValue="Ripple Labs" hint="Visible across shared spaces." />
                <Input label="Billing email" type="email" defaultValue="team@ripple-ui.dev" trailing="mail" />
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

function DocsThemeShowcase() {
  const [presetId, setPresetId] = useState(defaultRippleTheme.id);
  const [accent, setAccent] = useState(defaultRippleTheme.accent);
  const [ink, setInk] = useState(defaultRippleTheme.ink);
  const [bg, setBg] = useState(defaultRippleTheme.bg);

  const presetTheme = useMemo(
    () => rippleThemePresets.find((theme) => theme.id === presetId) ?? defaultRippleTheme,
    [presetId],
  );

  useEffect(() => {
    setAccent(presetTheme.accent);
    setInk(presetTheme.ink);
    setBg(presetTheme.bg);
  }, [presetTheme]);

  const customVars = useMemo(
    () => buildRippleThemeVars({ accent, ink, bg }),
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
              {rippleThemePresets.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.label}
                </option>
              ))}
            </select>
            <Inline gap={8} wrap>
              {rippleThemePresets.map((theme) => (
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
            <Link className="demo-inline-link" to="/components/utilities/ripplethemepresets">rippleThemePresets</Link>
            <Link className="demo-inline-link" to="/components/utilities/buildripplethemevars">buildRippleThemeVars</Link>
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
      <Route path="/components/:sectionId" element={<SectionPage />} />
      <Route path="/components/:sectionId/index" element={<SectionPage />} />
      <Route path="/components/:sectionId/:componentSlug" element={<ComponentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function DocsShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [themeId, setThemeId] = useState(defaultRippleTheme.id);

  const entries = useMemo(() => getAllDocEntries(), []);
  const totalComponents = entries.length;
  const activeTheme = useMemo(
    () => rippleThemePresets.find((theme) => theme.id === themeId) ?? defaultRippleTheme,
    [themeId],
  );

  useEffect(() => {
    const root = document.documentElement;
    const vars = buildRippleThemeVars(activeTheme);
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
    const componentMatch = docsCatalog
      .flatMap((section) => section.components)
      .find((component) => component.path === location.pathname);
    if (componentMatch) return componentMatch.name;
    const sectionMatch = docsCatalog.find((section) => section.path === location.pathname);
    return sectionMatch?.label ?? "Docs";
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
          title="Ripple UI"
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
                <div className="demo-sidebar-meta">
                  <span className="demo-sidebar-meta-label">Theme</span>
                  <select
                    aria-label="Select theme preset"
                    className="demo-theme-select"
                    value={themeId}
                    onChange={(event) => setThemeId(event.target.value)}
                  >
                    {rippleThemePresets.map((theme) => (
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
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <DocsShell />
    </HashRouter>
  );
}
