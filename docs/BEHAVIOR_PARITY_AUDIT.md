# Calmo UI Behavior Parity Audit

## Scope

This audit tracks parity work against the locally installed public `@toss/tds-mobile` surface.

The current repository now matches the public export-name surface. The remaining work is behavioral and visual, not missing names.

## Status

- Export-name parity: complete
- Root type parity: complete
- Deep import declaration parity: complete
- Docs route coverage: complete
- Interactive demo coverage: broad coverage in place

## Category Review

### Layout and primitives

- `Surface`, `Stack`, `Inline`, `Card`, `Border`, `Spacing`, `FadeIn`
- Status: stable
- Remaining parity work:
  - micro spacing and elevation tuning
  - transition timing consistency

### Actions and navigation

- `Button`, `TextButton`, `IconButton`, `Top`, `TopBar`, `Tabs`, `SegmentedControl`, `Selector`
- Status: strong
- Remaining parity work:
  - pressed-state timing
  - indicator motion tuning
  - supporting-text density

### Forms and secure input

- `Input`, `TextField*`, `TextArea`, `SearchBar`, `SearchField*`, `Select*`, `DatePicker*`, `Wheel*`, `SplitTextField*`, `AlphabetKeypad`, `NumberKeypad`, `NumericSpinner`, `FullSecureKeypad`
- Status: broad parity in place
- Remaining parity work:
  - keyboard navigation edge cases
  - focus restoration after overlay close
  - secure field masking rules
  - wheel inertia and picker motion refinement

### Overlays and flows

- `Dialog`, `Modal`, `AlertDialog`, `ConfirmDialog`, `BottomSheet`, `Popover`, `Menu*`, `Dropdown`, `CommandPalette`
- Agreement flows:
  - `AgreementV4*`
  - `AgreementModule*`
  - `BottomSheetAgreementModule*`
  - `FloatButtonAgreementModule*`
  - `FullPageAgreementModule*`
  - `GradientBottomSheetAgreementModule*`
- Status: complete surface coverage
- Remaining parity work:
  - focus trap precision
  - escape/backdrop consistency
  - stacked overlay ordering
  - sheet/modal motion curves

### Data and lists

- `List*`, `ListHeader*`, `ListRow*`, `Table`, `TableRow`, `GridList`, `InfoRow`, `ProgressStep`, `ProgressStepper`, `Stepper`, `StepperRow`, `Pagination`
- Status: strong
- Remaining parity work:
  - row density matching
  - pagination motion polish
  - sticky header/list composition examples

### Feedback

- `Badge`, `Chip`, `Toast`, `Snackbar`, `Loader`, `LoaderAnimation`, `FullScreenLoader`, `LoadingCompleteView`, `Result`, `ResultButton`, `Rating`, `Skeleton`, `NoticeBanner`, `Banner`, `Bubble`, `Tooltip`, `FullTooltip`
- Status: broad parity in place
- Remaining parity work:
  - dismissal rules
  - reduced-motion adjustments
  - stacking and anchor behavior

### Visual and content utilities

- `BarChart`, `DoughnutChart`, `ColorSchemeArea`, `Slider`, `SliderTooltip`
- `Asset*`, `Paragraph*`, `Post*`, `Highlight`, `FontScaleLimit`
- Status: complete surface coverage
- Remaining parity work:
  - chart animation curves
  - content utility typography nuance

## Priority Order for Future Fidelity Work

1. Forms and secure input
2. Overlays and agreement flows
3. Navigation and list density
4. Feedback motion and dismissal
5. Chart and utility polish

## Verification

- `npm run build:core`
- `npm run build:demo`
