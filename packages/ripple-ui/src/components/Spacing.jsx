import React from "react";
import { cx } from "../utils/cx.js";

export default function Spacing({ size = 16, className = "", ...props }) {
  return <div className={cx("rpl-spacing", className)} style={{ height: size }} aria-hidden="true" {...props} />;
}
