import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Text from "./Text.js";
import Inline from "../primitives/Inline.js";
import ResultButton from "./ResultButton.js";

export default function LoadingCompleteView({
  tone = "success",
  title = "Completed",
  description,
  primaryAction,
  secondaryAction,
  className = "",
}) {
  const iconName = tone === "warning" ? "bell" : tone === "danger" ? "close" : "check";

  return (
    <div className={cx("rpl-loading-complete", `rpl-loading-complete-${tone}`, className)}>
      <div className="rpl-loading-complete-icon">
        <Icon name={iconName} size={24} />
      </div>
      <Text variant="title" className="rpl-loading-complete-title">{title}</Text>
      {description ? (
        <Text variant="body" className="rpl-loading-complete-description">{description}</Text>
      ) : null}
      {primaryAction || secondaryAction ? (
        <Inline gap={10} wrap className="rpl-loading-complete-actions">
          {secondaryAction ? (
            <ResultButton
              variant={secondaryAction.variant ?? "ghost"}
              tone={secondaryAction.tone ?? "neutral"}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </ResultButton>
          ) : null}
          {primaryAction ? (
            <ResultButton
              variant={primaryAction.variant ?? "primary"}
              tone={primaryAction.tone ?? (tone === "danger" ? "danger" : "primary")}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </ResultButton>
          ) : null}
        </Inline>
      ) : null}
    </div>
  );
}
