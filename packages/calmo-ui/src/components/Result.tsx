import React from "react";
import { cx } from "../utils/cx.js";
import Button from "./Button.js";
import Inline from "../primitives/Inline.js";
import Text from "./Text.js";

export default function Result({
  tone = "default",
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  className = "",
  children,
}) {
  return (
    <div className={cx("rpl-result", `rpl-result-${tone}`, className)}>
      {icon ? <div className="rpl-result-icon">{icon}</div> : null}
      {title ? (
        <Text as="div" variant="title" className="rpl-result-title">
          {title}
        </Text>
      ) : null}
      {description ? (
        <Text as="div" variant="body" className="rpl-result-description">
          {description}
        </Text>
      ) : null}
      {children ? <div className="rpl-result-content">{children}</div> : null}
      {primaryAction || secondaryAction ? (
        <Inline gap={10} wrap align="center" className="rpl-result-actions">
          {secondaryAction ? (
            <Button
              variant={secondaryAction.variant ?? "ghost"}
              color={secondaryAction.color ?? "primary"}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          ) : null}
          {primaryAction ? (
            <Button
              variant={primaryAction.variant ?? "primary"}
              color={primaryAction.color ?? "primary"}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          ) : null}
        </Inline>
      ) : null}
    </div>
  );
}
