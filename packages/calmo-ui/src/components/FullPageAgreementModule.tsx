import React from "react";
import { cx } from "../utils/cx.js";
import ResultButton from "./ResultButton.js";
import Text from "./Text.js";
import type { AgreementModuleCTAProps } from "./BottomSheetAgreementModule.js";

export interface FullPageAgreementModuleProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cta?: AgreementModuleCTAProps;
  children?: React.ReactNode;
}

export function FullPageAgreementModuleCTA({ label, onClick }: AgreementModuleCTAProps) {
  return null;
}

export default function FullPageAgreementModule({
  title,
  description,
  cta,
  className = "",
  children,
  ...props
}: FullPageAgreementModuleProps) {
  return (
    <section className={cx("rpl-agreement-full-page", className)} {...props}>
      <div className="rpl-agreement-full-page-inner">
        {title ? <Text variant="hero">{title}</Text> : null}
        {description ? <Text variant="body">{description}</Text> : null}
        <div className="rpl-agreement-full-page-content">{children}</div>
        {cta ? <ResultButton onClick={cta.onClick}>{cta.label}</ResultButton> : null}
      </div>
    </section>
  );
}
