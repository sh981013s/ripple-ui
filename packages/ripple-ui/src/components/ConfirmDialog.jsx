import React from "react";
import Button from "./Button.jsx";
import Dialog from "./Dialog.jsx";
import Inline from "../primitives/Inline.jsx";

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
