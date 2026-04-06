import React from "react";
import { cx } from "../utils/cx.js";
import Button, { type ButtonProps } from "./Button.js";

export interface BottomCTAAction extends Omit<ButtonProps, "children"> {
  label: React.ReactNode;
}

export interface BottomCTADoubleProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryAction: BottomCTAAction;
  secondaryAction?: BottomCTAAction;
  inset?: boolean;
}

export interface BottomCTANamespace {
  Double: typeof BottomCTADouble;
}

function CTAButton({ label, className = "", ...props }: BottomCTAAction) {
  return (
    <Button display="block" className={cx("rpl-bottom-cta-button", className)} {...props}>
      {label}
    </Button>
  );
}

export function BottomCTADouble({
  primaryAction,
  secondaryAction,
  inset = true,
  className = "",
  ...props
}: BottomCTADoubleProps) {
  return (
    <div className={cx("rpl-bottom-cta", inset && "rpl-bottom-cta-inset", className)} {...props}>
      <div className="rpl-bottom-cta-row">
        {secondaryAction ? (
          <CTAButton variant="ghost" color="primary" {...secondaryAction} />
        ) : null}
        <CTAButton variant="primary" color="primary" {...primaryAction} />
      </div>
    </div>
  );
}

export const BottomCTA: BottomCTANamespace = {
  Double: BottomCTADouble,
};

export default BottomCTADouble;
