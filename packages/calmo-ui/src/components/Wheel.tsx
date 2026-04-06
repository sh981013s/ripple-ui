import React from "react";
import { cx } from "../utils/cx.js";

export interface WheelOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface WheelProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: WheelOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  visibleCount?: number;
}

export default function Wheel({
  options = [],
  value,
  onChange,
  visibleCount = 5,
  className = "",
  ...props
}: WheelProps) {
  return (
    <div
      className={cx("rpl-wheel", className)}
      style={{ ["--rpl-wheel-visible-count" as string]: String(visibleCount) } as React.CSSProperties}
      {...props}
    >
      <div className="rpl-wheel-window" aria-hidden="true" />
      <div className="rpl-wheel-options" role="listbox">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={String(option.value)}
              type="button"
              role="option"
              aria-selected={active}
              disabled={option.disabled}
              className={cx("rpl-wheel-option", active && "is-active")}
              onClick={() => {
                if (!option.disabled) {
                  onChange?.(option.value);
                }
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
