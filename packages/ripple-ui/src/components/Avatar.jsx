import React from "react";
import { cx } from "../utils/cx.js";

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Avatar({
  src,
  alt = "",
  name = "",
  size = "md",
  tone = "default",
  status,
  className = "",
}) {
  const initials = getInitials(name) || "?";

  return (
    <span className={cx("rpl-avatar", `rpl-avatar-${size}`, `rpl-avatar-${tone}`, className)}>
      {src ? <img className="rpl-avatar-image" src={src} alt={alt || name} /> : <span className="rpl-avatar-fallback">{initials}</span>}
      {status ? <span className={cx("rpl-avatar-status", `rpl-avatar-status-${status}`)} aria-hidden="true" /> : null}
    </span>
  );
}
