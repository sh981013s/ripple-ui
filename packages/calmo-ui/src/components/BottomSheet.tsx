import React, { useRef } from "react";
import { cx } from "../utils/cx.js";
import Button from "./Button.js";
import Inline from "../primitives/Inline.js";
import TextButton from "./TextButton.js";
import useOverlayLifecycle from "../hooks/useOverlayLifecycle.js";

function renderActions({
  footer,
  tertiaryAction,
  secondaryAction,
  primaryAction,
}) {
  if (footer) return footer;
  if (!tertiaryAction && !secondaryAction && !primaryAction) return null;

  return (
    <Inline gap={10} wrap align="center">
      {tertiaryAction ? (
        <TextButton
          tone={tertiaryAction.tone ?? "neutral"}
          icon={tertiaryAction.icon}
          iconPosition={tertiaryAction.iconPosition}
          onClick={tertiaryAction.onClick}
        >
          {tertiaryAction.label}
        </TextButton>
      ) : null}
      {secondaryAction ? (
        <Button
          variant={secondaryAction.variant ?? "ghost"}
          color={secondaryAction.color ?? "primary"}
          display="block"
          onClick={secondaryAction.onClick}
        >
          {secondaryAction.label}
        </Button>
      ) : null}
      {primaryAction ? (
        <Button
          variant={primaryAction.variant ?? "primary"}
          color={primaryAction.color ?? "primary"}
          display="block"
          onClick={primaryAction.onClick}
        >
          {primaryAction.label}
        </Button>
      ) : null}
    </Inline>
  );
}

function BottomSheet({
  open,
  onClose,
  closeOnBackdrop = true,
  size = "md",
  variant = "floating",
  header,
  description,
  footer,
  tertiaryAction,
  secondaryAction,
  primaryAction,
  className = "",
  panelClassName = "",
  children,
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  useOverlayLifecycle({ open, onClose, panelRef, trapFocus: false });

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
      <div ref={panelRef} tabIndex={-1} className={cx("rpl-sheet-panel", `rpl-sheet-panel-${size}`, `rpl-sheet-panel-${variant}`, panelClassName)}>
        <div className="rpl-sheet-handle" aria-hidden="true"></div>
        {header || description ? (
          <div className="rpl-sheet-header-wrap">
            {header ? <div className="rpl-sheet-header">{header}</div> : null}
            {description ? <div className="rpl-sheet-description">{description}</div> : null}
          </div>
        ) : null}
        <div className="rpl-sheet-content">{children}</div>
        {renderActions({ footer, tertiaryAction, secondaryAction, primaryAction }) ? (
          <div className="rpl-sheet-footer">
            {renderActions({ footer, tertiaryAction, secondaryAction, primaryAction })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BottomSheet;
