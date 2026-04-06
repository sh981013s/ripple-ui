import React, { useRef } from "react";
import { cx } from "../utils/cx.js";
import useOverlayLifecycle from "../hooks/useOverlayLifecycle.js";

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
  size?: "sm" | "md" | "lg";
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  panelClassName?: string;
  children?: React.ReactNode;
}

export default function Dialog({
  open,
  onClose,
  closeOnBackdrop = true,
  size = "md",
  title,
  description,
  footer,
  className = "",
  panelClassName = "",
  children,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  useOverlayLifecycle({ open, onClose, panelRef });

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
      <div ref={panelRef} tabIndex={-1} className={cx("rpl-dialog-panel", `rpl-dialog-panel-${size}`, panelClassName)}>
        {title || description ? (
          <div className="rpl-dialog-header">
            {title ? <div className="rpl-dialog-title">{title}</div> : null}
            {description ? <div className="rpl-dialog-description">{description}</div> : null}
          </div>
        ) : null}
        <div className="rpl-dialog-content">{children}</div>
        {footer ? <div className="rpl-dialog-footer">{footer}</div> : null}
      </div>
    </div>
  );
}
