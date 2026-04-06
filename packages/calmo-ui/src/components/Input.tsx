import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";
import Icon from "./Icon.js";

function Input({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  prefix,
  suffix,
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
  inputRef,
  ...props
}) {
  const resolvedState =
    error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage =
    error ?? warning ?? success ?? validationMessage ?? hint;
  const currentValue =
    props.value ?? props.defaultValue ?? "";
  const hasValue = String(currentValue).length > 0;

  const preserveFocus = (event) => {
    event.preventDefault();
  };

  return (
    <label className={cx("rpl-input-field", className)}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <span
        className={cx(
          "rpl-input-shell",
          `rpl-input-shell-${size}`,
          `rpl-input-shell-${variant}`,
          resolvedState !== "default" && `rpl-input-shell-${resolvedState}`,
          disabled && "rpl-input-shell-disabled",
        )}
      >
        {before ?? (
          <>
            {prefix ? <span className="rpl-input-prefix">{prefix}</span> : null}
            {leading ? <span className="rpl-input-leading">{typeof leading === "string" ? <Icon name={leading} size={16} /> : leading}</span> : null}
          </>
        )}
        <input ref={inputRef} className={cx("rpl-input", inputClassName)} disabled={disabled} {...props} />
        {after ?? (
          <>
            {trailing ? <span className="rpl-input-trailing">{typeof trailing === "string" ? <Icon name={trailing} size={16} /> : trailing}</span> : null}
            {suffix ? <span className="rpl-input-suffix">{suffix}</span> : null}
          </>
        )}
        {(clearable || actionLabel || passwordToggle) ? (
          <span className="rpl-input-attachments">
            {clearable && hasValue ? (
              <button
                type="button"
                className="rpl-input-affix-button"
                aria-label={clearLabel}
                onMouseDown={preserveFocus}
                onClick={onClear}
              >
                ✕
              </button>
            ) : null}
            {passwordToggle ? (
              <button
                type="button"
                className="rpl-input-affix-button"
                aria-label={revealed ? hideLabel : revealLabel}
                onMouseDown={preserveFocus}
                onClick={onToggleReveal}
              >
                {revealed ? "Hide" : "Show"}
              </button>
            ) : null}
            {actionLabel ? (
              <button
                type="button"
                className="rpl-input-inline-action"
                onMouseDown={preserveFocus}
                onClick={onActionClick}
              >
                {actionLabel}
              </button>
            ) : null}
          </span>
        ) : null}
      </span>
      {resolvedMessage ? (
        <Text
          as="span"
          variant="caption"
          className={cx(
            "rpl-input-message",
            resolvedState !== "default" && `rpl-input-message-${resolvedState}`,
          )}
        >
          {resolvedMessage}
        </Text>
      ) : null}
    </label>
  );
}

export default Input;
