import React from "react";
import { cx } from "../utils/cx.js";

export default function TextButton({
  tone = "default",
  size = "md",
  leading,
  trailing,
  underline = false,
  className = "",
  type = "button",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-text-button",
        `rpl-text-button-${tone}`,
        `rpl-text-button-${size}`,
        underline && "rpl-text-button-underline",
        className,
      )}
      {...props}
    >
      {leading ? <span className="rpl-text-button-leading">{leading}</span> : null}
      <span className="rpl-text-button-label">{children}</span>
      {trailing ? <span className="rpl-text-button-trailing">{trailing}</span> : null}
    </button>
  );
}
