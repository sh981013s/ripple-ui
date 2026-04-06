import React from "react";
import { cx } from "../utils/cx.js";

export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  query?: string;
  tone?: "accent" | "success" | "warning";
}

export default function Highlight({
  text,
  query = "",
  tone = "accent",
  className = "",
  ...props
}: HighlightProps) {
  if (!query.trim()) {
    return <span className={className} {...props}>{text}</span>;
  }

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <span className={cx("rpl-highlight", className)} {...props}>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className={cx("rpl-highlight-mark", `rpl-highlight-${tone}`)}>{part}</mark>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        ),
      )}
    </span>
  );
}
