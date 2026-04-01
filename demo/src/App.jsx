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
  Banner,
  Button,
  Card,
  Chip,
  Inline,
  SearchField,
  SectionHeader,
  Stack,
  Text,
  TopBar,
} from "@ripple-ui/core";
import catalog, {
  ComponentDocCard,
  docsCatalog,
  getAllDocEntries,
  getComponentDocs,
  getSectionDocs,
} from "./catalog.jsx";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function SidebarNav() {
  return (
    <div className="demo-nav" aria-label="Documentation navigation">
      <NavLink to="/" end className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}>
        Overview
      </NavLink>
      {docsCatalog.map((section) => (
        <NavLink
          key={section.id}
          to={section.path}
          className={({ isActive }) => `demo-nav-link${isActive ? " is-active" : ""}`}
        >
          {section.label}
        </NavLink>
      ))}
    </div>
  );
}

function DocsOverviewPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install @ripple-ui/core");
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
                <pre className="demo-code-block">npm install @ripple-ui/core</pre>
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
                    <Link key={component.slug} className="demo-inline-link" to={component.path}>
                      {component.name}
                    </Link>
                  ))}
                </div>
                <Button display="block" onClick={() => navigate(section.path)}>
                  Open section
                </Button>
              </Stack>
            </Card>
          ))}
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
            footer={
              <Inline gap={10} wrap>
                <Link className="demo-inline-link" to={component.path}>
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
          <Link className="demo-inline-link" to={section.path}>
            {section.label}
          </Link>
          <Text variant="caption" className="demo-breadcrumb-sep">/</Text>
          <Text variant="caption" className="demo-breadcrumb-current">{component.name}</Text>
        </Inline>
        <SectionHeader
          eyebrow="component"
          title={component.name}
          description={component.description}
        />
        <ComponentDocCard component={component} />
      </Stack>
    </section>
  );
}

function DocsContent() {
  return (
    <Routes>
      <Route path="/" element={<DocsOverviewPage />} />
      <Route path="/components/:sectionId" element={<SectionPage />} />
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
    <BrowserRouter>
      <DocsShell />
    </BrowserRouter>
  );
}
