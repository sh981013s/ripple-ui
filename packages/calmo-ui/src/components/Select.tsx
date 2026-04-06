import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Text from "./Text.js";

type SelectOption = {
  value: string;
  label: React.ReactNode;
  disabled: boolean;
};

function normalizeOptions(children: React.ReactNode): SelectOption[] {
  return Children.toArray(children)
    .filter(Boolean)
    .map((child) => {
      if (!React.isValidElement(child)) return null;
      const element = child as React.ReactElement<{ value?: string; disabled?: boolean; children?: React.ReactNode }>;
      return {
        value: element.props.value ?? "",
        label: element.props.children,
        disabled: Boolean(element.props.disabled),
      };
    })
    .filter(Boolean) as SelectOption[];
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
  searchable = true,
  searchPlaceholder = "Search options",
  emptyMessage = "No matching options.",
  header,
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
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const controlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(controlled ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [typeahead, setTypeahead] = useState("");
  const options = useMemo(() => normalizeOptions(children), [children]);

  const currentValue = controlled ? value : internalValue;
  const currentOption = options.find((option) => option.value === currentValue);
  const filteredOptions = useMemo(() => {
    if (!query.trim()) return options;
    const q = query.trim().toLowerCase();
    return options.filter((option) => String(option.label).toLowerCase().includes(q));
  }, [options, query]);

  const resolvedState = error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage = error ?? warning ?? success ?? validationMessage ?? hint;

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
      buttonRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const selectedIndex = filteredOptions.findIndex((option) => option.value === currentValue && !option.disabled);
    const firstEnabled = filteredOptions.findIndex((option) => !option.disabled);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : firstEnabled);
  }, [open, filteredOptions, currentValue]);

  useEffect(() => {
    if (!open || highlightedIndex < 0) return;
    optionRefs.current[highlightedIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, highlightedIndex]);

  useEffect(() => {
    if (open && searchable) {
      window.requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, [open, searchable]);

  useEffect(() => {
    if (!typeahead) return undefined;
    const timeout = window.setTimeout(() => setTypeahead(""), 400);
    return () => window.clearTimeout(timeout);
  }, [typeahead]);

  const moveHighlight = (direction) => {
    if (!filteredOptions.length) return;
    let nextIndex = highlightedIndex;
    for (let count = 0; count < filteredOptions.length; count += 1) {
      nextIndex = (nextIndex + direction + filteredOptions.length) % filteredOptions.length;
      if (!filteredOptions[nextIndex]?.disabled) {
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

  const applyTypeahead = (nextQuery) => {
    const normalized = nextQuery.toLowerCase();
    const matchIndex = filteredOptions.findIndex(
      (option) => !option.disabled && String(option.label).toLowerCase().startsWith(normalized),
    );
    if (matchIndex >= 0) {
      setHighlightedIndex(matchIndex);
      if (!open && !searchable) {
        commitValue(filteredOptions[matchIndex].value);
      }
    }
  };

  return (
    <div className={cx("rpl-input-field", "rpl-select-field", className)} ref={rootRef}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <button
        ref={buttonRef}
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
            setHighlightedIndex(filteredOptions.findIndex((option) => !option.disabled));
          } else if (event.key === "End") {
            event.preventDefault();
            for (let index = filteredOptions.length - 1; index >= 0; index -= 1) {
              if (!filteredOptions[index]?.disabled) {
                setHighlightedIndex(index);
                break;
              }
            }
          } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            const option = filteredOptions[highlightedIndex];
            if (option && !option.disabled) {
              commitValue(option.value);
            }
          } else if (event.key.length === 1 && !event.altKey && !event.metaKey && !event.ctrlKey) {
            const nextTypeahead = `${typeahead}${event.key}`;
            setTypeahead(nextTypeahead);
            applyTypeahead(nextTypeahead);
          }
        }}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-activedescendant={open && highlightedIndex >= 0 ? `${name || label || "select"}-option-${highlightedIndex}` : undefined}
        {...props}
      >
        <span className={cx("rpl-select-value", !currentOption && "is-placeholder")}>
          {currentOption?.label ?? placeholder ?? "Select an option"}
        </span>
        <span className="rpl-select-caret" aria-hidden="true">
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      {resolvedMessage ? (
        <Text as="span" variant="caption" className={cx("rpl-input-message", resolvedState !== "default" && `rpl-input-message-${resolvedState}`)}>
          {resolvedMessage}
        </Text>
      ) : null}
      {open ? (
        <div className="rpl-select-popover" role="listbox" aria-label={typeof label === "string" ? label : "Select options"}>
          {header ? <div className="rpl-select-header">{header}</div> : null}
          {searchable ? (
            <div className="rpl-select-search">
              <Icon name="search" size={16} className="rpl-select-search-icon" />
              <input
                ref={searchRef}
                className="rpl-select-search-input"
                value={query}
                onChange={(event) => {
                  const nextQuery = event.target.value;
                  setQuery(nextQuery);
                  if (nextQuery.trim()) {
                    applyTypeahead(nextQuery.trim());
                  }
                }}
                placeholder={searchPlaceholder}
                autoFocus
              />
            </div>
          ) : null}
          <div className="rpl-select-options">
            {filteredOptions.length ? (
              filteredOptions.map((option, index) => {
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
                    {selected ? (
                      <span className="rpl-select-option-check">
                        <Icon name="check" size={14} />
                      </span>
                    ) : null}
                  </button>
                );
              })
            ) : (
              <div className="rpl-select-empty">{emptyMessage}</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SelectSearchable(props) {
  return <Select searchable {...props} />;
}

export function SelectQuiet(props) {
  return <Select variant="quiet" {...props} />;
}
