import React from "react";
import { cx } from "../utils/cx.js";
import Badge from "./Badge.js";
import Checkbox from "./Checkbox.js";
import Text from "./Text.js";

export interface AgreementV4SharedProps {
  children?: React.ReactNode;
  className?: string;
}

export interface AgreementV4BadgeProps extends AgreementV4SharedProps {
  tone?: "neutral" | "accent" | "success" | "warning";
}

export interface AgreementV4CheckboxProps extends React.ComponentProps<typeof Checkbox> {}
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
export interface AgreementV4CollapsibleProps extends AgreementV4SharedProps {
  defaultOpen?: boolean;
}
export interface AgreementV4CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export interface AgreementV4CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface AgreementV4IndentPushableProps extends AgreementV4SharedProps {
  defaultOpen?: boolean;
}
export interface AgreementV4IndentPushableTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export interface AgreementV4IndentPushableContentProps extends React.HTMLAttributes<HTMLDivElement> {}

type DisclosureContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CollapsibleContext = React.createContext<DisclosureContextValue | null>(null);
const IndentContext = React.createContext<DisclosureContextValue | null>(null);

function useDisclosureContext(context: React.Context<DisclosureContextValue | null>, name: string) {
  const value = React.useContext(context);
  if (!value) {
    throw new Error(`${name} must be used within its parent.`);
  }
  return value;
}

export function AgreementV4Badge({ tone = "neutral", children, className = "" }: AgreementV4BadgeProps) {
  return (
    <Badge tone={tone} size="sm" className={cx("rpl-agreement-badge", className)}>
      {children}
    </Badge>
  );
}

export function AgreementV4Checkbox(props: AgreementV4CheckboxProps) {
  return <Checkbox className={cx("rpl-agreement-checkbox", props.className)} {...props} />;
}

export function AgreementV4Description({ className = "", children, ...props }: AgreementV4DescriptionProps) {
  return (
    <Text as="p" variant="caption" className={cx("rpl-agreement-description", className)} {...props}>
      {children}
    </Text>
  );
}

export function AgreementV4Group({ className = "", children, ...props }: AgreementV4GroupProps) {
  return (
    <div className={cx("rpl-agreement-group", className)} {...props}>
      {children}
    </div>
  );
}

export function AgreementV4Header({ className = "", children, ...props }: AgreementV4HeaderProps) {
  return (
    <div className={cx("rpl-agreement-header", className)} {...props}>
      {children}
    </div>
  );
}

export function AgreementV4Necessity({ required = true, className = "", children, ...props }: AgreementV4NecessityProps) {
  return (
    <span className={cx("rpl-agreement-necessity", required ? "is-required" : "is-optional", className)} {...props}>
      {children ?? (required ? "Required" : "Optional")}
    </span>
  );
}

export function AgreementV4RightArrow({ className = "", ...props }: AgreementV4RightArrowProps) {
  return (
    <span className={cx("rpl-agreement-right-arrow", className)} aria-hidden="true" {...props}>
      ›
    </span>
  );
}

export function AgreementV4Pressable({
  title,
  description,
  badge,
  right,
  className = "",
  children,
  ...props
}: AgreementV4PressableProps) {
  return (
    <button type="button" className={cx("rpl-agreement-pressable", className)} {...props}>
      <span className="rpl-agreement-pressable-copy">
        {title ? (
          <span className="rpl-agreement-pressable-title-row">
            <Text as="span" variant="body">{title}</Text>
            {badge}
          </span>
        ) : null}
        {description ? <AgreementV4Description>{description}</AgreementV4Description> : null}
        {children}
      </span>
      {right ?? <AgreementV4RightArrow />}
    </button>
  );
}

export function AgreementV4Collapsible({ defaultOpen = false, children, className = "" }: AgreementV4CollapsibleProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div className={cx("rpl-agreement-collapsible", open && "is-open", className)}>{children}</div>
    </CollapsibleContext.Provider>
  );
}

export function AgreementV4CollapsibleTrigger({
  title,
  description,
  className = "",
  children,
  ...props
}: AgreementV4CollapsibleTriggerProps) {
  const { open, setOpen } = useDisclosureContext(CollapsibleContext, "AgreementV4.CollapsibleTrigger");
  return (
    <button
      type="button"
      className={cx("rpl-agreement-collapsible-trigger", className)}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen((prev) => !prev);
      }}
      {...props}
    >
      <span className="rpl-agreement-pressable-copy">
        {title ? <Text as="span" variant="body">{title}</Text> : children}
        {description ? <AgreementV4Description>{description}</AgreementV4Description> : null}
      </span>
      <span className={cx("rpl-agreement-disclosure-caret", open && "is-open")} aria-hidden="true">⌄</span>
    </button>
  );
}

export function AgreementV4CollapsibleContent({
  className = "",
  children,
  ...props
}: AgreementV4CollapsibleContentProps) {
  const { open } = useDisclosureContext(CollapsibleContext, "AgreementV4.CollapsibleContent");
  if (!open) return null;
  return (
    <div className={cx("rpl-agreement-collapsible-content", className)} {...props}>
      {children}
    </div>
  );
}

export function AgreementV4IndentPushable({ defaultOpen = false, children, className = "" }: AgreementV4IndentPushableProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <IndentContext.Provider value={{ open, setOpen }}>
      <div className={cx("rpl-agreement-indent-pushable", open && "is-open", className)}>{children}</div>
    </IndentContext.Provider>
  );
}

export function AgreementV4IndentPushableTrigger({
  title,
  description,
  className = "",
  children,
  ...props
}: AgreementV4IndentPushableTriggerProps) {
  const { open, setOpen } = useDisclosureContext(IndentContext, "AgreementV4.IndentPushableTrigger");
  return (
    <button
      type="button"
      className={cx("rpl-agreement-indent-trigger", className)}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen((prev) => !prev);
      }}
      {...props}
    >
      <span className="rpl-agreement-pressable-copy">
        {title ? <Text as="span" variant="body">{title}</Text> : children}
        {description ? <AgreementV4Description>{description}</AgreementV4Description> : null}
      </span>
      <span className={cx("rpl-agreement-disclosure-caret", open && "is-open")} aria-hidden="true">⌄</span>
    </button>
  );
}

export function AgreementV4IndentPushableContent({
  className = "",
  children,
  ...props
}: AgreementV4IndentPushableContentProps) {
  const { open } = useDisclosureContext(IndentContext, "AgreementV4.IndentPushableContent");
  if (!open) return null;
  return (
    <div className={cx("rpl-agreement-indent-content", className)} {...props}>
      {children}
    </div>
  );
}

const AgreementV4 = {
  Badge: AgreementV4Badge,
  Checkbox: AgreementV4Checkbox,
  Collapsible: AgreementV4Collapsible,
  CollapsibleContent: AgreementV4CollapsibleContent,
  CollapsibleTrigger: AgreementV4CollapsibleTrigger,
  Description: AgreementV4Description,
  Group: AgreementV4Group,
  Header: AgreementV4Header,
  IndentPushable: AgreementV4IndentPushable,
  IndentPushableContent: AgreementV4IndentPushableContent,
  IndentPushableTrigger: AgreementV4IndentPushableTrigger,
  Necessity: AgreementV4Necessity,
  Pressable: AgreementV4Pressable,
  RightArrow: AgreementV4RightArrow,
};

export default AgreementV4;
