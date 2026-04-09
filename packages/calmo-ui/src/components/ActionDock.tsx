import React from "react";
import { cx } from "../utils/cx.js";
import safeAreaInset from "../utils/safeAreaInset.js";
import Text from "./Text.js";

export interface ActionDockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  hidden?: boolean;
  sticky?: boolean;
  insetSafeArea?: boolean;
}

export default function ActionDock({
  title,
  description,
  action,
  hidden = false,
  sticky = false,
  insetSafeArea = false,
  className = "",
  style,
  ...props
}: ActionDockProps) {
  if (hidden) return null;

  const resolvedStyle: React.CSSProperties = {
    ...style,
  };

  if (insetSafeArea) {
    if (sticky) {
      resolvedStyle.paddingBottom = safeAreaInset("bottom", 12);
    } else {
      resolvedStyle.bottom = safeAreaInset("bottom", 12);
    }
  }

  return (
    <div
      className={cx("rpl-action-dock-wrap", sticky && "is-sticky", className)}
      style={resolvedStyle}
      {...props}
    >
      <div className="rpl-action-dock">
        <div className="rpl-action-dock-accent" aria-hidden="true" />
        <div className="rpl-action-dock-copy">
          <Text as="div" variant="label" className="rpl-action-dock-title">
            {title}
          </Text>
          {description ? (
            <Text as="div" variant="caption" className="rpl-action-dock-description">
              {description}
            </Text>
          ) : null}
        </div>
        {action ? <div className="rpl-action-dock-action">{action}</div> : null}
      </div>
    </div>
  );
}
