import React from "react";
import { cx } from "../utils/cx.js";
import Bubble from "./Bubble.js";

export interface SliderTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | string;
  tone?: "default" | "accent" | "success" | "warning" | "danger";
  placement?: "top" | "bottom";
}

export default function SliderTooltip({
  value = 0,
  tone = "accent",
  placement = "top",
  className = "",
  ...props
}: SliderTooltipProps) {
  return (
    <Bubble className={cx("rpl-slider-tooltip", className)} tone={tone} placement={placement} {...props}>
      {value}
    </Bubble>
  );
}
