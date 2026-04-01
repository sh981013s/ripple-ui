import React, { useMemo, useState } from "react";
import {
  BottomSheet,
  Button,
  Chip,
  Dialog,
  IconButton,
  Inline,
  SectionHeader,
  Snackbar,
  Stack,
  TopBar,
} from "@ripple-ui/core";
import catalog, { ComponentDocCard } from "./catalog.jsx";

export default function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  const nav = useMemo(
    () =>
      catalog.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="demo-nav-link">
          {section.label}
        </a>
      )),
    [],
  );

  return (
    <div className="demo-app">
      <div className="demo-shell">
        <TopBar
          title="Ripple UI"
          subtitleTop="Design System"
          subtitleBottom="Generated component docs"
          align="left"
          leading={<IconButton tone="subtle" aria-label="menu">≡</IconButton>}
          trailing={<Chip tone="accent">core</Chip>}
        />

        <section className="demo-hero">
          <div className="demo-hero-copy">
            <span className="demo-hero-eyebrow">Component Library</span>
            <h1 className="demo-hero-title">Ripple UI</h1>
            <p className="demo-hero-description">A self-authored mobile product UI kit tuned toward calm, dense, TDS-like app surfaces.</p>
          </div>
          <div className="demo-hero-actions">
            <Button size="large" onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Button variant="ghost" size="large" onClick={() => setSheetOpen(true)}>Open Sheet</Button>
          </div>
        </section>

        <div className="demo-layout">
          <aside className="demo-sidebar">
            <div className="demo-sidebar-card">
              <Stack gap={14}>
                <SectionHeader eyebrow="docs" title="Sections" description="Generated from metadata." />
                <nav className="demo-nav">{nav}</nav>
                <Inline gap={10} wrap>
                  <Button variant="ghost" size="large" onClick={() => setDialogOpen(true)}>Dialog</Button>
                  <Button variant="weak" size="large" onClick={() => setSheetOpen(true)}>Sheet</Button>
                </Inline>
              </Stack>
            </div>
          </aside>

          <main className="demo-content">
            {catalog.map((section) => (
              <section key={section.id} id={section.id} className="demo-section">
                <SectionHeader
                  eyebrow="category"
                  title={section.label}
                  description={`${section.components.length} components documented in this group.`}
                />
                <div className="docs-card-grid">
                  {section.components.map((component) => (
                    <ComponentDocCard key={component.name} component={component} />
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Review dialog"
        description="Dialogs and sheets are still controlled as live examples."
        footer={<Button display="block" onClick={() => setDialogOpen(false)}>Close</Button>}
      >
        <Stack gap={16}>
          <p className="demo-overlay-copy">Use this surface to validate spacing, typography and CTA density inside a constrained modal layout.</p>
        </Stack>
      </Dialog>

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        size="lg"
        header="Bottom sheet example"
        description="Live overlay sample from the generated docs page."
        footer={<Button display="block" onClick={() => setSheetOpen(false)}>Done</Button>}
      >
        <Stack gap={16}>
          <p className="demo-overlay-copy">The sheet should feel anchored, breathable, and more action-oriented than the centered dialog.</p>
        </Stack>
      </BottomSheet>

      <Snackbar
        open={snackbarOpen}
        align="left"
        message="Generated docs page loaded successfully."
        action={<Button variant="ghost" onClick={() => setSnackbarOpen(false)}>Dismiss</Button>}
      />
    </div>
  );
}
