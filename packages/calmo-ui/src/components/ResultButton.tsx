import React from "react";
import Button from "./Button.js";
import { cx } from "../utils/cx.js";

export default function ResultButton({
  tone = "primary",
  variant = "primary",
  size = "large",
  display = "inline",
  className = "",
  children,
  ...props
}) {
  return (
    <Button
      variant={variant}
      color={tone === "danger" ? "danger" : tone === "neutral" ? "neutral" : "primary"}
      size={size}
      display={display}
      className={cx("rpl-result-button", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
