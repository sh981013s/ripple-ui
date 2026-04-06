import React from "react";
import { cx } from "../utils/cx.js";
import ProgressStep from "./ProgressStep.js";

export default function ProgressStepper({
  steps = [],
  current = 0,
  className = "",
}) {
  return (
    <ol className={cx("rpl-progress-stepper", className)}>
      {steps.map((step, index) => {
        const status = index < current ? "done" : index === current ? "current" : "upcoming";
        return (
          <li key={step.key ?? step.label ?? index} className="rpl-progress-stepper-item">
            <ProgressStep index={index + 1} label={step.label} description={step.description} status={status} />
            {index < steps.length - 1 ? <div className={cx("rpl-progress-stepper-rail", `is-${status}`)} aria-hidden="true" /> : null}
          </li>
        );
      })}
    </ol>
  );
}
