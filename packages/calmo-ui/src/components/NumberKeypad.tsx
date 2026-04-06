import React from "react";
import { cx } from "../utils/cx.js";

const rows = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [".", "0", "BACKSPACE"],
] as const;

export interface NumberKeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (key: string) => void;
  allowDecimal?: boolean;
  disabled?: boolean;
  maxLength?: number;
}

export default function NumberKeypad({
  value = "",
  onChange,
  onKeyPress,
  allowDecimal = true,
  disabled = false,
  maxLength,
  className = "",
  ...props
}: NumberKeypadProps) {
  const commit = (key: string) => {
    if (disabled) return;
    let nextValue = value;

    if (key === "BACKSPACE") {
      nextValue = value.slice(0, -1);
    } else if (key === ".") {
      if (allowDecimal && !value.includes(".") && (!maxLength || value.length < maxLength)) {
        nextValue = `${value}.`;
      }
    } else if (!maxLength || value.length < maxLength) {
      nextValue = `${value}${key}`;
    }

    onKeyPress?.(key);
    if (nextValue !== value) {
      onChange?.(nextValue);
    }
  };

  return (
    <div className={cx("rpl-keypad", "rpl-keypad-number", disabled && "is-disabled", className)} {...props}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="rpl-keypad-row">
          {row.map((key) => {
            if (key === "." && !allowDecimal) {
              return <span key={key} className="rpl-keypad-empty" aria-hidden="true" />;
            }
            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                className={cx("rpl-keypad-key", key === "BACKSPACE" && "rpl-keypad-key-utility")}
                onClick={() => commit(key)}
              >
                {key === "BACKSPACE" ? "⌫" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
