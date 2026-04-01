import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function Switch({
  checked = false,
  label,
  description,
  size = "md",
  tone = "accent",
  className = "",
  ...props
}) {
  return (
    <label className={cx("rpl-switch-row", className)}>
      <span className="rpl-switch-copy">
        {label ? (
          <Text as="span" variant="body" className="rpl-switch-label">
            {label}
          </Text>
        ) : null}
        {description ? (
          <Text as="span" variant="caption" className="rpl-switch-description">
            {description}
          </Text>
        ) : null}
      </span>
      <span className="rpl-switch-control">
        <input type="checkbox" className="rpl-switch-input" checked={checked} {...props} />
        <span className={cx("rpl-switch-track", `rpl-switch-track-${size}`, `rpl-switch-track-${tone}`, checked && "is-checked")}>
          <span className="rpl-switch-thumb"></span>
        </span>
      </span>
    </label>
  );
}
