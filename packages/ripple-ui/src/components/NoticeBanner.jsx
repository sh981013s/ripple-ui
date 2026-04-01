import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

const toneClass = {
  neutral: "rpl-notice-neutral",
  accent: "rpl-notice-accent",
  success: "rpl-notice-success",
  warning: "rpl-notice-warning",
  danger: "rpl-notice-danger",
};

export default function NoticeBanner({
  title,
  description,
  tone = "neutral",
  action,
  className = "",
}) {
  return (
    <div className={cx("rpl-notice", toneClass[tone] || toneClass.neutral, className)}>
      <div className="rpl-notice-copy">
        <Text as="strong" variant="body" className="rpl-notice-title">
          {title}
        </Text>
        {description ? (
          <Text variant="caption" className="rpl-notice-description">
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="rpl-notice-action">{action}</div> : null}
    </div>
  );
}
