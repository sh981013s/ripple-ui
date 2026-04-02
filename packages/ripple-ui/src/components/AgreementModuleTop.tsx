import React from "react";
import { cx } from "../utils/cx.js";
import AgreementModuleTopTitle from "./AgreementModuleTopTitle.js";

export interface AgreementModuleTopProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export default function AgreementModuleTop({
  title,
  description,
  action,
  className = "",
  children,
  ...props
}: AgreementModuleTopProps) {
  return (
    <div className={cx("rpl-agreement-module-top", className)} {...props}>
      <AgreementModuleTopTitle title={title}>{children}</AgreementModuleTopTitle>
      {description ? <AgreementModuleTopTitle description={description} /> : null}
      {action ? <div className="rpl-agreement-module-top-action">{action}</div> : null}
    </div>
  );
}
