import React from "react";
import { cx } from "../utils/cx.js";

export default function BottomSheet({
  open,
  onClose,
  closeOnBackdrop = true,
  size = "md",
  variant = "floating",
  className = "",
  panelClassName = "",
  children,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className={cx("rpl-sheet-backdrop", className)}
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className={cx("rpl-sheet-panel", `rpl-sheet-panel-${size}`, `rpl-sheet-panel-${variant}`, panelClassName)}>
        <div className="rpl-sheet-handle" aria-hidden="true"></div>
        {children}
      </div>
    </div>
  );
}
