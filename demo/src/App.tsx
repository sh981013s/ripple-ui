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
  TopBar,
} from "@sh981013s/ripple-ui";
import catalog, {
  ComponentDocCard,
  docsCatalog,
  getAllDocEntries,
  getComponentDocs,
  getSectionDocs,
} from "./catalog.js";

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

  return (
    <Stack gap={20}>
      <section className="demo-hero">
        <div className="demo-hero-copy">
          <span className="demo-hero-eyebrow">Component Library</span>
          <h1 className="demo-hero-title">Ripple UI</h1>
          <p className="demo-hero-description">Calm product surfaces, mobile-first density, and Toss-inspired interaction patterns.</p>
          <Inline gap={8} wrap>
            <Chip tone="accent">Core</Chip>
            <Chip tone="neutral">Routing docs</Chip>
            <Chip tone="success">Validation states</Chip>
          </Inline>
        </div>
      </section>

      <Banner
        tone="neutral"
        compact
        eyebrow="overview"
        title="Designed for calm product surfaces"
        description="The docs site is route-driven, searchable, and focused on real product composition instead of isolated snippets only."
      />

      <section className="demo-section">
        <SectionHeader
          eyebrow="how to use"
          title="Use Ripple UI in your product"
          description="Install the package, review the docs routes, and adopt it where compact mobile-first product surfaces matter."
        />
        <div className="demo-howto-grid">
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
              <Text variant="caption">Account, commerce, dashboard, fintech, workflow, and mobile-first internal product surfaces.</Text>
            </Stack>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <SectionHeader
          eyebrow="sections"
          title="Browse by component set"
          description={`${catalog.length} grouped sections with dedicated routes.`}
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

  const entries = useMemo(() => getAllDocEntries(), []);
  const totalComponents = entries.length;
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
        entry.description.toLowerCase().includes(q),
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
  );
}

export default function App() {
  return (
    <HashRouter>
      <DocsShell />
    </HashRouter>
  );
}
