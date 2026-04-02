import React from "react";
import { cx } from "../utils/cx.js";

const rows = [
  ["A", "B", "C", "D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M", "N"],
  ["O", "P", "Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z", "SPACE", "BACKSPACE"],
] as const;

export interface AlphabetKeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (key: string) => void;
  maxLength?: number;
  disabled?: boolean;
}

export default function AlphabetKeypad({
  value = "",
  onChange,
  onKeyPress,
  maxLength,
  disabled = false,
  className = "",
  ...props
}: AlphabetKeypadProps) {
  const commit = (key: string) => {
    if (disabled) return;
    let nextValue = value;

    if (key === "BACKSPACE") {
      nextValue = value.slice(0, -1);
    } else if (key === "SPACE") {
      if (!maxLength || value.length < maxLength) {
        nextValue = `${value} `;
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
    <div className={cx("rpl-keypad", "rpl-keypad-alpha", disabled && "is-disabled", className)} {...props}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="rpl-keypad-row">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              disabled={disabled}
              className={cx(
                "rpl-keypad-key",
                key === "SPACE" && "rpl-keypad-key-wide",
                key === "BACKSPACE" && "rpl-keypad-key-utility",
              )}
              onClick={() => commit(key)}
            >
              {key === "BACKSPACE" ? "⌫" : key === "SPACE" ? "Space" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
