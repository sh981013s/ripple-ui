import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Text from "./Text.js";

const toneClass = {
  default: "rpl-snackbar-default",
  success: "rpl-snackbar-success",
  warning: "rpl-snackbar-warning",
  danger: "rpl-snackbar-danger",
};

export default function Snackbar({
  open,
  message,
  action,
  tone = "default",
  align = "center",
  icon,
  dismissible = false,
  onDismiss,
  className = "",
}) {
  if (!open) {
    return null;
  }

  return (
    <div className={cx("rpl-snackbar", `rpl-snackbar-${align}`, toneClass[tone] || toneClass.default, className)} role="status" aria-live="polite">
      {icon ? <span className="rpl-snackbar-icon">{typeof icon === "string" ? <Icon name={icon} size={16} /> : icon}</span> : null}
      <Text as="span" variant="body" className="rpl-snackbar-message">
        {message}
      </Text>
      {action ? <div className="rpl-snackbar-action">{action}</div> : null}
      {dismissible ? (
        <button type="button" className="rpl-snackbar-dismiss" aria-label="Dismiss snackbar" onClick={onDismiss}>
          <Icon name="close" size={14} />
        </button>
      ) : null}
    </div>
  );
}
