import React from "react";
import { cx } from "../utils/cx.js";

export default function FadeIn({ as: Component = "div", delay = 0, className = "", children, ...props }) {
  return (
    <Component
      className={cx("rpl-fade-in", className)}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
