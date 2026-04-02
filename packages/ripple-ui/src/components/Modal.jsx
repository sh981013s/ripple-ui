import React from "react";
import Dialog from "./Dialog.jsx";

export default function Modal({
  headline,
  subheadline,
  actions,
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
      footer={actions}
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
