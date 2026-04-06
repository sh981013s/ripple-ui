import React from "react";
import TopBar from "./TopBar.js";
import Button from "./Button.js";
import Icon from "./Icon.js";
import IconButton from "./IconButton.js";
import Selector from "./Selector.js";
import Inline from "../primitives/Inline.js";

export function TopRightButton({
  label = "Action",
  icon,
  variant = "ghost",
  size = "small",
  ...props
}) {
  return (
    <Button variant={variant} size={size} {...props}>
      {icon ? <Icon name={icon} size={14} /> : null}
      {label}
    </Button>
  );
}

export function TopRightArrow({ "aria-label": ariaLabel = "Next", ...props }) {
  return (
    <IconButton aria-label={ariaLabel} tone="subtle" size="sm" {...props}>
      <Icon name="chevronRight" size={16} />
    </IconButton>
  );
}

export function TopSubtitleBadges({ items = [] }) {
  return <Inline gap={6} wrap className="rpl-top-subtitle-badges">{items}</Inline>;
}

export function TopSubtitleSelector({ children, ...props }) {
  return (
    <Selector type="arrow" size="sm" {...props}>
      {children}
    </Selector>
  );
}

export function TopTitleSelector({ children, ...props }) {
  return (
    <Selector type="arrow" {...props}>
      {children}
    </Selector>
  );
}

export default function Top(props) {
  return <TopBar align="left" variant="flat" {...props} />;
}
