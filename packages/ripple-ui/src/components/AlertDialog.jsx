import React from "react";
import Button from "./Button.jsx";
import Dialog from "./Dialog.jsx";

export default function AlertDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel = "Confirm",
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
      }
      {...props}
    />
  );
}
