import React from "react";
import Text from "./Text.jsx";
import TextButton from "./TextButton.jsx";
import Selector from "./Selector.jsx";

export function ListHeaderRightText({ children, className = "", ...props }) {
  return (
    <Text as="span" variant="caption" className={`rpl-list-header-right-text ${className}`.trim()} {...props}>
      {children}
    </Text>
  );
}

export function ListHeaderRightArrow({ className = "", ...props }) {
  return (
    <span className={`rpl-list-header-right-arrow ${className}`.trim()} aria-hidden="true" {...props}>
      →
    </span>
  );
}

export function ListHeaderTitleSelector({ children, ...props }) {
  return (
    <Selector type="arrow" size="sm" {...props}>
      {children}
    </Selector>
  );
}

export function ListHeaderTitleTextButton({ children, ...props }) {
  return (
    <TextButton size="sm" tone="neutral" {...props}>
      {children}
    </TextButton>
  );
}
