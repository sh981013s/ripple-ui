# Calmo UI Prompt Template

Use this as the starting point when asking an AI system to generate screens with Calmo UI.

## Base Prompt

```md
Build this UI using only `@sh981013s/calmo-ui` components where possible.

Follow these rules:
- Prefer calm, neutral-first surfaces.
- Use one primary action per screen or section.
- Prefer `TopBar`, `SectionHeader`, `List`, `ListRow`, `Banner`, `Dialog`, `BottomSheet`, `TextField`, and `Button` over custom wrappers.
- Avoid nested elevated cards unless the interaction truly requires it.
- Keep copy short and product-oriented.
- Use the theme system only through `ThemeProvider` or `calmoThemePresets`.
- Do not invent custom buttons, form fields, or modal layouts if a Calmo UI component exists.

When choosing components:
- page header: `TopBar`
- section intro: `SectionHeader`
- bounded surface: `Card` or `Surface`
- form input: `TextField`, `Input`, `Select`, `DatePicker`
- structured rows: `ListRow`, `TableRow`, `InfoRow`
- feedback: `Banner`, `Toast`, `Snackbar`
- overlays: `Dialog`, `Modal`, `BottomSheet`

Output:
- React code
- imports from `@sh981013s/calmo-ui`
- no nested bullet explanations
- minimal custom CSS
```

## Theme-Aware Prompt Add-On

```md
Wrap the screen in `ThemeProvider` and use a custom theme with:
- accent: #0EA5E9
- ink: #0F172A
- bg: #F8FAFC

Keep success, warning, and danger semantic colors distinct.
```

## Page Recipe Add-On

For settings pages:

```md
Use:
- `TopBar`
- `SectionHeader`
- one or more `List` groups
- `ListRow` for navigation/actions
- `Switch` for binary settings
- one primary `Button` at the bottom
```

For dashboards:

```md
Use:
- `TopBar`
- `Tabs` if needed
- compact summary `Card`s
- `TableRow` and `ListRow`
- `Banner` only if one message is high priority
```

## Hard Constraints

- No custom modal structure if `Dialog`, `Modal`, or `BottomSheet` fits.
- No custom theme tokens outside the Calmo theme API.
- No more than one primary CTA in a compact viewport section.
- No giant hero marketing sections unless explicitly requested.
