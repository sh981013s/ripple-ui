import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function Radio({
  checked = false,
  label,
  description,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <label className={cx("rpl-choice-row", disabled && "is-disabled", className)}>
      <span className="rpl-choice-control">
        <input type="radio" className="rpl-choice-input" checked={checked} disabled={disabled} {...props} />
        <span className={cx("rpl-radio-box", checked && "is-checked", disabled && "is-disabled")}>
          <span className="rpl-radio-dot"></span>
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
