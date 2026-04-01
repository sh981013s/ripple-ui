# Ripple UI for AI Coding

This guide is for agents, code generators, and vibe-coding workflows that need to produce UI using `@ripple-ui/core`.

## Goal

Use Ripple UI to generate calm, mobile-first product surfaces with a fintech-friendly interaction model.

The target feel is:

- quiet
- compact but breathable
- neutral-first with a single accent
- highly structured
- low-friction and low-noise

## Design Principles

1. Prefer neutral surfaces over colorful ones.
2. Use one primary action per screen or section.
3. Use accent color to indicate intent, not decoration.
4. Keep information hierarchy shallow.
5. Avoid nested cards unless a modal, sheet, or preview truly requires it.
6. Use short labels and short supporting text.
7. Use overlays sparingly and for focused decisions.
8. Prefer list rows and banners over custom card compositions when showing structured information.

## Composition Rules

### Use these by default

- `TopBar` for page headers
- `SectionHeader` for section introductions
- `Card` or `Surface` for bounded content
- `Button` for CTA
- `List`, `ListRow`, `TableRow`, `InfoRow` for structured information
- `Banner` or `NoticeBanner` for status or alerts
- `Dialog`, `BottomSheet`, `Snackbar`, `Toast` for temporary feedback or decisions

### Avoid these patterns

- multiple primary buttons in the same narrow viewport
- large decorative gradients
- nested elevated cards inside elevated cards
- long paragraphs inside banners
- using `Badge` as a main CTA
- mixing `Tabs`, `SegmentedControl`, and `Selector` in one control zone

## Interaction Rules

- A component should feel responsive within 120-180ms for press feedback.
- Motion should be small and directional.
- Overlays should not block more than necessary.
- Searchable controls should support keyboard navigation.
- Interactive previews should demonstrate real behavior, not static screenshots.

## Content Rules

- Titles should be short and noun-first.
- Supporting descriptions should fit within one to two lines.
- Validation messages should be precise and action-oriented.
- Status copy should be concrete, e.g. `Saved successfully.` instead of `Operation completed.`

## Component Selection Heuristics

### When you need navigation

- Use `TopBar` for page-level navigation
- Use `Tabs` for view switches
- Use `SegmentedControl` for mode switches
- Use `Selector` for compact local toggles

### When you need input

- Use `Input` for single line text
- Use `TextArea` for long-form entry
- Use `SearchField` for in-context filtering
- Use `SearchBar` for page-level search
- Use `Select` for list selection
- Use `DatePicker` for date picking
- Use `Switch`, `Checkbox`, `Radio` for binary or choice input

### When you need feedback

- Use `Snackbar` for temporary global confirmation
- Use `Toast` for compact inline feedback
- Use `Banner` or `NoticeBanner` for persistent page-level information
- Use `Loader` or `Skeleton` while content is loading

### When you need overlays

- Use `Dialog` for focused centered decisions
- Use `AlertDialog` for single acknowledgment flows
- Use `ConfirmDialog` for destructive or irreversible confirmation
- Use `BottomSheet` for mobile-first secondary flows
- Use `Popover`, `Menu`, `Dropdown` for anchored local actions
- Use `CommandPalette` for command search and launch

## Safe Defaults

Use these defaults unless the prompt strongly implies otherwise:

- `Button`: `variant="primary"`, `size="medium"`
- `Badge`: `tone="neutral"`, `variant="soft"`
- `Input`: `variant="default"`, `size="md"`
- `Card`: default tone and radius
- `Dialog`: `size="md"`
- `BottomSheet`: `size="md"`
- `Tabs`: `stretch={true}` on mobile-width layouts
- `Snackbar`: `align="left"`

## Anti-Patterns

Do not generate:

- random custom CSS for buttons when a Ripple UI button exists
- ad hoc modal layouts when `Dialog` or `BottomSheet` fits
- icon-only controls without `aria-label`
- more than one stacked persistent banner in the same section
- giant hero marketing sections for internal/product tools

## Page Assembly Recipes

### Settings page

- `TopBar`
- `SectionHeader`
- `List`
- `ListRow`
- `Switch`
- `Button`

### Review dialog

- `Dialog`
- `Text`
- `Button`

### Search and results

- `TopBar`
- `SearchBar`
- `Banner`
- `List`
- `ListRow`
- `Pagination`

### Data dashboard

- `TopBar`
- `SectionHeader`
- `Card`
- `TableRow`
- `Table`
- `Tabs`

## Imports

Always prefer explicit imports from `@ripple-ui/core`.

Example:

```jsx
import { Button, Card, SectionHeader, Stack, Text } from "@ripple-ui/core";
```

## AI Output Expectations

When generating UI with Ripple UI:

1. Prefer existing primitives over custom wrappers.
2. Use the machine-readable catalog in `/ai/components.json`.
3. Use the page patterns in `/ai/patterns.json`.
4. If a requested design conflicts with Ripple UI principles, produce the closest calm, structured alternative.
5. If uncertain between two components, choose the simpler one.

