import React from "react";
import { cx } from "../utils/cx.js";

const classByVariant = {
  primary: "rpl-button-primary",
  ghost: "rpl-button-ghost",
  weak: "rpl-button-weak",
  icon: "rpl-button-icon",
};

export default function Button({ variant = "primary", className = "", children, ...props }) {
  return (
    <button className={cx("rpl-button", classByVariant[variant] || classByVariant.primary, className)} {...props}>
      {children}
    </button>
  );
}
