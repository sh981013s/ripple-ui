import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function ListRow({
  leading,
  title,
  description,
  trailing,
  interactive = false,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) {
  const Component = interactive ? "button" : "div";

  return (
    <Component
      className={cx(
        "rpl-list-row",
        `rpl-list-row-${size}`,
        `rpl-list-row-${variant}`,
        interactive && "rpl-list-row-interactive",
        className,
      )}
      {...props}
    >
      {leading ? <div className="rpl-list-row-leading">{leading}</div> : null}
      <div className="rpl-list-row-copy">
        <Text as="div" variant="body" className="rpl-list-row-title">
          {title}
        </Text>
        {description ? (
          <Text as="div" variant="caption" className="rpl-list-row-description">
            {description}
          </Text>
        ) : null}
      </div>
      {trailing ? <div className="rpl-list-row-trailing">{trailing}</div> : null}
    </Component>
  );
}
