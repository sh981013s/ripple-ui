import React, { cloneElement, isValidElement, useId, useState } from "react";
import { cx } from "../utils/cx.js";

export default function Tooltip({ content, position = "top", className = "", children }) {
  const tooltipId = useId();
  const [open, setOpen] = useState(false);
  const child = isValidElement(children)
    ? cloneElement(children, { "aria-describedby": tooltipId })
    : children;

  return (
    <span
      className={cx("rpl-tooltip", open && "is-open", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      {child}
      <span id={tooltipId} className={cx("rpl-tooltip-bubble", `rpl-tooltip-${position}`)} role="tooltip">
        {content}
      </span>
    </span>
  );
}
