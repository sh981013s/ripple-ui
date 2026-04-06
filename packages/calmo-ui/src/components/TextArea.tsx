import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function TextArea({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  size = "md",
  variant = "default",
  className = "",
  textareaClassName = "",
  disabled = false,
  ...props
}) {
  const resolvedState =
    error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage =
    error ?? warning ?? success ?? validationMessage ?? hint;

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
          "rpl-textarea-shell",
          `rpl-input-shell-${size}`,
          `rpl-input-shell-${variant}`,
          resolvedState !== "default" && `rpl-input-shell-${resolvedState}`,
          disabled && "rpl-input-shell-disabled",
        )}
      >
        <textarea className={cx("rpl-input", "rpl-textarea", textareaClassName)} disabled={disabled} {...props} />
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
