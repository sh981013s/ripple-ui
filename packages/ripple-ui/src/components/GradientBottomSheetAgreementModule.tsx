import React from "react";
import BottomSheet from "./BottomSheet.js";
import Text from "./Text.js";
import type { AgreementModuleCTAProps, BottomSheetAgreementModuleProps } from "./BottomSheetAgreementModule.js";

export interface GradientBottomSheetAgreementModuleProps extends BottomSheetAgreementModuleProps {}

export function GradientBottomSheetAgreementModuleCTA({ label, onClick }: AgreementModuleCTAProps) {
  return null;
}

export default function GradientBottomSheetAgreementModule({
  open,
  onClose,
  title = "Consent update",
  description,
  cta,
  children,
}: GradientBottomSheetAgreementModuleProps) {
  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      className="rpl-agreement-gradient-sheet-backdrop"
      panelClassName="rpl-agreement-gradient-sheet"
      header={<Text variant="title">{title}</Text>}
      description={description ? <Text variant="caption">{description}</Text> : undefined}
      primaryAction={cta ? { label: cta.label, onClick: cta.onClick ?? onClose } : undefined}
    >
      {children}
    </BottomSheet>
  );
}
