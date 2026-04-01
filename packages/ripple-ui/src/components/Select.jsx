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
  const optionRefs = useRef([]);
  const controlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(controlled ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
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

  useEffect(() => {
    if (!open) return;
    const selectedIndex = options.findIndex((option) => option.value === currentValue && !option.disabled);
    const firstEnabled = options.findIndex((option) => !option.disabled);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : firstEnabled);
  }, [open, options, currentValue]);

  useEffect(() => {
    if (!open || highlightedIndex < 0) return;
    optionRefs.current[highlightedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, highlightedIndex]);

  const moveHighlight = (direction) => {
    if (!options.length) return;
    let nextIndex = highlightedIndex;
    for (let count = 0; count < options.length; count += 1) {
      nextIndex = (nextIndex + direction + options.length) % options.length;
      if (!options[nextIndex]?.disabled) {
        setHighlightedIndex(nextIndex);
        return;
      }
    }
  };

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
        onKeyDown={(event) => {
          if (disabled) return;

          if (!open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
            event.preventDefault();
            setOpen(true);
            return;
          }

          if (!open) return;

          if (event.key === "ArrowDown") {
            event.preventDefault();
            moveHighlight(1);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            moveHighlight(-1);
          } else if (event.key === "Home") {
            event.preventDefault();
            setHighlightedIndex(options.findIndex((option) => !option.disabled));
          } else if (event.key === "End") {
            event.preventDefault();
            for (let index = options.length - 1; index >= 0; index -= 1) {
              if (!options[index]?.disabled) {
                setHighlightedIndex(index);
                break;
              }
            }
          } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            const highlightedOption = options[highlightedIndex];
            if (highlightedOption && !highlightedOption.disabled) {
              commitValue(highlightedOption.value);
            }
          }
        }}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-activedescendant={
          open && highlightedIndex >= 0 ? `${name || label || "select"}-option-${highlightedIndex}` : undefined
        }
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
          {options.map((option, index) => {
            const selected = option.value === currentValue;
            const highlighted = index === highlightedIndex;

            return (
              <button
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                id={`${name || label || "select"}-option-${index}`}
                key={String(option.value)}
                type="button"
                role="option"
                aria-selected={selected}
                className={cx("rpl-select-option", selected && "is-selected", highlighted && "is-highlighted")}
                disabled={option.disabled}
                onClick={() => !option.disabled && commitValue(option.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
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
