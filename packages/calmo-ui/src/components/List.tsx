import React from "react";
import { cx } from "../utils/cx.js";
import Inline from "../primitives/Inline.js";
import Text from "./Text.js";
import TextButton from "./TextButton.js";

export function ListHeader({
  eyebrow,
  title,
  description,
  badges,
  selector,
  rightText,
  rightArrow = false,
  rightButton,
  titleTextButton,
  compact = false,
  divider = false,
  className = "",
  children,
  ...props
}) {
  const hasStructured = eyebrow || title || description || badges || selector || rightText || rightArrow || rightButton || titleTextButton;

  return (
    <div className={cx("rpl-list-header", compact && "rpl-list-header-compact", divider && "rpl-list-header-divider", className)} {...props}>
      {hasStructured ? (
        <div className="rpl-list-header-row">
          <div className="rpl-list-header-copy">
            {eyebrow ? <Text as="div" variant="caption" className="rpl-list-header-eyebrow">{eyebrow}</Text> : null}
            {title ? (
              <div className="rpl-list-header-title-row">
                <Text as="div" variant="label" className="rpl-list-header-title">{title}</Text>
                {titleTextButton ? (
                  <TextButton size="sm" tone="neutral" trailing={rightArrow ? "→" : undefined}>
                    {titleTextButton}
                  </TextButton>
                ) : null}
              </div>
            ) : null}
            {description ? <Text as="div" variant="caption" className="rpl-list-header-description">{description}</Text> : null}
            {badges ? <Inline gap={6} wrap className="rpl-list-header-badges">{badges}</Inline> : null}
          </div>
          {(selector || rightText || rightButton || rightArrow) ? (
            <div className="rpl-list-header-trailing">
              {selector}
              {rightButton}
              {rightText ? <Text as="span" variant="caption" className="rpl-list-header-right-text">{rightText}</Text> : null}
              {rightArrow ? <span className="rpl-list-header-right-arrow" aria-hidden="true">→</span> : null}
            </div>
          ) : null}
        </div>
      ) : children}
    </div>
  );
}

export function ListFooter({ className = "", children, ...props }) {
  return (
    <div className={cx("rpl-list-footer", className)} {...props}>
      {children}
    </div>
  );
}

export default function List({
  inset = false,
  divided = true,
  className = "",
  children,
  ...props
}) {
  return (
    <div
      className={cx(
        "rpl-list",
        inset && "rpl-list-inset",
        divided && "rpl-list-divided",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
