import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

function Input({
  label,
  hint,
  error,
  leading,
  trailing,
  before,
  after,
  clearable = false,
  onClear,
  clearLabel = "Clear input",
  actionLabel,
  onActionClick,
  passwordToggle = false,
  revealed = false,
  onToggleReveal,
  revealLabel = "Show password",
  hideLabel = "Hide password",
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  disabled = false,
  ...props
}) {
  return (
    <label className={cx("rpl-input-field", className)}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <span className={cx("rpl-input-shell", `rpl-input-shell-${size}`, `rpl-input-shell-${variant}`, error && "rpl-input-shell-error", disabled && "rpl-input-shell-disabled")}>
        {before ?? (leading ? <span className="rpl-input-leading">{leading}</span> : null)}
        <input className={cx("rpl-input", inputClassName)} disabled={disabled} {...props} />
        {after ?? (trailing ? <span className="rpl-input-trailing">{trailing}</span> : null)}
        {(clearable || actionLabel || passwordToggle) ? (
          <span className="rpl-input-attachments">
            {clearable ? (
              <button type="button" className="rpl-input-affix-button" aria-label={clearLabel} onClick={onClear}>
                ✕
              </button>
            ) : null}
            {passwordToggle ? (
              <button
                type="button"
                className="rpl-input-affix-button"
                aria-label={revealed ? hideLabel : revealLabel}
                onClick={onToggleReveal}
              >
                {revealed ? "숨김" : "표시"}
              </button>
            ) : null}
            {actionLabel ? (
              <button type="button" className="rpl-input-inline-action" onClick={onActionClick}>
                {actionLabel}
              </button>
            ) : null}
          </span>
        ) : null}
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

export default Input;
