import React, { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";

export interface MegaMenuShellProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  interactionMode?: "click" | "hover" | "hybrid";
  align?: "start" | "center" | "end";
  width?: number | string;
  closeDelay?: number;
  panelClassName?: string;
}

export default function MegaMenuShell({
  trigger,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  interactionMode = "hybrid",
  align = "start",
  width,
  closeDelay = 140,
  className = "",
  panelClassName = "",
  ...props
}: MegaMenuShellProps) {
  const controlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [pinned, setPinned] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const pinnedRef = useRef(false);
  const panelId = useId();
  const isOpen = controlled ? open : internalOpen;

  const setOpen = (nextOpen: boolean) => {
    if (!controlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      if (!pinnedRef.current) setOpen(false);
    }, closeDelay);
  };

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    pinnedRef.current = pinned;
  }, [pinned]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setPinned(false);
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPinned(false);
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const triggerNode = useMemo(() => {
    if (!isValidElement(trigger)) return trigger;
    return cloneElement(trigger, {
      "aria-expanded": isOpen,
      "aria-controls": panelId,
      "aria-haspopup": "dialog",
      onClick: (event: React.MouseEvent) => {
        if (interactionMode === "hover") return;
        const nextPinned = interactionMode === "hybrid" ? !pinned || !isOpen : !isOpen;
        if (interactionMode === "hybrid") {
          setPinned(nextPinned);
          setOpen(nextPinned);
        } else {
          setOpen(!isOpen);
        }
        const original = (trigger as React.ReactElement<any>).props.onClick;
        original?.(event);
      },
    } as Record<string, unknown>);
  }, [trigger, isOpen, interactionMode, pinned, panelId]);

  return (
    <div
      ref={rootRef}
      className={cx("rpl-mega-menu", `rpl-mega-menu-align-${align}`, className)}
      onMouseEnter={() => {
        if (interactionMode === "click") return;
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={(event) => {
        if (interactionMode === "click") return;
        if (rootRef.current?.contains(event.relatedTarget as Node | null)) return;
        if (!pinned) scheduleClose();
      }}
      {...props}
    >
      {triggerNode}
      {isOpen ? (
        <div
          id={panelId}
          className={cx("rpl-mega-menu-panel", panelClassName)}
          style={width ? { width } : undefined}
          role="dialog"
          aria-modal="false"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
