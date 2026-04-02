import React from "react";
import { cx } from "../utils/cx.js";

const toneClass = {
  default: "",
  muted: "rpl-surface-muted",
  accent: "rpl-surface-accent",
  success: "rpl-surface-success",
  warning: "rpl-surface-warning",
};

const radiusClass = {
  sm: "rpl-radius-sm",
  md: "rpl-radius-md",
  lg: "rpl-radius-lg",
  xl: "rpl-radius-xl",
};

export interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  tone?: keyof typeof toneClass;
  radius?: keyof typeof radiusClass;
  className?: string;
  children?: React.ReactNode;
}

export default function Surface({
  as: Component = "div",
  tone = "default",
  radius = "lg",
  className = "",
  children,
  ...props
}: SurfaceProps) {
  return (
    <Component
      className={cx("rpl-surface", toneClass[tone] || "", radiusClass[radius] || "rpl-radius-lg", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
