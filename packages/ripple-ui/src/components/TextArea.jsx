import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function TextArea({
  label,
  hint,
  error,
  size = "md",
  variant = "default",
  className = "",
  textareaClassName = "",
  ...props
}) {
  return (
    <label className={cx("rpl-input-field", className)}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <span className={cx("rpl-input-shell", "rpl-textarea-shell", `rpl-input-shell-${size}`, `rpl-input-shell-${variant}`, error && "rpl-input-shell-error")}>
        <textarea className={cx("rpl-input", "rpl-textarea", textareaClassName)} {...props} />
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
