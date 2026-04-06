import React from "react";
import { cx } from "../utils/cx.js";

export default function Skeleton({
  width,
  height = 16,
  radius = "md",
  className = "",
  style,
  ...props
}) {
  return (
    <span
      className={cx("rpl-skeleton", `rpl-skeleton-radius-${radius}`, className)}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...props}
    />
  );
}
