import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function Checkbox({
  checked = false,
  label,
  description,
  className = "",
  ...props
}) {
  return (
    <label className={cx("rpl-choice-row", className)}>
      <span className="rpl-choice-control">
        <input type="checkbox" className="rpl-choice-input" checked={checked} {...props} />
        <span className={cx("rpl-checkbox-box", checked && "is-checked")}>
          <span className="rpl-checkbox-mark">✓</span>
        </span>
      </span>
      <span className="rpl-choice-copy">
        {label ? (
          <Text as="span" variant="body" className="rpl-choice-label">
            {label}
          </Text>
        ) : null}
        {description ? (
          <Text as="span" variant="caption" className="rpl-choice-description">
            {description}
          </Text>
        ) : null}
      </span>
    </label>
  );
}
