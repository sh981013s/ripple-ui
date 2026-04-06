import React from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.js";
import Text from "./Text.js";

export default function TopBar({
  leading,
  title,
  subtitle,
  trailing,
  badges,
  titleSelector,
  subtitleSelector,
  rightButton,
  rightArrow = false,
  upper,
  subtitleTop,
  subtitleBottom,
  lower,
  right,
  rightVerticalAlign = "center",
  size = "md",
  variant = "floating",
  surface = "default",
  divider = false,
  sticky = false,
  align = "center",
  className = "",
}) {
  const resolvedTrailing = rightButton ?? right ?? trailing;
  const resolvedSubtitleTop = subtitleTop ?? upper;
  const resolvedSubtitleBottom = subtitleBottom ?? subtitle;

  return (
    <header
      className={cx(
        "rpl-top-bar",
        `rpl-top-bar-${size}`,
        `rpl-top-bar-${variant}`,
        `rpl-top-bar-surface-${surface}`,
        divider && "rpl-top-bar-divider",
        sticky && "rpl-top-bar-sticky",
        className,
      )}
    >
      <Inline align="center" justify="space-between" className="rpl-top-bar-inner">
        <div className="rpl-top-bar-leading">{leading}</div>
        <div className={cx("rpl-top-bar-copy", `is-${align}`)}>
          {resolvedSubtitleTop ? (
            <Text as="span" variant="caption" className="rpl-top-bar-subtitle-top">
              {resolvedSubtitleTop}
            </Text>
          ) : null}
          <div className="rpl-top-bar-title-row">
            <Text as="strong" variant="body" className="rpl-top-bar-title">
              {title}
            </Text>
            {titleSelector}
          </div>
          {resolvedSubtitleBottom ? (
            <div className="rpl-top-bar-subtitle-row">
              <Text as="span" variant="caption" className="rpl-top-bar-subtitle">
                {resolvedSubtitleBottom}
              </Text>
              {subtitleSelector}
            </div>
          ) : null}
          {badges ? <Inline gap={6} wrap className="rpl-top-bar-badges">{badges}</Inline> : null}
          {lower ? (
            <Text as="span" variant="caption" className="rpl-top-bar-lower">
              {lower}
            </Text>
          ) : null}
        </div>
        <div className={cx("rpl-top-bar-trailing", `is-${rightVerticalAlign}`)}>
          {resolvedTrailing}
          {rightArrow ? <span className="rpl-top-bar-right-arrow" aria-hidden="true">→</span> : null}
        </div>
      </Inline>
    </header>
  );
}
