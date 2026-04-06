import React from "react";
import { cx } from "../utils/cx.js";
import Loader from "./Loader.js";
import Text from "./Text.js";
import Icon from "./Icon.js";

export default function FullScreenLoader({
  open = false,
  title = "Loading",
  description,
  tone = "accent",
  className = "",
  dismissible = false,
  dismissLabel = "Close loader",
  closeOnBackdrop = false,
  onDismiss,
}) {
  if (!open) return null;

  return (
    <div
      className={cx("rpl-fullscreen-loader", className)}
      role="status"
      aria-live="polite"
      onMouseDown={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onDismiss?.();
        }
      }}
    >
      <div className="rpl-fullscreen-loader-panel">
        {dismissible ? (
          <button
            type="button"
            className="rpl-fullscreen-loader-close"
            aria-label={dismissLabel}
            onClick={() => onDismiss?.()}
          >
            <Icon name="close" size={18} />
          </button>
        ) : null}
        <Loader tone={tone} size="lg" centered />
        <Text variant="title" className="rpl-fullscreen-loader-title">{title}</Text>
        {description ? (
          <Text variant="body" className="rpl-fullscreen-loader-description">{description}</Text>
        ) : null}
      </div>
    </div>
  );
}
