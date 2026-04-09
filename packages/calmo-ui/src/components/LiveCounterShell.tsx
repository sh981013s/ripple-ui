import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface LiveCounterShellProps extends React.HTMLAttributes<HTMLDivElement> {
  scopeLabel: React.ReactNode;
  valueLabel?: React.ReactNode;
  value: React.ReactNode;
  suffix?: React.ReactNode;
  compact?: boolean;
}

export default function LiveCounterShell({
  scopeLabel,
  valueLabel,
  value,
  suffix = "+",
  compact = false,
  className = "",
  ...props
}: LiveCounterShellProps) {
  return (
    <div className={cx("rpl-live-counter", compact && "rpl-live-counter-compact", className)} {...props}>
      <div className="rpl-live-counter-copy">
        <Text as="div" variant="caption" className="rpl-live-counter-scope">
          {scopeLabel}
        </Text>
        {valueLabel ? (
          <Text as="div" variant="caption" className="rpl-live-counter-label">
            {valueLabel}
          </Text>
        ) : null}
      </div>
      <div className="rpl-live-counter-value-wrap">
        <span className="rpl-live-counter-value">{value}</span>
        {suffix ? <span className="rpl-live-counter-suffix">{suffix}</span> : null}
      </div>
    </div>
  );
}
