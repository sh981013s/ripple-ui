import React from "react";
import { cx } from "../utils/cx.js";

export default function Border({
  orientation = "horizontal",
  inset = false,
  strong = false,
  className = "",
  ...props
}) {
  return (
    <div
      className={cx(
        "rpl-border",
        `rpl-border-${orientation}`,
        inset && "rpl-border-inset",
        strong && "rpl-border-strong",
        className,
      )}
      {...props}
    />
  );
}
