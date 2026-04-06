import React from "react";
import { cx } from "../utils/cx.js";
import ResultButton from "./ResultButton.js";
import Text from "./Text.js";
import type { AgreementModuleCTAProps } from "./BottomSheetAgreementModule.js";

export interface FloatButtonAgreementModuleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cta?: AgreementModuleCTAProps;
  children?: React.ReactNode;
}

export function FloatButtonAgreementModuleCTA({ label, onClick }: AgreementModuleCTAProps) {
  return null;
}

export default function FloatButtonAgreementModule({
  title,
  description,
  cta,
  className = "",
  children,
  ...props
}: FloatButtonAgreementModuleProps) {
  return (
    <section className={cx("rpl-agreement-float-module", className)} {...props}>
      {title ? <Text variant="title">{title}</Text> : null}
      {description ? <Text variant="caption">{description}</Text> : null}
      <div className="rpl-agreement-float-module-content">{children}</div>
      {cta ? (
        <div className="rpl-agreement-float-module-cta">
          <ResultButton onClick={cta.onClick}>{cta.label}</ResultButton>
        </div>
      ) : null}
    </section>
  );
}
