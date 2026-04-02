import React, { cloneElement, isValidElement, useEffect, useId, useRef } from "react";
import { cx } from "../utils/cx.js";

export interface PopoverProps {
  open?: boolean;
  onClose?: () => void;
  trigger: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  panelClassName?: string;
  panelStyle?: React.CSSProperties;
  placement?: "top" | "bottom";
  align?: "start" | "center" | "end";
}

export default function Popover({
  open = false,
  onClose,
  trigger,
  children,
  className = "",
  panelClassName = "",
  panelStyle,
  placement = "bottom",
  align = "start",
}: PopoverProps) {
  const rootRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const triggerNode = isValidElement(trigger)
    ? cloneElement(trigger, {
        "aria-expanded": open,
        "aria-controls": panelId,
      } as Record<string, unknown>)
    : trigger;

  return (
    <div
      ref={rootRef}
      className={cx("rpl-popover", `rpl-popover-${placement}`, `rpl-popover-align-${align}`, className)}
    >
      {triggerNode}
      {open ? (
        <div id={panelId} className={cx("rpl-popover-panel", panelClassName)} style={panelStyle} role="dialog" aria-modal="false">
          {children}
        </div>
      ) : null}
    </div>
  );
}
