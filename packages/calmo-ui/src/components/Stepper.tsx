import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function Stepper({
  steps = [],
  current = 0,
  orientation = "horizontal",
  className = "",
}) {
  return (
    <ol className={cx("rpl-stepper", `rpl-stepper-${orientation}`, className)}>
      {steps.map((step, index) => {
        const status = index < current ? "done" : index === current ? "current" : "upcoming";

        return (
          <li key={step.key ?? step.label ?? index} className={cx("rpl-stepper-item", `is-${status}`)}>
            <div className="rpl-stepper-rail" aria-hidden="true" />
            <div className={cx("rpl-stepper-node", `is-${status}`)} aria-hidden="true">
              {status === "done" ? "✓" : index + 1}
            </div>
            <div className="rpl-stepper-copy">
              <Text as="div" variant="label" className="rpl-stepper-label">
                {step.label}
              </Text>
              {step.description ? (
                <Text as="div" variant="caption" className="rpl-stepper-description">
                  {step.description}
                </Text>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
