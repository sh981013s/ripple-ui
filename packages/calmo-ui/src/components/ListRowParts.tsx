import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import IconButton from "./IconButton.js";

export function ListRowImageContainer({ children, className = "", ...props }) {
  return (
    <div className={cx("rpl-list-row-image-container", className)} {...props}>
      {children}
    </div>
  );
}

export function ListRowImage({ src, alt = "", className = "", ...props }) {
  return <img src={src} alt={alt} className={cx("rpl-list-row-image", className)} {...props} />;
}

export function ListRowIcon({ name, children, className = "", ...props }) {
  return (
    <div className={cx("rpl-list-row-icon", className)} {...props}>
      {children ?? (name ? <Icon name={name} size={16} /> : null)}
    </div>
  );
}

export function ListRowFillIcon({ name, children, className = "", ...props }) {
  return (
    <div className={cx("rpl-list-row-fill-icon", className)} {...props}>
      {children ?? (name ? <Icon name={name} size={16} /> : null)}
    </div>
  );
}

export function ListRowIconButton({ name, "aria-label": ariaLabel = "Open", className = "", ...props }) {
  return (
    <IconButton tone="subtle" size="sm" className={cx("rpl-list-row-icon-button", className)} aria-label={ariaLabel} {...props}>
      <Icon name={name} size={15} />
    </IconButton>
  );
}
