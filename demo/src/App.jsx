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
          subtitle="Generated component docs"
          leading={<IconButton tone="subtle" aria-label="menu">≡</IconButton>}
          trailing={<Chip tone="accent">core</Chip>}
        />

        <div className="demo-layout">
          <aside className="demo-sidebar">
            <div className="demo-sidebar-card">
              <Stack gap={14}>
                <SectionHeader eyebrow="docs" title="Sections" description="Generated from metadata." />
                <nav className="demo-nav">{nav}</nav>
                <Inline gap={10} wrap>
                  <Button variant="ghost" onClick={() => setDialogOpen(true)}>Dialog</Button>
                  <Button variant="weak" onClick={() => setSheetOpen(true)}>Sheet</Button>
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

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Stack gap={16}>
          <SectionHeader title="Review dialog" description="Dialogs and sheets are still controlled as live examples." />
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </Stack>
      </Dialog>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} size="lg">
        <Stack gap={16}>
          <SectionHeader title="Bottom sheet example" description="Live overlay sample from the generated docs page." />
          <Button onClick={() => setSheetOpen(false)}>Done</Button>
        </Stack>
      </BottomSheet>

      <Snackbar
        open={snackbarOpen}
        message="Generated docs page loaded successfully."
        action={<Button variant="ghost" onClick={() => setSnackbarOpen(false)}>Dismiss</Button>}
      />
    </div>
  );
}
