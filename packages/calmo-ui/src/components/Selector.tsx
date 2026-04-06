import React from "react";
import { cx } from "../utils/cx.js";

export default function Selector({
  selected = false,
  type = "underline",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={cx(
        "rpl-selector",
        `rpl-selector-${type}`,
        `rpl-selector-${size}`,
        selected && "rpl-selector-selected",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
