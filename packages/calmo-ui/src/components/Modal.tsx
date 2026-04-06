import React from "react";
import Dialog from "./Dialog.js";
import Button from "./Button.js";
import Inline from "../primitives/Inline.js";
import TextButton from "./TextButton.js";

function renderActions({
  actions,
  tertiaryAction,
  secondaryAction,
  primaryAction,
}) {
  if (actions) return actions;
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

export default function Modal({
  headline,
  subheadline,
  actions,
  tertiaryAction,
  secondaryAction,
  primaryAction,
  tone = "default",
  size = "md",
  showCloseButton = true,
  closeLabel = "Close modal",
  onClose,
  children,
  ...props
}) {
  return (
    <Dialog
      size={size}
      onClose={onClose}
      title={headline}
      description={subheadline}
      footer={renderActions({ actions, tertiaryAction, secondaryAction, primaryAction })}
      panelClassName={`rpl-modal-panel rpl-modal-panel-${tone}`}
      {...props}
    >
      {showCloseButton ? (
        <button
          type="button"
          className="rpl-modal-close"
          aria-label={closeLabel}
          onClick={() => onClose?.()}
        >
          ✕
        </button>
      ) : null}
      <div className="rpl-modal-content">{children}</div>
    </Dialog>
  );
}
