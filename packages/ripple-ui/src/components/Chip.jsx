import React from "react";
import { cx } from "../utils/cx.js";

const classByTone = {
  accent: "rpl-chip-accent",
  neutral: "rpl-chip-neutral",
  success: "rpl-chip-success",
  warning: "rpl-chip-warning",
};

export default function Chip({ tone = "accent", className = "", children, ...props }) {
  return (
    <span className={cx("rpl-chip", classByTone[tone] || classByTone.accent, className)} {...props}>
      {children}
    </span>
  );
}
