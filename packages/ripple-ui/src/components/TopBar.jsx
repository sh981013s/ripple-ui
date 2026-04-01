import React from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.jsx";
import Text from "./Text.jsx";

export default function TopBar({
  leading,
  title,
  subtitle,
  trailing,
  upper,
  subtitleTop,
  subtitleBottom,
  lower,
  right,
  rightVerticalAlign = "center",
  size = "md",
  variant = "floating",
  align = "center",
  className = "",
}) {
  const resolvedTrailing = right ?? trailing;
  const resolvedSubtitleTop = subtitleTop ?? upper;
  const resolvedSubtitleBottom = subtitleBottom ?? subtitle;

  return (
    <header className={cx("rpl-top-bar", `rpl-top-bar-${size}`, `rpl-top-bar-${variant}`, className)}>
      <Inline align="center" justify="space-between" className="rpl-top-bar-inner">
        <div className="rpl-top-bar-leading">{leading}</div>
        <div className={cx("rpl-top-bar-copy", `is-${align}`)}>
          {resolvedSubtitleTop ? (
            <Text as="span" variant="caption" className="rpl-top-bar-subtitle-top">
              {resolvedSubtitleTop}
            </Text>
          ) : null}
          <Text as="strong" variant="body" className="rpl-top-bar-title">
            {title}
          </Text>
          {resolvedSubtitleBottom ? (
            <Text as="span" variant="caption" className="rpl-top-bar-subtitle">
              {resolvedSubtitleBottom}
            </Text>
          ) : null}
          {lower ? (
            <Text as="span" variant="caption" className="rpl-top-bar-lower">
              {lower}
            </Text>
          ) : null}
        </div>
        <div className={cx("rpl-top-bar-trailing", `is-${rightVerticalAlign}`)}>{resolvedTrailing}</div>
      </Inline>
    </header>
  );
}
