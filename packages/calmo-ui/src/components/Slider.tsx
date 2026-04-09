import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "type"> {
  label?: React.ReactNode;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  tone?: "accent" | "success" | "warning" | "danger";
  showValue?: boolean;
  size?: "default" | "compact";
  showLimits?: boolean;
  minLabel?: React.ReactNode;
  maxLabel?: React.ReactNode;
  valueFormatter?: (value: number) => React.ReactNode;
  className?: string;
}

export default function Slider({
  label,
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  tone = "accent",
  showValue = true,
  size = "default",
  showLimits = false,
  minLabel,
  maxLabel,
  valueFormatter,
  className = "",
  ...props
}: SliderProps) {
  const ratio = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const formattedValue = valueFormatter ? valueFormatter(value) : value;

  return (
    <label className={cx("rpl-slider", `rpl-slider-size-${size}`, className)}>
      {(label || showValue) ? (
        <div className="rpl-slider-header">
          {label ? <Text variant="label">{label}</Text> : <span />}
          {showValue ? <Text variant="caption" className="rpl-slider-value">{formattedValue}</Text> : null}
        </div>
      ) : null}
      <input
        type="range"
        className={cx("rpl-slider-input", `rpl-slider-${tone}`, size === "compact" && "rpl-slider-input-compact")}
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ["--rpl-slider-ratio" as string]: `${ratio}%` } as React.CSSProperties}
        {...props}
      />
      {showLimits ? (
        <div className="rpl-slider-limits">
          <Text as="span" variant="caption" className="rpl-slider-limit">
            {minLabel ?? min}
          </Text>
          <Text as="span" variant="caption" className="rpl-slider-limit">
            {maxLabel ?? max}
          </Text>
        </div>
      ) : null}
    </label>
  );
}
