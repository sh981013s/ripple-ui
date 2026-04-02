import React from "react";
import { cx } from "../utils/cx.js";
import Loader from "./Loader.jsx";
import Text from "./Text.jsx";

export default function FullScreenLoader({
  open = false,
  title = "Loading",
  description,
  tone = "accent",
  className = "",
}) {
  if (!open) return null;

  return (
    <div className={cx("rpl-fullscreen-loader", className)} role="status" aria-live="polite">
      <div className="rpl-fullscreen-loader-panel">
        <Loader tone={tone} size="lg" centered />
        <Text variant="title" className="rpl-fullscreen-loader-title">{title}</Text>
        {description ? (
          <Text variant="body" className="rpl-fullscreen-loader-description">{description}</Text>
        ) : null}
      </div>
    </div>
  );
}
