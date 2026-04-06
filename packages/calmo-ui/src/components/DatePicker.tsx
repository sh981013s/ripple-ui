import React, { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.js";
import Button from "./Button.js";
import Icon from "./Icon.js";
import Text from "./Text.js";
import useOverlayLifecycle from "../hooks/useOverlayLifecycle.js";

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDate(date) {
  if (!date) return "";
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function parseDate(value) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

function clampDay(year, month, day) {
  const maxDay = new Date(year, month, 0).getDate();
  return Math.min(day, maxDay);
}

function updateDatePart(date, part, value) {
  const year = part === "year" ? value : date.getFullYear();
  const month = part === "month" ? value : date.getMonth() + 1;
  const day = clampDay(year, month, part === "day" ? value : date.getDate());
  return new Date(year, month - 1, day);
}

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function DatePicker({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  before,
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  value,
  defaultValue = "",
  onChange,
  placeholder = "YYYY-MM-DD",
  disabled = false,
  minYear = 2000,
  maxYear = 2035,
  sheetTitle = "Choose a date",
  sheetEyebrow = "Date picker",
  confirmLabel = "Apply",
  cancelLabel = "Cancel",
  clearLabel = "Clear",
  todayLabel = "Today",
  compact = false,
  ...props
}) {
  const controlled = value !== undefined;
  const initialDate = parseDate(controlled ? value : defaultValue) ?? new Date();
  const [internalValue, setInternalValue] = useState(controlled ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const [draftDate, setDraftDate] = useState(initialDate);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const currentValue = controlled ? value : internalValue;
  const selectedDate = parseDate(currentValue);
  const resolvedState = error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage = error ?? warning ?? success ?? validationMessage ?? hint;

  const years = useMemo(() => {
    const items = [];
    for (let year = minYear; year <= maxYear; year += 1) {
      items.push(year);
    }
    return items;
  }, [minYear, maxYear]);

  const days = useMemo(() => {
    const maxDay = new Date(draftDate.getFullYear(), draftDate.getMonth() + 1, 0).getDate();
    return Array.from({ length: maxDay }, (_, index) => index + 1);
  }, [draftDate]);

  useEffect(() => {
    if (selectedDate) {
      setDraftDate(selectedDate);
    }
  }, [currentValue]);

  useOverlayLifecycle({
    open,
    onClose: () => setOpen(false),
    panelRef,
    initialFocusRef: closeButtonRef,
    trapFocus: true,
  });

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  const commitValue = (nextDate) => {
    const nextValue = formatDate(nextDate);
    if (!controlled) {
      setInternalValue(nextValue);
    }
    onChange?.({
      target: { value: nextValue, name: props.name },
      currentTarget: { value: nextValue, name: props.name },
    });
    setOpen(false);
  };

  const clearValue = () => {
    if (!controlled) {
      setInternalValue("");
    }
    onChange?.({
      target: { value: "", name: props.name },
      currentTarget: { value: "", name: props.name },
    });
    setOpen(false);
  };

  const pickerLabel = selectedDate
    ? selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : placeholder;

  return (
    <div className={cx("rpl-input-field", "rpl-datepicker", className)} ref={rootRef}>
      {label ? (
        <Text as="span" variant="label" className="rpl-input-label">
          {label}
        </Text>
      ) : null}
      <button
        type="button"
        className={cx(
          "rpl-input-shell",
          "rpl-datepicker-trigger",
          `rpl-input-shell-${size}`,
          `rpl-input-shell-${variant}`,
          resolvedState !== "default" && `rpl-input-shell-${resolvedState}`,
          disabled && "rpl-input-shell-disabled",
          open && "is-open",
        )}
        onClick={() => {
          if (!disabled) {
            setDraftDate(selectedDate ?? new Date());
            setOpen(true);
          }
        }}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="rpl-input-leading" aria-hidden="true">
          {before ?? <Icon name="calendar" size={18} />}
        </span>
        <span className={cx("rpl-datepicker-value", !currentValue && "is-placeholder", inputClassName)}>
          {pickerLabel}
        </span>
        <span className="rpl-datepicker-calendar-button" aria-hidden="true">
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      {resolvedMessage ? (
        <Text
          as="span"
          variant="caption"
          className={cx("rpl-input-message", resolvedState !== "default" && `rpl-input-message-${resolvedState}`)}
        >
          {resolvedMessage}
        </Text>
      ) : null}

      {open ? (
        <div className="rpl-datepicker-sheet" role="dialog" aria-modal="true">
          <button type="button" className="rpl-datepicker-backdrop" aria-label="Close date picker" onClick={() => setOpen(false)} />
          <div ref={panelRef} tabIndex={-1} className={cx("rpl-datepicker-panel", compact && "rpl-datepicker-panel-compact")}>
            <div className="rpl-datepicker-panel-handle" />
            <div className="rpl-datepicker-panel-header">
              <div>
                <Text variant="label" className="rpl-datepicker-panel-eyebrow">{sheetEyebrow}</Text>
                <Text variant="title">{sheetTitle}</Text>
              </div>
              <button ref={closeButtonRef} type="button" className="rpl-datepicker-icon-button" onClick={() => setOpen(false)} aria-label="Close date picker">
                <Icon name="close" size={18} />
              </button>
            </div>

            <div className="rpl-datepicker-summary">
              {draftDate.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="rpl-datepicker-wheels">
              <div className="rpl-datepicker-wheel">
                <span className="rpl-datepicker-wheel-label">Month</span>
                <div className="rpl-datepicker-wheel-list">
                  {monthLabels.map((month, index) => {
                    const monthNumber = index + 1;
                    const selected = draftDate.getMonth() + 1 === monthNumber;
                    return (
                      <button
                        key={month}
                        type="button"
                        className={cx("rpl-datepicker-wheel-option", selected && "is-selected")}
                        onClick={() => setDraftDate((prev) => updateDatePart(prev, "month", monthNumber))}
                      >
                        {month}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rpl-datepicker-wheel">
                <span className="rpl-datepicker-wheel-label">Day</span>
                <div className="rpl-datepicker-wheel-list">
                  {days.map((day) => {
                    const selected = draftDate.getDate() === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        className={cx("rpl-datepicker-wheel-option", selected && "is-selected")}
                        onClick={() => setDraftDate((prev) => updateDatePart(prev, "day", day))}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rpl-datepicker-wheel">
                <span className="rpl-datepicker-wheel-label">Year</span>
                <div className="rpl-datepicker-wheel-list">
                  {years.map((year) => {
                    const selected = draftDate.getFullYear() === year;
                    return (
                      <button
                        key={year}
                        type="button"
                        className={cx("rpl-datepicker-wheel-option", selected && "is-selected")}
                        onClick={() => setDraftDate((prev) => updateDatePart(prev, "year", year))}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rpl-datepicker-panel-footer">
                <Button variant="ghost" onClick={() => setDraftDate(new Date())}>
                  {todayLabel}
                </Button>
              <Inline gap={10}>
                {currentValue ? (
                  <Button variant="ghost" onClick={clearValue}>
                    {clearLabel}
                  </Button>
                ) : null}
                <Button variant="weak" onClick={() => setOpen(false)}>
                  {cancelLabel}
                </Button>
                <Button onClick={() => commitValue(draftDate)}>{confirmLabel}</Button>
              </Inline>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DatePickerCompact(props) {
  return <DatePicker compact size={props.size ?? "sm"} {...props} />;
}
