import React from "react";
import Button from "./Button.js";
import Dialog from "./Dialog.js";
import Inline from "../primitives/Inline.js";

export default function ConfirmDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  tone = "primary",
  ...props
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      footer={
        <Inline gap={10} wrap>
          <Button variant="ghost" display="block" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            display="block"
            color={tone === "danger" ? "danger" : "primary"}
            onClick={() => {
              onConfirm?.();
              onClose?.();
            }}
          >
            {confirmLabel}
          </Button>
        </Inline>
      }
      {...props}
    />
  );
}
