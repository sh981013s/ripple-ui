import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface StepperRowProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: "done" | "current" | "upcoming";
}

export default function StepperRow({
  index = 1,
  title,
  description,
  status = "upcoming",
  className = "",
  ...props
}: StepperRowProps) {
  return (
    <div className={cx("rpl-stepper-row", `is-${status}`, className)} {...props}>
      <div className={cx("rpl-stepper-row-node", `is-${status}`)} aria-hidden="true">
        {status === "done" ? "✓" : index}
      </div>
      <div className="rpl-stepper-row-copy">
        {title ? <Text as="div" variant="label">{title}</Text> : null}
        {description ? <Text as="div" variant="caption" className="rpl-stepper-row-description">{description}</Text> : null}
      </div>
    </div>
  );
}
