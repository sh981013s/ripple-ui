import React from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.js";
import Text from "./Text.js";

export default function BottomInfo({
  icon,
  title,
  description,
  action,
  className = "",
  ...props
}) {
  return (
    <div className={cx("rpl-bottom-info", className)} {...props}>
      <Inline gap={12} align="center" className="rpl-bottom-info-main">
        {icon ? <div className="rpl-bottom-info-icon">{icon}</div> : null}
        <div className="rpl-bottom-info-copy">
          {title ? <Text as="div" variant="label" className="rpl-bottom-info-title">{title}</Text> : null}
          {description ? <Text as="div" variant="caption" className="rpl-bottom-info-description">{description}</Text> : null}
        </div>
      </Inline>
      {action ? <div className="rpl-bottom-info-action">{action}</div> : null}
    </div>
  );
}
