import React from "react";
import BottomSheet from "./BottomSheet.js";
import Text from "./Text.js";

export interface AgreementModuleCTAProps {
  label: React.ReactNode;
  onClick?: () => void;
}

export interface BottomSheetAgreementModuleProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cta?: AgreementModuleCTAProps;
  children?: React.ReactNode;
}

export function BottomSheetAgreementModuleCTA({ label, onClick }: AgreementModuleCTAProps) {
  return null;
}

export default function BottomSheetAgreementModule({
  open,
  onClose,
  title = "Review agreements",
  description,
  cta,
  children,
}: BottomSheetAgreementModuleProps) {
  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      header={<Text variant="title">{title}</Text>}
      description={description ? <Text variant="caption">{description}</Text> : undefined}
      primaryAction={cta ? { label: cta.label, onClick: cta.onClick ?? onClose } : undefined}
    >
      {children}
    </BottomSheet>
  );
}
