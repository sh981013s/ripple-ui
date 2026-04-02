import fs from "node:fs";
import path from "node:path";

const packageDir = new URL("..", import.meta.url);
const typesDir = path.join(packageDir.pathname, "types");
const componentsDir = path.join(typesDir, "components");
const primitivesDir = path.join(typesDir, "primitives");

/**
 * @typedef {{
 *   file: string;
 *   defaultExport?: string;
 *   namedExports?: string[];
 *   typeExports?: string[];
 *   target: "components" | "primitives";
 * }} TypeEntry
 */

/** @type {TypeEntry[]} */
const entries = [
  { file: "Surface", defaultExport: "Surface", typeExports: ["SurfaceProps"], target: "primitives" },
  { file: "Stack", defaultExport: "Stack", typeExports: ["StackProps"], target: "primitives" },
  { file: "Inline", defaultExport: "Inline", typeExports: ["InlineProps"], target: "primitives" },
  { file: "AccessoryButton", defaultExport: "AccessoryButton", typeExports: ["AccessoryButtonProps"], target: "components" },
  { file: "Accordion", namedExports: ["Accordion", "AccordionItem"], typeExports: ["AccordionProps", "AccordionItemProps"], target: "components" },
  { file: "AgreementModuleContent", defaultExport: "AgreementModuleContent", typeExports: ["AgreementModuleContentProps"], target: "components" },
  { file: "AgreementModuleStagger", defaultExport: "AgreementModuleStagger", typeExports: ["AgreementModuleStaggerProps"], target: "components" },
  { file: "AgreementModuleTop", defaultExport: "AgreementModuleTop", typeExports: ["AgreementModuleTopProps"], target: "components" },
  { file: "AgreementModuleTopTitle", defaultExport: "AgreementModuleTopTitle", typeExports: ["AgreementModuleTopTitleProps"], target: "components" },
  {
    file: "AgreementV4",
    defaultExport: "AgreementV4",
    namedExports: [
      "AgreementV4Badge",
      "AgreementV4Checkbox",
      "AgreementV4Collapsible",
      "AgreementV4CollapsibleContent",
      "AgreementV4CollapsibleTrigger",
      "AgreementV4Description",
      "AgreementV4Group",
      "AgreementV4Header",
      "AgreementV4IndentPushable",
      "AgreementV4IndentPushableContent",
      "AgreementV4IndentPushableTrigger",
      "AgreementV4Necessity",
      "AgreementV4Pressable",
      "AgreementV4RightArrow",
    ],
    typeExports: [
      "AgreementV4Namespace",
      "AgreementV4BadgeProps",
      "AgreementV4CheckboxProps",
      "AgreementV4CollapsibleContentProps",
      "AgreementV4CollapsibleProps",
      "AgreementV4CollapsibleTriggerProps",
      "AgreementV4DescriptionProps",
      "AgreementV4GroupProps",
      "AgreementV4HeaderProps",
      "AgreementV4IndentPushableContentProps",
      "AgreementV4IndentPushableProps",
      "AgreementV4IndentPushableTriggerProps",
      "AgreementV4NecessityProps",
      "AgreementV4PressableProps",
      "AgreementV4RightArrowProps",
    ],
    target: "components",
  },
  { file: "AlphabetKeypad", defaultExport: "AlphabetKeypad", typeExports: ["AlphabetKeypadProps"], target: "components" },
  { file: "AlertDialog", defaultExport: "AlertDialog", typeExports: ["AlertDialogProps"], target: "components" },
  {
    file: "Asset",
    defaultExport: "Asset",
    namedExports: ["AssetContentIcon", "AssetContentLottie", "AssetLottie", "AssetLottieCore"],
    typeExports: ["AssetNamespace", "AssetBaseProps", "AssetLottieProps"],
    target: "components",
  },
  { file: "Avatar", defaultExport: "Avatar", typeExports: ["AvatarProps"], target: "components" },
  { file: "Badge", defaultExport: "Badge", typeExports: ["BadgeProps"], target: "components" },
  { file: "Banner", defaultExport: "Banner", typeExports: ["BannerProps"], target: "components" },
  { file: "BarChart", defaultExport: "BarChart", typeExports: ["BarChartDatum", "BarChartProps"], target: "components" },
  { file: "Bubble", defaultExport: "Bubble", typeExports: ["BubbleProps"], target: "components" },
  { file: "Border", defaultExport: "Border", typeExports: ["BorderProps"], target: "components" },
  { file: "BottomInfo", defaultExport: "BottomInfo", typeExports: ["BottomInfoProps"], target: "components" },
  { file: "BottomCTA", defaultExport: "BottomCTADouble", typeExports: ["BottomCTAAction", "BottomCTADoubleProps"], target: "components" },
  {
    file: "BottomSheetAgreementModule",
    defaultExport: "BottomSheetAgreementModule",
    namedExports: ["BottomSheetAgreementModuleCTA"],
    typeExports: ["AgreementModuleCTAProps", "BottomSheetAgreementModuleProps"],
    target: "components",
  },
  { file: "BottomSheet", defaultExport: "BottomSheet", typeExports: ["BottomSheetProps"], target: "components" },
  { file: "Button", defaultExport: "Button", typeExports: ["ButtonProps"], target: "components" },
  { file: "Card", defaultExport: "Card", typeExports: ["CardProps"], target: "components" },
  { file: "Checkbox", defaultExport: "Checkbox", typeExports: ["CheckboxProps"], target: "components" },
  { file: "Chip", defaultExport: "Chip", typeExports: ["ChipProps"], target: "components" },
  { file: "CommandPalette", defaultExport: "CommandPalette", typeExports: ["CommandItem", "CommandPaletteProps"], target: "components" },
  { file: "ConfirmDialog", defaultExport: "ConfirmDialog", typeExports: ["ConfirmDialogProps"], target: "components" },
  { file: "DatePicker", defaultExport: "DatePicker", namedExports: ["DatePickerCompact", "WheelDatePicker"], typeExports: ["DatePickerProps"], target: "components" },
  { file: "Dialog", defaultExport: "Dialog", typeExports: ["DialogProps"], target: "components" },
  { file: "Divider", defaultExport: "Divider", typeExports: ["DividerProps"], target: "components" },
  { file: "DoughnutChart", defaultExport: "DoughnutChart", typeExports: ["DoughnutChartProps"], target: "components" },
  { file: "Dropdown", defaultExport: "Dropdown", typeExports: ["DropdownItem", "DropdownProps"], target: "components" },
  { file: "EmptyState", defaultExport: "EmptyState", typeExports: ["EmptyStateProps"], target: "components" },
  { file: "FadeIn", defaultExport: "FadeIn", typeExports: ["FadeInProps"], target: "components" },
  {
    file: "FloatButtonAgreementModule",
    defaultExport: "FloatButtonAgreementModule",
    namedExports: ["FloatButtonAgreementModuleCTA"],
    typeExports: ["AgreementModuleCTAProps", "FloatButtonAgreementModuleProps"],
    target: "components",
  },
  { file: "FontScaleLimit", defaultExport: "FontScaleLimit", typeExports: ["FontScaleLimitProps"], target: "components" },
  { file: "FullScreenLoader", defaultExport: "FullScreenLoader", typeExports: ["FullScreenLoaderProps"], target: "components" },
  { file: "FullSecureKeypad", defaultExport: "FullSecureKeypad", typeExports: ["FullSecureKeypadProps"], target: "components" },
  { file: "FullTooltip", defaultExport: "FullTooltip", typeExports: ["FullTooltipProps"], target: "components" },
  {
    file: "FullPageAgreementModule",
    defaultExport: "FullPageAgreementModule",
    namedExports: ["FullPageAgreementModuleCTA"],
    typeExports: ["AgreementModuleCTAProps", "FullPageAgreementModuleProps"],
    target: "components",
  },
  {
    file: "GradientBottomSheetAgreementModule",
    defaultExport: "GradientBottomSheetAgreementModule",
    namedExports: ["GradientBottomSheetAgreementModuleCTA"],
    typeExports: ["AgreementModuleCTAProps", "GradientBottomSheetAgreementModuleProps"],
    target: "components",
  },
  { file: "GridList", defaultExport: "GridList", typeExports: ["GridListProps"], target: "components" },
  { file: "Highlight", defaultExport: "Highlight", typeExports: ["HighlightProps"], target: "components" },
  { file: "Icon", defaultExport: "Icon", namedExports: ["iconNames"], typeExports: ["IconProps"], target: "components" },
  { file: "IconCore", defaultExport: "IconCore", typeExports: ["IconCoreProps"], target: "components" },
  { file: "IconButton", defaultExport: "IconButton", typeExports: ["IconButtonProps"], target: "components" },
  { file: "InfoRow", defaultExport: "InfoRow", typeExports: ["InfoRowProps"], target: "components" },
  { file: "Input", defaultExport: "Input", typeExports: ["InputProps"], target: "components" },
  { file: "List", defaultExport: "List", namedExports: ["ListHeader", "ListFooter"], typeExports: ["ListProps", "ListHeaderProps", "ListFooterProps"], target: "components" },
  { file: "ListHeaderParts", namedExports: ["ListHeaderRightArrow", "ListHeaderRightText", "ListHeaderTitleSelector", "ListHeaderTitleTextButton"], typeExports: ["ListHeaderRightArrowProps", "ListHeaderRightTextProps"], target: "components" },
  { file: "ListRow", defaultExport: "ListRow", typeExports: ["ListRowProps"], target: "components" },
  { file: "ListRowParts", namedExports: ["ListRowFillIcon", "ListRowIcon", "ListRowIconButton", "ListRowImage", "ListRowImageContainer"], typeExports: ["ListRowImageContainerProps", "ListRowImageProps", "ListRowIconButtonProps", "ListRowIconProps"], target: "components" },
  { file: "Loader", defaultExport: "Loader", typeExports: ["LoaderProps"], target: "components" },
  { file: "LoaderAnimation", defaultExport: "LoaderAnimation", typeExports: ["LoaderAnimationProps"], target: "components" },
  { file: "LoadingCompleteView", defaultExport: "LoadingCompleteView", typeExports: ["LoadingCompleteViewProps"], target: "components" },
  { file: "Menu", defaultExport: "Menu", typeExports: ["MenuItem", "MenuProps"], target: "components" },
  { file: "MenuParts", namedExports: ["MenuDropdownCheckItem", "MenuDropdownIcon", "MenuDropdownItem", "MenuHeader", "MenuTrigger"], typeExports: ["MenuItem"], target: "components" },
  { file: "Modal", defaultExport: "Modal", typeExports: ["ModalProps"], target: "components" },
  { file: "NoticeBanner", defaultExport: "NoticeBanner", typeExports: ["BannerProps"], target: "components" },
  { file: "NumberKeypad", defaultExport: "NumberKeypad", typeExports: ["NumberKeypadProps"], target: "components" },
  { file: "NumericSpinner", defaultExport: "NumericSpinner", typeExports: ["NumericSpinnerProps"], target: "components" },
  { file: "Pagination", defaultExport: "Pagination", typeExports: ["PaginationProps"], target: "components" },
  { file: "Paragraph", defaultExport: "Paragraph", namedExports: ["ParagraphIcon"], typeExports: ["ParagraphNamespace", "ParagraphProps", "ParagraphIconProps"], target: "components" },
  { file: "Popover", defaultExport: "Popover", typeExports: ["PopoverProps"], target: "components" },
  { file: "Post", defaultExport: "Post", namedExports: ["PostHr"], typeExports: ["PostNamespace", "PostProps", "PostHrProps"], target: "components" },
  { file: "ProgressBar", defaultExport: "ProgressBar", typeExports: ["ProgressBarProps"], target: "components" },
  { file: "ProgressStep", defaultExport: "ProgressStep", typeExports: ["ProgressStepProps"], target: "components" },
  { file: "ProgressStepper", defaultExport: "ProgressStepper", typeExports: ["ProgressStepperProps", "ProgressStepperStep"], target: "components" },
  { file: "Radio", defaultExport: "Radio", typeExports: ["RadioProps"], target: "components" },
  { file: "Rating", defaultExport: "Rating", typeExports: ["RatingProps"], target: "components" },
  { file: "Result", defaultExport: "Result", typeExports: ["ResultProps"], target: "components" },
  { file: "ResultButton", defaultExport: "ResultButton", typeExports: ["ResultButtonProps"], target: "components" },
  { file: "SearchBar", defaultExport: "SearchBar", typeExports: ["SearchBarProps"], target: "components" },
  { file: "SearchField", defaultExport: "SearchField", namedExports: ["SearchFieldResult", "SearchFieldSuggest"], typeExports: ["SearchFieldProps"], target: "components" },
  { file: "SectionHeader", defaultExport: "SectionHeader", typeExports: ["SectionHeaderProps"], target: "components" },
  { file: "SegmentedControl", defaultExport: "SegmentedControl", typeExports: ["SegmentedControlProps", "SegmentedOption"], target: "components" },
  { file: "Select", defaultExport: "Select", namedExports: ["SelectQuiet", "SelectSearchable"], typeExports: ["SelectProps"], target: "components" },
  { file: "Selector", defaultExport: "Selector", typeExports: ["SelectorProps"], target: "components" },
  { file: "Skeleton", defaultExport: "Skeleton", typeExports: ["SkeletonProps"], target: "components" },
  { file: "Slider", defaultExport: "Slider", typeExports: ["SliderProps"], target: "components" },
  { file: "SliderTooltip", defaultExport: "SliderTooltip", typeExports: ["SliderTooltipProps"], target: "components" },
  { file: "Snackbar", defaultExport: "Snackbar", typeExports: ["SnackbarProps"], target: "components" },
  { file: "Spacing", defaultExport: "Spacing", typeExports: ["SpacingProps"], target: "components" },
  { file: "Stepper", defaultExport: "Stepper", typeExports: ["StepperProps", "StepperStep"], target: "components" },
  { file: "StepperRow", defaultExport: "StepperRow", typeExports: ["StepperRowProps"], target: "components" },
  { file: "Switch", defaultExport: "Switch", typeExports: ["SwitchProps"], target: "components" },
  { file: "Table", defaultExport: "Table", typeExports: ["TableColumn", "TableProps"], target: "components" },
  { file: "TableRow", defaultExport: "TableRow", typeExports: ["TableRowProps"], target: "components" },
  { file: "Tabs", namedExports: ["Tabs", "Tab"], typeExports: ["TabsProps", "TabProps"], target: "components" },
  { file: "Text", defaultExport: "Text", typeExports: ["TextProps"], target: "components" },
  { file: "TextArea", defaultExport: "TextArea", typeExports: ["TextAreaProps"], target: "components" },
  { file: "TextButton", defaultExport: "TextButton", typeExports: ["TextButtonProps"], target: "components" },
  { file: "TextField", defaultExport: "TextField", namedExports: ["TextFieldButton", "TextFieldClearable", "TextFieldPassword"], typeExports: ["TextFieldProps"], target: "components" },
  { file: "SplitTextField", defaultExport: "SplitTextField", namedExports: ["SplitTextFieldRRN13", "SplitTextFieldRRNFirst7"], typeExports: ["SplitTextFieldProps", "SplitTextFieldNamespace"], target: "components" },
  { file: "Toast", defaultExport: "Toast", typeExports: ["ToastProps"], target: "components" },
  { file: "Tooltip", defaultExport: "Tooltip", typeExports: ["TooltipProps"], target: "components" },
  { file: "Top", defaultExport: "Top", namedExports: ["TopRightArrow", "TopRightButton", "TopSubtitleBadges", "TopSubtitleSelector", "TopTitleSelector"], typeExports: ["TopProps", "TopRightArrowProps", "TopRightButtonProps", "TopSubtitleBadgesProps"], target: "components" },
  { file: "TopBar", defaultExport: "TopBar", typeExports: ["TopBarProps"], target: "components" },
  { file: "ColorSchemeArea", defaultExport: "ColorSchemeArea", typeExports: ["ColorSchemeAreaProps", "ColorSchemeItem"], target: "components" },
  { file: "Wheel", defaultExport: "Wheel", typeExports: ["WheelOption", "WheelProps"], target: "components" },
  { file: "WheelDatePicker", defaultExport: "WheelDatePicker", typeExports: ["DatePickerProps"], target: "components" },
  { file: "WheelDateSheet", defaultExport: "WheelDateSheet", typeExports: ["WheelDateSheetProps"], target: "components" },
];

for (const dir of [componentsDir, primitivesDir]) {
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    if (entry.endsWith(".d.ts")) {
      fs.rmSync(path.join(dir, entry));
    }
  }
}

for (const entry of entries) {
  const targetDir = entry.target === "components" ? componentsDir : primitivesDir;
  const exportClauses = [];

  if (entry.defaultExport) {
    exportClauses.push(`${entry.defaultExport} as default`);
  }
  if (entry.namedExports?.length) {
    exportClauses.push(...entry.namedExports);
  }

  const lines = [
    '// This file is auto-generated by packages/ripple-ui/scripts/generate-deep-types.mjs',
    `export { ${exportClauses.join(", ")} } from "../index.js";`,
  ];

  if (entry.typeExports?.length) {
    lines.push(`export type { ${entry.typeExports.join(", ")} } from "../index.js";`);
  }

  fs.writeFileSync(path.join(targetDir, `${entry.file}.d.ts`), `${lines.join("\n")}\n`);
}
