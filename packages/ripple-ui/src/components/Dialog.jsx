import React from "react";
import { cx } from "../utils/cx.js";

export default function Dialog({
  open,
  onClose,
  closeOnBackdrop = true,
  className = "",
  panelClassName = "",
  children,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className={cx("rpl-dialog-backdrop", className)}
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className={cx("rpl-dialog-panel", panelClassName)}>{children}</div>
    </div>
  );
}
