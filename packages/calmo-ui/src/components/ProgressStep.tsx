import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";
import Icon from "./Icon.js";

export default function ProgressStep({
  status = "upcoming",
  index,
  label,
  description,
  className = "",
}) {
  return (
    <div className={cx("rpl-progress-step", `is-${status}`, className)}>
      <div className="rpl-progress-step-node" aria-hidden="true">
        {status === "done" ? <Icon name="check" size={14} /> : index}
      </div>
      <div className="rpl-progress-step-copy">
        <Text variant="label" className="rpl-progress-step-label">{label}</Text>
        {description ? <Text variant="caption" className="rpl-progress-step-description">{description}</Text> : null}
      </div>
    </div>
  );
}
