import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface LoaderAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  tone?: "accent" | "success" | "warning" | "danger";
  label?: React.ReactNode;
}

export default function LoaderAnimation({
  size = "md",
  tone = "accent",
  label,
  className = "",
  ...props
}: LoaderAnimationProps) {
  return (
    <div className={cx("rpl-loader-animation-wrap", className)} role="status" aria-live="polite" {...props}>
      <div className={cx("rpl-loader-animation", `rpl-loader-animation-${size}`, `rpl-loader-animation-${tone}`)} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {label ? <Text variant="caption">{label}</Text> : null}
    </div>
  );
}
