import React from "react";
import { cx } from "../utils/cx.js";

export default function Badge({
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot = false,
  count,
  className = "",
  children,
  ...props
}) {
  return (
    <span
      className={cx(
        "rpl-badge",
        `rpl-badge-${tone}`,
        `rpl-badge-${variant}`,
        `rpl-badge-${size}`,
        dot && "rpl-badge-dot",
        className,
      )}
      {...props}
    >
      {dot ? <span className="rpl-badge-dot-mark" aria-hidden="true" /> : null}
      {children}
      {count !== undefined ? <span className="rpl-badge-count">{count}</span> : null}
    </span>
  );
}
