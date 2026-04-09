import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  note?: React.ReactNode;
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  compact?: boolean;
}

export default function MetricCard({
  label,
  value,
  note,
  tone = "default",
  compact = false,
  className = "",
  ...props
}: MetricCardProps) {
  return (
    <div
      className={cx(
        "rpl-metric-card",
        `rpl-metric-card-${tone}`,
        compact && "rpl-metric-card-compact",
        className,
      )}
      {...props}
    >
      <Text as="div" variant="caption" className="rpl-metric-card-label">
        {label}
      </Text>
      <Text as="div" variant="title" className="rpl-metric-card-value">
        {value}
      </Text>
      {note ? (
        <Text as="div" variant="caption" className="rpl-metric-card-note">
          {note}
        </Text>
      ) : null}
    </div>
  );
}
