import React from "react";
import { cx } from "../utils/cx.js";

export default function Tooltip({ content, position = "top", className = "", children }) {
  return (
    <span className={cx("rpl-tooltip", className)}>
      {children}
      <span className={cx("rpl-tooltip-bubble", `rpl-tooltip-${position}`)} role="tooltip">
        {content}
      </span>
    </span>
  );
}
