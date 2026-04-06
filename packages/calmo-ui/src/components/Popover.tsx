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
  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
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
      triggerRef.current?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      panelRef.current?.focus?.();
    }
  }, [open]);

  const triggerNode = isValidElement(trigger)
    ? cloneElement(trigger, {
        "aria-expanded": open,
        "aria-controls": panelId,
        ref: (node: HTMLElement | null) => {
          triggerRef.current = node;
          const originalRef = (trigger as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref;
          if (typeof originalRef === "function") originalRef(node);
          else if (originalRef && typeof originalRef === "object") (originalRef as React.MutableRefObject<HTMLElement | null>).current = node;
        },
      } as Record<string, unknown>)
    : trigger;

  return (
    <div
      ref={rootRef}
      className={cx("rpl-popover", `rpl-popover-${placement}`, `rpl-popover-align-${align}`, className)}
    >
      {triggerNode}
      {open ? (
        <div ref={panelRef} tabIndex={-1} id={panelId} className={cx("rpl-popover-panel", panelClassName)} style={panelStyle} role="dialog" aria-modal="false">
          {children}
        </div>
      ) : null}
    </div>
  );
}
