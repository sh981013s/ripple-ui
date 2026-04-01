import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

const toneClass = {
  default: "rpl-snackbar-default",
  success: "rpl-snackbar-success",
  warning: "rpl-snackbar-warning",
  danger: "rpl-snackbar-danger",
};

export default function Snackbar({ open, message, action, tone = "default", align = "center", className = "" }) {
  if (!open) {
    return null;
  }

  return (
    <div className={cx("rpl-snackbar", `rpl-snackbar-${align}`, toneClass[tone] || toneClass.default, className)} role="status" aria-live="polite">
      <Text as="span" variant="body" className="rpl-snackbar-message">
        {message}
      </Text>
      {action ? <div className="rpl-snackbar-action">{action}</div> : null}
    </div>
  );
}
