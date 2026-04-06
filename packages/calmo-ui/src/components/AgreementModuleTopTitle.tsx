import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface AgreementModuleTopTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export default function AgreementModuleTopTitle({
  title,
  description,
  className = "",
  ...props
}: AgreementModuleTopTitleProps) {
  return (
    <div className={cx("rpl-agreement-module-top-title", className)} {...props}>
      {title ? <Text variant="title">{title}</Text> : null}
      {description ? <Text variant="caption">{description}</Text> : null}
    </div>
  );
}
