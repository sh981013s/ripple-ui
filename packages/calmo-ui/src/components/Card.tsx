import React from "react";
import Surface from "../primitives/Surface.js";
import { cx } from "../utils/cx.js";

export default function Card({ tone = "default", radius = "lg", className = "", children, ...props }) {
  return (
    <Surface tone={tone} radius={radius} className={cx("rpl-card", className)} {...props}>
      {children}
    </Surface>
  );
}
