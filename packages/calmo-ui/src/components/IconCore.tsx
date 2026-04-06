import React from "react";
import { cx } from "../utils/cx.js";

export interface IconCoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  children?: React.ReactNode;
}

export default function IconCore({
  size = 24,
  viewBox = "0 0 24 24",
  className = "",
  children,
  ...props
}: IconCoreProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={cx("rpl-icon-core", className)}
      {...props}
    >
      {children}
    </svg>
  );
}
