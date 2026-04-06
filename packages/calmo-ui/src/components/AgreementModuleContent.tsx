import React from "react";
import { cx } from "../utils/cx.js";

export interface AgreementModuleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function AgreementModuleContent({ className = "", children, ...props }: AgreementModuleContentProps) {
  return (
    <div className={cx("rpl-agreement-module-content", className)} {...props}>
      {children}
    </div>
  );
}
