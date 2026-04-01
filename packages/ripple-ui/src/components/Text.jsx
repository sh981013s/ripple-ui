import React from "react";
import { cx } from "../utils/cx.js";

const classByVariant = {
  hero: "rpl-text-hero",
  title: "rpl-text-title",
  body: "rpl-text-body",
  label: "rpl-text-label",
  caption: "rpl-text-caption",
};

export default function Text({ as: Component = "p", variant = "body", className = "", children, ...props }) {
  return (
    <Component className={cx("rpl-text", classByVariant[variant] || classByVariant.body, className)} {...props}>
      {children}
    </Component>
  );
}
