import React from "react";
import { cx } from "../utils/cx.js";

export default function GridList({
  columns = 2,
  gap = 16,
  className = "",
  children,
  ...props
}) {
  const tabletColumns = Math.min(Number(columns) || 1, 2);
  const mobileColumns = 1;
  return (
    <div
      className={cx("rpl-grid-list", className)}
      style={{
        ["--rpl-grid-columns"]: String(columns),
        ["--rpl-grid-columns-tablet"]: String(tabletColumns),
        ["--rpl-grid-columns-mobile"]: String(mobileColumns),
        ["--rpl-grid-gap"]: typeof gap === "number" ? `${gap}px` : gap,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
