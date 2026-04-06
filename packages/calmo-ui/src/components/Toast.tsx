import React from "react";
import { cx } from "../utils/cx.js";
import Chip from "./Chip.js";
import Icon from "./Icon.js";
import Text from "./Text.js";

const toneToClass = {
  default: "rpl-toast-default",
  success: "rpl-toast-success",
  warning: "rpl-toast-warning",
  danger: "rpl-toast-danger",
};

const sizeClass = {
  sm: "rpl-toast-sm",
  md: "rpl-toast-md",
  lg: "rpl-toast-lg",
};

const variantClass = {
  soft: "rpl-toast-soft",
  solid: "rpl-toast-solid",
};

export default function Toast({
  title,
  description,
  tone = "default",
  size = "md",
  variant = "soft",
  badge,
  icon,
  dismissible = false,
  onDismiss,
  action,
  className = "",
}) {
  return (
    <div
      className={cx(
        "rpl-toast",
        toneToClass[tone] || toneToClass.default,
        sizeClass[size] || sizeClass.md,
        variantClass[variant] || variantClass.soft,
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="rpl-toast-main">
        {icon ? (
          <div className="rpl-toast-icon">
            {typeof icon === "string" ? <Icon name={icon} size={18} /> : icon}
          </div>
        ) : null}
        <div className="rpl-toast-copy">
          <div className="rpl-toast-title-row">
            {badge ? <Chip tone={tone === "default" ? "neutral" : tone}>{badge}</Chip> : null}
            <Text as="strong" variant="body" className="rpl-toast-title">
              {title}
            </Text>
          </div>
          {description ? (
            <Text variant="caption" className="rpl-toast-description">
              {description}
            </Text>
          ) : null}
        </div>
        {dismissible ? (
          <button type="button" className="rpl-toast-dismiss" aria-label="Dismiss toast" onClick={onDismiss}>
            <Icon name="close" size={16} />
          </button>
        ) : null}
        {action ? <div className="rpl-toast-action">{action}</div> : null}
      </div>
    </div>
  );
}
