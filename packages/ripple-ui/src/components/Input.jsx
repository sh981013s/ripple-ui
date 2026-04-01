import React from "react";
import { cx } from "../utils/cx.js";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

function Input({
  label,
  hint,
  error,
  leading,
  trailing,
  before,
  after,
  children,
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
        {children ? <span className="rpl-input-attachments">{children}</span> : null}
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

function ClearButton({ visible = true, ariaLabel = "Clear input", className = "", children = "✕", ...props }) {
  if (!visible) return null;

  return (
    <button type="button" className={cx("rpl-input-affix-button", className)} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}

function PasswordToggle({
  visible = true,
  revealed = false,
  className = "",
  hiddenLabel = "Show password",
  revealedLabel = "Hide password",
  children,
  ...props
}) {
  if (!visible) return null;

  return (
    <button
      type="button"
      className={cx("rpl-input-affix-button", className)}
      aria-label={revealed ? revealedLabel : hiddenLabel}
      {...props}
    >
      {children ?? (revealed ? "숨김" : "표시")}
    </button>
  );
}

function InputButton({ size = "small", variant = "ghost", display = "inline", className = "", ...props }) {
  return <Button size={size} variant={variant} display={display} className={cx("rpl-input-action-button", className)} {...props} />;
}

Input.ClearButton = ClearButton;
Input.PasswordToggle = PasswordToggle;
Input.Button = InputButton;

export default Input;
