import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface LoadedStateBarProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: "default" | "accent" | "success" | "warning";
  compact?: boolean;
}

export default function LoadedStateBar({
  title,
  meta,
  actions,
  tone = "default",
  compact = false,
  className = "",
  ...props
}: LoadedStateBarProps) {
  return (
    <section
      className={cx(
        "rpl-loaded-state-bar",
        `rpl-loaded-state-bar-${tone}`,
        compact && "rpl-loaded-state-bar-compact",
        className,
      )}
      {...props}
    >
      <div className="rpl-loaded-state-bar-copy">
        <Text as="div" variant="label" className="rpl-loaded-state-bar-title">
          {title}
        </Text>
        {meta ? (
          <Text as="div" variant="caption" className="rpl-loaded-state-bar-meta">
            {meta}
          </Text>
        ) : null}
      </div>
      {actions ? <div className="rpl-loaded-state-bar-actions">{actions}</div> : null}
    </section>
  );
}
