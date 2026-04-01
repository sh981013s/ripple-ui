import React from "react";
import { cx } from "../utils/cx.js";

export function Tabs({ className = "", stretch = false, children, ...props }) {
  return (
    <div className={cx("rpl-tabs", stretch && "rpl-tabs-stretch", className)} role="tablist" {...props}>
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
      tabIndex={active ? 0 : -1}
      className={cx("rpl-tab", active && "rpl-tab-active", className)}
      {...props}
    >
      {children}
    </button>
  );
}
