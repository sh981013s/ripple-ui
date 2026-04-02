import React from "react";
import { cx } from "../utils/cx.js";

export interface AgreementModuleStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  delayStep?: number;
  children?: React.ReactNode;
}

export default function AgreementModuleStagger({
  delayStep = 40,
  className = "",
  children,
  ...props
}: AgreementModuleStaggerProps) {
  return (
    <div className={cx("rpl-agreement-module-stagger", className)} {...props}>
      {React.Children.map(children, (child, index) => (
        <div className="rpl-agreement-module-stagger-item" style={{ animationDelay: `${index * delayStep}ms` }}>
          {child}
        </div>
      ))}
    </div>
  );
}
