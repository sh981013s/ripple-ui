import React from "react";
import { cx } from "../utils/cx.js";
import IconButton from "./IconButton.js";
import Text from "./Text.js";

export interface NumericSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  formatter?: (value: number) => React.ReactNode;
}

export default function NumericSpinner({
  value = 0,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled = false,
  onChange,
  formatter,
  className = "",
  ...props
}: NumericSpinnerProps) {
  const clamp = (nextValue: number) => Math.min(max, Math.max(min, nextValue));
  const commit = (delta: number) => {
    if (disabled) return;
    onChange?.(clamp(value + delta));
  };

  return (
    <div className={cx("rpl-numeric-spinner", disabled && "is-disabled", className)} {...props}>
      <IconButton aria-label="Decrease value" disabled={disabled || value <= min} onClick={() => commit(-step)}>
        -
      </IconButton>
      <Text as="span" variant="body" className="rpl-numeric-spinner-value">
        {formatter ? formatter(value) : value}
      </Text>
      <IconButton aria-label="Increase value" disabled={disabled || value >= max} onClick={() => commit(step)}>
        +
      </IconButton>
    </div>
  );
}
