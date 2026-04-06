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
  className = "",
  ...props
}: SliderProps) {
  const ratio = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <label className={cx("rpl-slider", className)}>
      {(label || showValue) ? (
        <div className="rpl-slider-header">
          {label ? <Text variant="label">{label}</Text> : <span />}
          {showValue ? <Text variant="caption" className="rpl-slider-value">{value}</Text> : null}
        </div>
      ) : null}
      <input
        type="range"
        className={cx("rpl-slider-input", `rpl-slider-${tone}`)}
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ ["--rpl-slider-ratio" as string]: `${ratio}%` } as React.CSSProperties}
        {...props}
      />
    </label>
  );
}
