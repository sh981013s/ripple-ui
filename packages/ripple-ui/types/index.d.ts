import * as React from "react";

export type RippleTone = "default" | "neutral" | "accent" | "success" | "warning" | "danger";
export type RippleSize = "sm" | "md" | "lg";
export type RippleRadius = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "primary" | "weak" | "ghost" | "icon" | "fill";
export type ButtonColor = "primary" | "danger" | "neutral";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonDisplay = "inline" | "block";

export interface ActionConfig {
  label: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  tone?: RippleTone;
  icon?: string | React.ReactNode;
  iconPosition?: "leading" | "trailing";
}

export interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  tone?: "default" | "muted" | "accent" | "success" | "warning";
  radius?: RippleRadius;
  children?: React.ReactNode;
}
export declare function Surface(props: SurfaceProps): React.JSX.Element;

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  gap?: number;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Stack(props: StackProps): React.JSX.Element;

export interface InlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  gap?: number;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Inline(props: InlineProps): React.JSX.Element;

export interface CardProps extends SurfaceProps {}
export declare function Card(props: CardProps): React.JSX.Element;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: RippleSize;
  tone?: "default" | "accent" | "success" | "warning";
  status?: "online" | "busy" | "away";
}
export declare function Avatar(props: AvatarProps): React.JSX.Element;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: RippleTone;
  variant?: "soft" | "solid";
  size?: RippleSize;
  dot?: boolean;
  count?: number;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): React.JSX.Element;

export interface BorderProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  inset?: boolean;
  strong?: boolean;
}
export declare function Border(props: BorderProps): React.JSX.Element;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  display?: ButtonDisplay;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.JSX.Element;

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
  size?: RippleSize;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  panelClassName?: string;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): React.JSX.Element | null;

export interface PopoverProps {
  open?: boolean;
  onClose?: () => void;
  trigger: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  panelClassName?: string;
  panelStyle?: React.CSSProperties;
  placement?: "top" | "bottom";
  align?: "start" | "center" | "end";
}
export declare function Popover(props: PopoverProps): React.JSX.Element;
export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  placement?: "top" | "bottom";
  arrow?: boolean;
  children?: React.ReactNode;
}
export declare function Bubble(props: BubbleProps): React.JSX.Element;
export interface FullTooltipProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  placement?: "top" | "bottom";
  className?: string;
  children?: React.ReactNode;
}
export declare function FullTooltip(props: FullTooltipProps): React.JSX.Element;

export interface AlertDialogProps extends Omit<DialogProps, "footer" | "children"> {
  confirmLabel?: React.ReactNode;
  onConfirm?: () => void;
  tone?: "primary" | "danger";
}
export declare function AlertDialog(props: AlertDialogProps): React.JSX.Element | null;

export interface ConfirmDialogProps extends Omit<DialogProps, "footer" | "children"> {
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onConfirm?: () => void;
  tone?: "primary" | "danger";
}
export declare function ConfirmDialog(props: ConfirmDialogProps): React.JSX.Element | null;

export type MenuItem =
  | { type: "divider"; key?: React.Key }
  | { type: "header"; key?: React.Key; label: React.ReactNode }
  | {
      type?: "item";
      key?: React.Key;
      label: React.ReactNode;
      icon?: string | React.ReactNode;
      description?: React.ReactNode;
      shortcut?: React.ReactNode;
      checked?: boolean;
      disabled?: boolean;
      tone?: RippleTone;
      onSelect?: () => void;
    };

export interface MenuProps {
  open?: boolean;
  onClose?: () => void;
  trigger: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number | string;
  items?: MenuItem[];
  className?: string;
  panelClassName?: string;
}
export declare function Menu(props: MenuProps): React.JSX.Element;

export interface DropdownItem {
  label: React.ReactNode;
  value: string;
}
export interface DropdownProps {
  label?: React.ReactNode;
  placeholder?: React.ReactNode;
  items?: DropdownItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function Dropdown(props: DropdownProps): React.JSX.Element;

export interface CommandItem {
  title: string;
  description?: string;
  shortcut?: React.ReactNode;
  onSelect?: () => void;
}
export interface CommandPaletteProps {
  open?: boolean;
  onClose?: () => void;
  commands?: CommandItem[];
  title?: React.ReactNode;
  placeholder?: string;
  className?: string;
}
export declare function CommandPalette(props: CommandPaletteProps): React.JSX.Element | null;

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "accent" | "neutral" | "success" | "warning";
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): React.JSX.Element;

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: "hero" | "title" | "body" | "label" | "caption";
  children?: React.ReactNode;
}
export declare function Text(props: TextProps): React.JSX.Element;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): React.JSX.Element;
export declare const iconNames: string[];
export interface IconCoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  children?: React.ReactNode;
}
export declare function IconCore(props: IconCoreProps): React.JSX.Element;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "default" | "accent" | "subtle";
  size?: RippleSize;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): React.JSX.Element;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  stretch?: boolean;
  size?: "sm" | "md";
  variant?: "pill" | "underline";
  children?: React.ReactNode;
}
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: "sm" | "md";
  children?: React.ReactNode;
}
export declare function Tabs(props: TabsProps): React.JSX.Element;
export declare function Tab(props: TabProps): React.JSX.Element;

export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
}
export declare function InfoRow(props: InfoRowProps): React.JSX.Element;

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}
export declare function SectionHeader(props: SectionHeaderProps): React.JSX.Element;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  warning?: React.ReactNode;
  success?: React.ReactNode;
  validationState?: "default" | "success" | "warning" | "error";
  validationMessage?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  leading?: React.ReactNode | string;
  trailing?: React.ReactNode | string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  clearLabel?: string;
  actionLabel?: React.ReactNode;
  onActionClick?: () => void;
  passwordToggle?: boolean;
  revealed?: boolean;
  onToggleReveal?: () => void;
  revealLabel?: string;
  hideLabel?: string;
  size?: RippleSize;
  variant?: "default" | "filled" | "quiet";
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
}
export declare function Input(props: InputProps): React.JSX.Element;

export interface TextFieldProps extends InputProps {}
export declare function TextField(props: TextFieldProps): React.JSX.Element;
export declare function TextFieldClearable(props: TextFieldProps): React.JSX.Element;
export declare function TextFieldButton(props: TextFieldProps): React.JSX.Element;
export declare function TextFieldPassword(props: TextFieldProps): React.JSX.Element;

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  warning?: React.ReactNode;
  success?: React.ReactNode;
  validationState?: "default" | "success" | "warning" | "error";
  validationMessage?: React.ReactNode;
  size?: RippleSize;
  variant?: "default" | "filled" | "quiet";
  className?: string;
  textareaClassName?: string;
  disabled?: boolean;
}
export declare function TextArea(props: TextAreaProps): React.JSX.Element;

export interface SearchBarProps extends InputProps {}
export declare function SearchBar(props: SearchBarProps): React.JSX.Element;

export interface SearchFieldProps extends InputProps {
  resultCount?: number;
  suggestions?: string[];
  onSuggestionSelect?: (value: string) => void;
}
export declare function SearchField(props: SearchFieldProps): React.JSX.Element;
export declare function SearchFieldResult(props: SearchFieldProps): React.JSX.Element;
export declare function SearchFieldSuggest(props: SearchFieldProps): React.JSX.Element;

export interface DatePickerProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  warning?: React.ReactNode;
  success?: React.ReactNode;
  validationState?: "default" | "success" | "warning" | "error";
  validationMessage?: React.ReactNode;
  before?: React.ReactNode;
  size?: RippleSize;
  variant?: "default" | "filled" | "quiet";
  className?: string;
  inputClassName?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: { target: { value: string; name?: string }; currentTarget: { value: string; name?: string } }) => void;
  placeholder?: string;
  disabled?: boolean;
  minYear?: number;
  maxYear?: number;
  sheetTitle?: string;
  sheetEyebrow?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  clearLabel?: string;
  todayLabel?: string;
  compact?: boolean;
  name?: string;
}
export declare function DatePicker(props: DatePickerProps): React.JSX.Element;
export declare function DatePickerCompact(props: DatePickerProps): React.JSX.Element;
export declare function WheelDatePicker(props: DatePickerProps): React.JSX.Element;
export interface WheelDateSheetProps {
  open: boolean;
  onClose?: () => void;
  value?: string;
  defaultValue?: string;
  onChange?: (event: { target: { value: string }; currentTarget: { value: string } }) => void;
  minYear?: number;
  maxYear?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export declare function WheelDateSheet(props: WheelDateSheetProps): React.JSX.Element;

export interface SelectProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  warning?: React.ReactNode;
  success?: React.ReactNode;
  validationState?: "default" | "success" | "warning" | "error";
  validationMessage?: React.ReactNode;
  placeholder?: React.ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: React.ReactNode;
  header?: React.ReactNode;
  size?: RippleSize;
  variant?: "default" | "filled" | "quiet";
  className?: string;
  selectClassName?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: { target: { value: string; name?: string }; currentTarget: { value: string; name?: string } }) => void;
  name?: string;
}
export declare function Select(props: SelectProps): React.JSX.Element;
export declare function SelectQuiet(props: SelectProps): React.JSX.Element;
export declare function SelectSearchable(props: SelectProps): React.JSX.Element;

export interface SelectorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  type?: "underline" | "arrow" | "clear";
  size?: RippleSize;
  children?: React.ReactNode;
}
export declare function Selector(props: SelectorProps): React.JSX.Element;
export interface WheelOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}
export interface WheelProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: WheelOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  visibleCount?: number;
}
export declare function Wheel(props: WheelProps): React.JSX.Element;

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: RippleSize;
  tone?: "accent" | "success" | "warning";
  className?: string;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): React.JSX.Element;

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: "default" | "success" | "warning" | "danger";
  size?: RippleSize;
  variant?: "soft" | "solid";
  badge?: React.ReactNode;
  icon?: React.ReactNode | string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
}
export declare function Toast(props: ToastProps): React.JSX.Element;

export interface SnackbarProps {
  open: boolean;
  message?: React.ReactNode;
  action?: React.ReactNode;
  tone?: "default" | "success" | "warning" | "danger";
  align?: "center" | "left";
  icon?: React.ReactNode | string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}
export declare function Snackbar(props: SnackbarProps): React.JSX.Element | null;

export interface ResultProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: RippleTone;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: ActionConfig;
  secondaryAction?: ActionConfig;
}
export declare function Result(props: ResultProps): React.JSX.Element;

export interface ResultButtonProps extends ButtonProps {}
export declare function ResultButton(props: ResultButtonProps): React.JSX.Element;

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "default" | "neutral" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode | string;
  iconPosition?: "leading" | "trailing";
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  underline?: boolean;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children?: React.ReactNode;
}
export declare function TextButton(props: TextButtonProps): React.JSX.Element;

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: RippleSize;
  label?: React.ReactNode;
  tone?: "accent" | "success" | "warning" | "danger";
  centered?: boolean;
  overlay?: boolean;
  className?: string;
}
export declare function Loader(props: LoaderProps): React.JSX.Element;

export interface FullScreenLoaderProps {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: "accent" | "success" | "warning" | "danger";
  className?: string;
  dismissible?: boolean;
  dismissLabel?: string;
  closeOnBackdrop?: boolean;
  onDismiss?: () => void;
}
export declare function FullScreenLoader(props: FullScreenLoaderProps): React.JSX.Element | null;

export interface LoadingCompleteViewProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "success" | "warning" | "danger";
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryAction?: ActionConfig;
  secondaryAction?: ActionConfig;
}
export declare function LoadingCompleteView(props: LoadingCompleteViewProps): React.JSX.Element;

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  showValue?: boolean;
  onChange?: (value: number) => void;
}
export declare function Rating(props: RatingProps): React.JSX.Element;

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number | string;
  height?: number | string;
  radius?: RippleRadius;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): React.JSX.Element;

export interface BottomSheetProps {
  open: boolean;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
  size?: RippleSize;
  variant?: "floating" | "flat";
  header?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  tertiaryAction?: ActionConfig;
  secondaryAction?: ActionConfig;
  primaryAction?: ActionConfig;
  className?: string;
  panelClassName?: string;
  children?: React.ReactNode;
}
export declare function BottomSheet(props: BottomSheetProps): React.JSX.Element | null;

export interface ModalProps extends Omit<BottomSheetProps, "header" | "description" | "variant"> {
  tone?: RippleTone;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  showCloseButton?: boolean;
  closeLabel?: string;
}
export declare function Modal(props: ModalProps): React.JSX.Element | null;

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}
export declare function Accordion(props: AccordionProps): React.JSX.Element;
export declare function AccordionItem(props: AccordionItemProps): React.JSX.Element;

export interface TooltipProps {
  content: React.ReactNode;
  position?: "top" | "bottom";
  className?: string;
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): React.JSX.Element;

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  inset?: boolean;
}
export declare function Divider(props: DividerProps): React.JSX.Element;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): React.JSX.Element;

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  divided?: boolean;
  children?: React.ReactNode;
}
export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  badges?: React.ReactNode;
  selector?: React.ReactNode;
  rightText?: React.ReactNode;
  rightArrow?: boolean;
  rightButton?: React.ReactNode;
  titleTextButton?: React.ReactNode;
  compact?: boolean;
  divider?: boolean;
  children?: React.ReactNode;
}
export interface ListFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export declare function List(props: ListProps): React.JSX.Element;
export declare function ListHeader(props: ListHeaderProps): React.JSX.Element;
export declare function ListFooter(props: ListFooterProps): React.JSX.Element;

export interface ListRowProps extends React.HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  leading?: React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  rightArrow?: boolean;
  trailing?: React.ReactNode;
  interactive?: boolean;
  size?: RippleSize;
  variant?: "default" | "muted";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
export declare function ListRow(props: ListRowProps): React.JSX.Element;

export interface TableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}
export declare function TableRow(props: TableRowProps): React.JSX.Element;

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: RippleTone;
  action?: React.ReactNode;
  compact?: boolean;
}
export declare function NoticeBanner(props: BannerProps): React.JSX.Element;
export declare function Banner(props: BannerProps): React.JSX.Element;

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
export declare function EmptyState(props: EmptyStateProps): React.JSX.Element;

export interface FadeInProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  delay?: number;
  children?: React.ReactNode;
}
export declare function FadeIn(props: FadeInProps): React.JSX.Element;
export interface FontScaleLimitProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  children?: React.ReactNode;
}
export declare function FontScaleLimit(props: FontScaleLimitProps): React.JSX.Element;

export interface GridListProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: number;
  children?: React.ReactNode;
}
export declare function GridList(props: GridListProps): React.JSX.Element;
export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  query?: string;
  tone?: "accent" | "success" | "warning";
}
export declare function Highlight(props: HighlightProps): React.JSX.Element;

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  tone?: "accent" | "success" | "warning" | "danger";
}
export declare function ProgressBar(props: ProgressBarProps): React.JSX.Element;

export interface ProgressStepProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  label?: React.ReactNode;
  description?: React.ReactNode;
  status?: "done" | "current" | "upcoming";
}
export declare function ProgressStep(props: ProgressStepProps): React.JSX.Element;

export interface ProgressStepperStep {
  key?: React.Key;
  label: React.ReactNode;
  description?: React.ReactNode;
}
export interface ProgressStepperProps extends React.HTMLAttributes<HTMLOListElement> {
  current?: number;
  steps?: ProgressStepperStep[];
}
export declare function ProgressStepper(props: ProgressStepperProps): React.JSX.Element;

export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
  badges?: React.ReactNode;
  titleSelector?: React.ReactNode;
  subtitleSelector?: React.ReactNode;
  rightButton?: React.ReactNode;
  rightArrow?: boolean;
  upper?: React.ReactNode;
  subtitleTop?: React.ReactNode;
  subtitleBottom?: React.ReactNode;
  lower?: React.ReactNode;
  right?: React.ReactNode;
  rightVerticalAlign?: "top" | "center" | "bottom";
  size?: RippleSize;
  variant?: "floating" | "flat";
  surface?: "default" | "muted" | "accent";
  divider?: boolean;
  sticky?: boolean;
  align?: "center" | "left";
}
export declare function TopBar(props: TopBarProps): React.JSX.Element;
export interface TopProps extends TopBarProps {}
export declare function Top(props: TopProps): React.JSX.Element;
export interface TopRightButtonProps extends ButtonProps {
  label?: React.ReactNode;
  icon?: string;
}
export declare function TopRightButton(props: TopRightButtonProps): React.JSX.Element;
export interface TopRightArrowProps extends IconButtonProps {}
export declare function TopRightArrow(props: TopRightArrowProps): React.JSX.Element;
export interface TopSubtitleBadgesProps {
  items?: React.ReactNode[];
}
export declare function TopSubtitleBadges(props: TopSubtitleBadgesProps): React.JSX.Element;
export declare function TopSubtitleSelector(props: SelectorProps): React.JSX.Element;
export declare function TopTitleSelector(props: SelectorProps): React.JSX.Element;

export interface SegmentedOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}
export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  options: SegmentedOption[];
}
export declare function SegmentedControl(props: SegmentedControlProps): React.JSX.Element;

export interface StepperStep {
  key?: React.Key;
  label: React.ReactNode;
  description?: React.ReactNode;
}
export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  steps?: StepperStep[];
  current?: number;
  orientation?: "horizontal" | "vertical";
}
export declare function Stepper(props: StepperProps): React.JSX.Element;

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}
export declare function Pagination(props: PaginationProps): React.JSX.Element;

export interface TableColumn<Row = Record<string, unknown>> {
  key: keyof Row & string;
  title: React.ReactNode;
  align?: "left" | "center" | "right";
  render?: (value: Row[keyof Row], row: Row) => React.ReactNode;
}
export interface TableProps<Row = Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement> {
  columns?: TableColumn<Row>[];
  rows?: Row[];
  dense?: boolean;
}
export declare function Table<Row = Record<string, unknown>>(props: TableProps<Row>): React.JSX.Element;

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "type"> {
  label?: React.ReactNode;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  tone?: "accent" | "success" | "warning" | "danger";
  showValue?: boolean;
  className?: string;
}
export declare function Slider(props: SliderProps): React.JSX.Element;
export interface SliderTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | string;
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  placement?: "top" | "bottom";
}
export declare function SliderTooltip(props: SliderTooltipProps): React.JSX.Element;

export interface BarChartDatum {
  key?: React.Key;
  label: React.ReactNode;
  value: number;
  tone?: "accent" | "success" | "warning" | "danger" | "neutral";
}
export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: BarChartDatum[];
  max?: number;
  showValue?: boolean;
}
export declare function BarChart(props: BarChartProps): React.JSX.Element;
export interface ColorSchemeItem {
  key?: React.Key;
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
}
export interface ColorSchemeAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: ColorSchemeItem[];
}
export declare function ColorSchemeArea(props: ColorSchemeAreaProps): React.JSX.Element;

export interface BottomInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
export declare function BottomInfo(props: BottomInfoProps): React.JSX.Element;
export interface BottomCTAAction extends Omit<ButtonProps, "children"> {
  label: React.ReactNode;
}
export interface BottomCTADoubleProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryAction: BottomCTAAction;
  secondaryAction?: BottomCTAAction;
  inset?: boolean;
}
export declare function BottomCTADouble(props: BottomCTADoubleProps): React.JSX.Element;

export interface AccessoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
}
export declare function AccessoryButton(props: AccessoryButtonProps): React.JSX.Element;

export interface DoughnutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: number;
  stroke?: number;
  tone?: RippleTone;
  label?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function DoughnutChart(props: DoughnutChartProps): React.JSX.Element;

export interface AlphabetKeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (key: string) => void;
  maxLength?: number;
  disabled?: boolean;
}
export declare function AlphabetKeypad(props: AlphabetKeypadProps): React.JSX.Element;

export interface NumberKeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (key: string) => void;
  allowDecimal?: boolean;
  disabled?: boolean;
  maxLength?: number;
}
export declare function NumberKeypad(props: NumberKeypadProps): React.JSX.Element;

export interface NumericSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  formatter?: (value: number) => React.ReactNode;
}
export declare function NumericSpinner(props: NumericSpinnerProps): React.JSX.Element;

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}
export declare function Spacing(props: SpacingProps): React.JSX.Element;
export interface StepperRowProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: "done" | "current" | "upcoming";
}
export declare function StepperRow(props: StepperRowProps): React.JSX.Element;
export interface LoaderAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  tone?: "accent" | "success" | "warning" | "danger";
  label?: React.ReactNode;
}
export declare function LoaderAnimation(props: LoaderAnimationProps): React.JSX.Element;

export interface AgreementV4BadgeProps {
  tone?: "neutral" | "accent" | "success" | "warning";
  children?: React.ReactNode;
  className?: string;
}
export interface AgreementV4CheckboxProps extends CheckboxProps {}
export interface AgreementV4DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export interface AgreementV4GroupProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AgreementV4HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AgreementV4PressableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  right?: React.ReactNode;
}
export interface AgreementV4RightArrowProps extends React.HTMLAttributes<HTMLSpanElement> {}
export interface AgreementV4NecessityProps extends React.HTMLAttributes<HTMLSpanElement> {
  required?: boolean;
}
export interface AgreementV4CollapsibleProps {
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export interface AgreementV4CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export interface AgreementV4CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AgreementV4IndentPushableProps {
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export interface AgreementV4IndentPushableTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export interface AgreementV4IndentPushableContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare function AgreementV4Badge(props: AgreementV4BadgeProps): React.JSX.Element;
export declare function AgreementV4Checkbox(props: AgreementV4CheckboxProps): React.JSX.Element;
export declare function AgreementV4Description(props: AgreementV4DescriptionProps): React.JSX.Element;
export declare function AgreementV4Group(props: AgreementV4GroupProps): React.JSX.Element;
export declare function AgreementV4Header(props: AgreementV4HeaderProps): React.JSX.Element;
export declare function AgreementV4Pressable(props: AgreementV4PressableProps): React.JSX.Element;
export declare function AgreementV4RightArrow(props: AgreementV4RightArrowProps): React.JSX.Element;
export declare function AgreementV4Necessity(props: AgreementV4NecessityProps): React.JSX.Element;
export declare function AgreementV4Collapsible(props: AgreementV4CollapsibleProps): React.JSX.Element;
export declare function AgreementV4CollapsibleTrigger(props: AgreementV4CollapsibleTriggerProps): React.JSX.Element;
export declare function AgreementV4CollapsibleContent(props: AgreementV4CollapsibleContentProps): React.JSX.Element | null;
export declare function AgreementV4IndentPushable(props: AgreementV4IndentPushableProps): React.JSX.Element;
export declare function AgreementV4IndentPushableTrigger(props: AgreementV4IndentPushableTriggerProps): React.JSX.Element;
export declare function AgreementV4IndentPushableContent(props: AgreementV4IndentPushableContentProps): React.JSX.Element | null;
export interface AgreementV4Namespace {
  Badge: typeof AgreementV4Badge;
  Checkbox: typeof AgreementV4Checkbox;
  Collapsible: typeof AgreementV4Collapsible;
  CollapsibleContent: typeof AgreementV4CollapsibleContent;
  CollapsibleTrigger: typeof AgreementV4CollapsibleTrigger;
  Description: typeof AgreementV4Description;
  Group: typeof AgreementV4Group;
  Header: typeof AgreementV4Header;
  IndentPushable: typeof AgreementV4IndentPushable;
  IndentPushableContent: typeof AgreementV4IndentPushableContent;
  IndentPushableTrigger: typeof AgreementV4IndentPushableTrigger;
  Necessity: typeof AgreementV4Necessity;
  Pressable: typeof AgreementV4Pressable;
  RightArrow: typeof AgreementV4RightArrow;
}
export declare const AgreementV4: AgreementV4Namespace;
export interface IOSFontA11yStyleValue extends React.CSSProperties {}
export declare const IOSFontA11yStyle: IOSFontA11yStyleValue;
export type SafeAreaEdge = "top" | "right" | "bottom" | "left";
export declare function safeAreaInset(edge: SafeAreaEdge, fallback?: number): string;
export interface UseBottomSheetResult {
  open: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  toggleSheet: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function useBottomSheet(initialOpen?: boolean): UseBottomSheetResult;

export interface ListHeaderRightTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}
export declare function ListHeaderRightText(props: ListHeaderRightTextProps): React.JSX.Element;
export interface ListHeaderRightArrowProps extends React.HTMLAttributes<HTMLSpanElement> {}
export declare function ListHeaderRightArrow(props: ListHeaderRightArrowProps): React.JSX.Element;
export declare function ListHeaderTitleSelector(props: SelectorProps): React.JSX.Element;
export declare function ListHeaderTitleTextButton(props: TextButtonProps): React.JSX.Element;

export interface ListRowImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export declare function ListRowImageContainer(props: ListRowImageContainerProps): React.JSX.Element;
export interface ListRowImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}
export declare function ListRowImage(props: ListRowImageProps): React.JSX.Element;
export interface ListRowIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  children?: React.ReactNode;
}
export declare function ListRowIcon(props: ListRowIconProps): React.JSX.Element;
export declare function ListRowFillIcon(props: ListRowIconProps): React.JSX.Element;
export interface ListRowIconButtonProps extends IconButtonProps {
  name: string;
}
export declare function ListRowIconButton(props: ListRowIconButtonProps): React.JSX.Element;

export declare function MenuTrigger<T extends Record<string, unknown>>(props?: T): T;
export declare function MenuHeader(props?: Partial<Extract<MenuItem, { type: "header" }>>): MenuItem;
export declare function MenuDropdownItem(props?: Partial<Extract<MenuItem, { type?: "item" }>>): MenuItem;
export declare function MenuDropdownCheckItem(props?: Partial<Extract<MenuItem, { type?: "item" }>>): MenuItem;
export declare function MenuDropdownIcon<T extends Record<string, unknown>>(icon: string, props?: T): T & { icon: string };
