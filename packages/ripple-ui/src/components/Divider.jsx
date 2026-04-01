import React from "react";
import { cx } from "../utils/cx.js";

export default function Divider({ orientation = "horizontal", inset = false, className = "", ...props }) {
  return (
    <div
      className={cx(
        "rpl-divider",
        orientation === "vertical" ? "rpl-divider-vertical" : "rpl-divider-horizontal",
        inset && "rpl-divider-inset",
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
