import React from "react";
import { cx } from "../utils/cx.js";

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  placement?: "top" | "bottom";
  arrow?: boolean;
  children?: React.ReactNode;
}

export default function Bubble({
  tone = "default",
  placement = "top",
  arrow = true,
  className = "",
  children,
  ...props
}: BubbleProps) {
  return (
    <div className={cx("rpl-bubble", `rpl-bubble-${tone}`, `rpl-bubble-${placement}`, arrow && "rpl-bubble-arrow", className)} {...props}>
      {children}
    </div>
  );
}
