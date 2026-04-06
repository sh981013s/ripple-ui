import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function InfoRow({
  label,
  value,
  className = "",
  valueClassName = "",
  children,
  ...props
}) {
  return (
    <div className={cx("rpl-info-row", className)} {...props}>
      <Text as="span" variant="label" className="rpl-info-row-label">
        {label}
      </Text>
      <div className={cx("rpl-info-row-value", valueClassName)}>
        {children ?? value}
      </div>
    </div>
  );
}
