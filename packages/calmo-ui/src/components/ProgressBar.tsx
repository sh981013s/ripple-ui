import React from "react";
import { cx } from "../utils/cx.js";

const toneClass = {
  accent: "rpl-progress-fill-accent",
  success: "rpl-progress-fill-success",
  warning: "rpl-progress-fill-warning",
  danger: "rpl-progress-fill-danger",
};

export default function ProgressBar({
  value = 0,
  max = 100,
  tone = "accent",
  className = "",
}) {
  const ratio = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;

  return (
    <div className={cx("rpl-progress", className)} aria-valuenow={value} aria-valuemax={max} role="progressbar">
      <div className={cx("rpl-progress-fill", toneClass[tone] || toneClass.accent)} style={{ transform: `scaleX(${ratio})` }}></div>
    </div>
  );
}
