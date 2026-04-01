import React from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.jsx";
import Text from "./Text.jsx";

export default function TopBar({
  leading,
  title,
  subtitle,
  trailing,
  size = "md",
  variant = "floating",
  className = "",
}) {
  return (
    <header className={cx("rpl-top-bar", `rpl-top-bar-${size}`, `rpl-top-bar-${variant}`, className)}>
      <Inline align="center" justify="space-between" className="rpl-top-bar-inner">
        <div className="rpl-top-bar-leading">{leading}</div>
        <div className="rpl-top-bar-copy">
          <Text as="strong" variant="body" className="rpl-top-bar-title">
            {title}
          </Text>
          {subtitle ? (
            <Text as="span" variant="caption" className="rpl-top-bar-subtitle">
              {subtitle}
            </Text>
          ) : null}
        </div>
        <div className="rpl-top-bar-trailing">{trailing}</div>
      </Inline>
    </header>
  );
}
