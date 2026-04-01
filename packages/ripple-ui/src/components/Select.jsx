import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

function normalizeOptions(children) {
  return Children.toArray(children)
    .filter(Boolean)
    .map((child) => {
      if (!React.isValidElement(child)) return null;
      return {
        value: child.props.value,
        label: child.props.children,
        disabled: Boolean(child.props.disabled),
      };
    })
    .filter(Boolean);
}

export default function Select({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  placeholder,
  size = "md",
  variant = "default",
  className = "",
  selectClassName = "",
  children,
  disabled = false,
  value,
  defaultValue = "",
  onChange,
  name,
  ...props
}) {
  const rootRef = useRef(null);
  const controlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(controlled ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const options = useMemo(() => normalizeOptions(children), [children]);

  const currentValue = controlled ? value : internalValue;
  const currentOption = options.find((option) => option.value === currentValue);
  const resolvedState =
    error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage =
    error ?? warning ?? success ?? validationMessage ?? hint;

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const commitValue = (nextValue) => {
    if (!controlled) {
      setInternalValue(nextValue);
    }
    onChange?.({
      target: { value: nextValue, name },
      currentTarget: { value: nextValue, name },
    });
    setOpen(false);
  };

  return (
    <div className={cx("rpl-input-field", "rpl-select-field", className)} ref={rootRef}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <button
        type="button"
        className={cx(
          "rpl-input-shell",
          "rpl-select-shell",
          `rpl-input-shell-${size}`,
          `rpl-input-shell-${variant}`,
          resolvedState !== "default" && `rpl-input-shell-${resolvedState}`,
          disabled && "rpl-input-shell-disabled",
          open && "is-open",
          selectClassName,
        )}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        {...props}
      >
        <span className={cx("rpl-select-value", !currentOption && "is-placeholder")}>
          {currentOption?.label ?? placeholder ?? "Select an option"}
        </span>
        <span className="rpl-select-caret" aria-hidden="true">⌄</span>
      </button>
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
      {open ? (
        <div className="rpl-select-popover" role="listbox" aria-label={typeof label === "string" ? label : "Select options"}>
          {options.map((option) => {
            const selected = option.value === currentValue;

            return (
              <button
                key={String(option.value)}
                type="button"
                role="option"
                aria-selected={selected}
                className={cx("rpl-select-option", selected && "is-selected")}
                disabled={option.disabled}
                onClick={() => !option.disabled && commitValue(option.value)}
              >
                <span>{option.label}</span>
                {selected ? <span className="rpl-select-option-check">✓</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
