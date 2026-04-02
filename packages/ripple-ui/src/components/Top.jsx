import React from "react";
import TopBar from "./TopBar.jsx";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import IconButton from "./IconButton.jsx";
import Selector from "./Selector.jsx";
import Inline from "../primitives/Inline.jsx";

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
