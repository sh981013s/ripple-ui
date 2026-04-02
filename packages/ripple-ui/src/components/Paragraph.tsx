import React from "react";
import { cx } from "../utils/cx.js";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export interface ParagraphIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export function ParagraphIcon({ className = "", children, ...props }: ParagraphIconProps) {
  return (
    <span className={cx("rpl-paragraph-icon", className)} aria-hidden="true" {...props}>
      {children}
    </span>
  );
}

export interface ParagraphNamespace {
  Icon: typeof ParagraphIcon;
}

export function Paragraph({ className = "", children, ...props }: ParagraphProps) {
  return (
    <p className={cx("rpl-paragraph", className)} {...props}>
      {children}
    </p>
  );
}

const ParagraphWithNamespace = Object.assign(Paragraph, {
  Icon: ParagraphIcon,
}) as typeof Paragraph & ParagraphNamespace;

export default ParagraphWithNamespace;
