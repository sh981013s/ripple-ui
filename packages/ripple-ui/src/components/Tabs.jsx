import React from "react";
import { cx } from "../utils/cx.js";

export function Tabs({ className = "", children, ...props }) {
  return (
    <div className={cx("rpl-tabs", className)} role="tablist" {...props}>
      {children}
    </div>
  );
}

export function Tab({
  active = false,
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cx("rpl-tab", active && "rpl-tab-active", className)}
      {...props}
    >
      {children}
    </button>
  );
}
