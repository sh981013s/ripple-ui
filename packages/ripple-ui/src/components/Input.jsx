import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function Input({
  label,
  hint,
  error,
  leading,
  trailing,
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <label className={cx("rpl-input-field", className)}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <span className={cx("rpl-input-shell", `rpl-input-shell-${size}`, `rpl-input-shell-${variant}`, error && "rpl-input-shell-error")}>
        {leading ? <span className="rpl-input-leading">{leading}</span> : null}
        <input className={cx("rpl-input", inputClassName)} {...props} />
        {trailing ? <span className="rpl-input-trailing">{trailing}</span> : null}
      </span>
      {error ? (
        <Text as="span" variant="caption" className="rpl-input-message rpl-input-message-error">
          {error}
        </Text>
      ) : hint ? (
        <Text as="span" variant="caption" className="rpl-input-message">
          {hint}
        </Text>
      ) : null}
    </label>
  );
}
