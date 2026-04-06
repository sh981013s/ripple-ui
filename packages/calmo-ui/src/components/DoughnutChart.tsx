import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

const toneColor = {
  accent: "var(--rpl-color-accent)",
  success: "var(--rpl-color-success)",
  warning: "var(--rpl-color-warning)",
  danger: "var(--rpl-color-danger)",
  neutral: "var(--rpl-color-text-tertiary)",
};

export default function DoughnutChart({
  value = 64,
  max = 100,
  size = 144,
  stroke = 12,
  tone = "accent",
  label = "Completion",
  description,
  className = "",
  children,
  ...props
}) {
  const clamped = Math.max(0, Math.min(value, max));
  const radius = (size - stroke) / 2;
  const circumference = Math.PI * 2 * radius;
  const progress = circumference - (clamped / max) * circumference;

  return (
    <div className={cx("rpl-doughnut-chart", className)} style={{ width: size, height: size }} {...props}>
      <svg viewBox={`0 0 ${size} ${size}`} className="rpl-doughnut-chart-svg" aria-hidden="true">
        <circle
          className="rpl-doughnut-chart-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          className="rpl-doughnut-chart-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
          stroke={toneColor[tone] || toneColor.accent}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </svg>
      <div className="rpl-doughnut-chart-center">
        {children ?? (
          <>
            <Text as="span" variant="title">{Math.round((clamped / max) * 100)}%</Text>
            <Text as="span" variant="caption">{label}</Text>
            {description ? <Text as="span" variant="caption">{description}</Text> : null}
          </>
        )}
      </div>
    </div>
  );
}
