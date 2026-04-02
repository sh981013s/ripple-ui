import React from "react";
import { cx } from "../utils/cx.js";

export default function GridList({
  columns = 2,
  gap = 16,
  className = "",
  children,
  ...props
}) {
  return (
    <div
      className={cx("rpl-grid-list", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap }}
      {...props}
    >
      {children}
    </div>
  );
}
