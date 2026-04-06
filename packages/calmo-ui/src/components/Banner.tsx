import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

const toneClass = {
  neutral: "rpl-banner-neutral",
  accent: "rpl-banner-accent",
  success: "rpl-banner-success",
  warning: "rpl-banner-warning",
  danger: "rpl-banner-danger",
};

export default function Banner({
  eyebrow,
  title,
  description,
  tone = "neutral",
  action,
  compact = false,
  className = "",
}) {
  return (
    <div className={cx("rpl-banner", toneClass[tone] || toneClass.neutral, compact && "rpl-banner-compact", className)}>
      <div className="rpl-banner-copy">
        {eyebrow ? (
          <Text as="span" variant="label" className="rpl-banner-eyebrow">
            {eyebrow}
          </Text>
        ) : null}
        <Text as="strong" variant="body" className="rpl-banner-title">
          {title}
        </Text>
        {description ? (
          <Text as="p" variant="caption" className="rpl-banner-description">
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="rpl-banner-action">{action}</div> : null}
    </div>
  );
}
