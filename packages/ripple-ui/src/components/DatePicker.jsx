import React, { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

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
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function getMonthMatrix(baseDate) {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];

  for (let i = startWeekday - 1; i >= 0; i -= 1) {
    cells.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      inMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({
      date: new Date(year, month, day),
      inMonth: true,
    });
  }

  while (cells.length % 7 !== 0) {
    const nextDay = cells.length - (startWeekday + daysInMonth) + 1;
    cells.push({
      date: new Date(year, month + 1, nextDay),
      inMonth: false,
    });
  }

  const weeks = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }
  return weeks;
}

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

export default function DatePicker({
  label,
  hint,
  error,
  warning,
  success,
  validationState = "default",
  validationMessage,
  before = "📅",
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  value,
  defaultValue = "",
  onChange,
  placeholder = "YYYY-MM-DD",
  disabled = false,
  ...props
}) {
  const controlled = value !== undefined;
  const initialDate = parseDate(controlled ? value : defaultValue);
  const [internalValue, setInternalValue] = useState(controlled ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(initialDate ?? new Date());
  const rootRef = useRef(null);

  const currentValue = controlled ? value : internalValue;
  const selectedDate = parseDate(currentValue);
  const resolvedState =
    error ? "error" : warning ? "warning" : success ? "success" : validationState;
  const resolvedMessage =
    error ?? warning ?? success ?? validationMessage ?? hint;

  useEffect(() => {
    if (selectedDate) {
      setViewDate(selectedDate);
    }
  }, [currentValue]);

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

  const weeks = useMemo(() => getMonthMatrix(viewDate), [viewDate]);

  const commitDate = (nextDate) => {
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
            setOpen((prev) => !prev);
          }
        }}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="rpl-input-leading" aria-hidden="true">{before}</span>
        <span className={cx("rpl-datepicker-value", !currentValue && "is-placeholder", inputClassName)}>
          {currentValue || placeholder}
        </span>
        <span className="rpl-datepicker-calendar-button" aria-hidden="true">🗓</span>
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
        <div className="rpl-datepicker-popover" role="dialog" aria-modal="false">
          <div className="rpl-datepicker-header">
            <button
              type="button"
              className="rpl-datepicker-nav"
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
              aria-label="Previous month"
            >
              ‹
            </button>
            <div className="rpl-datepicker-title">
              {viewDate.toLocaleString("en-US", { month: "long", year: "numeric" })}
            </div>
            <button
              type="button"
              className="rpl-datepicker-nav"
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
              aria-label="Next month"
            >
              ›
            </button>
          </div>
          <div className="rpl-datepicker-weekdays">
            {weekdayLabels.map((labelText) => (
              <span key={labelText} className="rpl-datepicker-weekday">
                {labelText}
              </span>
            ))}
          </div>
          <div className="rpl-datepicker-grid">
            {weeks.flat().map(({ date, inMonth }) => {
              const dateValue = formatDate(date);
              const isSelected = currentValue === dateValue;
              const isToday = formatDate(new Date()) === dateValue;

              return (
                <button
                  key={dateValue}
                  type="button"
                  className={cx(
                    "rpl-datepicker-day",
                    !inMonth && "is-muted",
                    isSelected && "is-selected",
                    isToday && "is-today",
                  )}
                  onClick={() => commitDate(date)}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
