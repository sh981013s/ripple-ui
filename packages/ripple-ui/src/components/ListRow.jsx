import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.jsx";

export default function ListRow({
  leading,
  title,
  description,
  eyebrow,
  meta,
  trailing,
  interactive = false,
  size = "md",
  variant = "default",
  className = "",
  type = "button",
  ...props
}) {
  const Component = interactive ? "button" : "div";

  return (
    <Component
      type={interactive ? type : undefined}
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
        {eyebrow ? (
          <Text as="div" variant="label" className="rpl-list-row-eyebrow">
            {eyebrow}
          </Text>
        ) : null}
        <Text as="div" variant="body" className="rpl-list-row-title">
          {title}
        </Text>
        {description ? (
          <Text as="div" variant="caption" className="rpl-list-row-description">
            {description}
          </Text>
        ) : null}
      </div>
      {(meta || trailing) ? (
        <div className="rpl-list-row-trailing">
          {meta ? (
            <Text as="div" variant="caption" className="rpl-list-row-meta">
              {meta}
            </Text>
          ) : null}
          {trailing}
        </div>
      ) : null}
    </Component>
  );
}
