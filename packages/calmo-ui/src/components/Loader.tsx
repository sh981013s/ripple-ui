import React from "react";
import { cx } from "../utils/cx.js";

export default function Loader({
  size = "md",
  label,
  tone = "accent",
  centered = false,
  overlay = false,
  className = "",
}) {
  return (
    <span className={cx("rpl-loader-wrap", centered && "rpl-loader-wrap-centered", overlay && "rpl-loader-wrap-overlay", className)} role="status" aria-live="polite">
      <span className={cx("rpl-loader", `rpl-loader-${size}`, `rpl-loader-${tone}`)} aria-hidden="true" />
      {label ? <span className="rpl-loader-label">{label}</span> : <span className="rpl-visually-hidden">Loading</span>}
    </span>
  );
}
