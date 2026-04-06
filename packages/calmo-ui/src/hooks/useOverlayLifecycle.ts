import { useEffect, useRef } from "react";

function getFocusableElements(root: HTMLElement | null) {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");
}

export interface OverlayLifecycleOptions {
  open: boolean;
  onClose?: () => void;
  panelRef: React.RefObject<HTMLElement | null>;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  trapFocus?: boolean;
  lockScroll?: boolean;
  restoreFocus?: boolean;
  closeOnEscape?: boolean;
}

export default function useOverlayLifecycle({
  open,
  onClose,
  panelRef,
  initialFocusRef,
  trapFocus = true,
  lockScroll = true,
  restoreFocus = true,
  closeOnEscape = true,
}: OverlayLifecycleOptions) {
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return undefined;

    lastActiveRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    }

    const frame = window.requestAnimationFrame(() => {
      const preferred = initialFocusRef?.current;
      const firstFocusable = getFocusableElements(panelRef.current)[0];
      (preferred ?? firstFocusable ?? panelRef.current)?.focus?.();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        event.preventDefault();
        onClose?.();
        return;
      }

      if (!trapFocus || event.key !== "Tab") return;
      const focusables = getFocusableElements(panelRef.current);
      if (!focusables.length) {
        event.preventDefault();
        panelRef.current?.focus();
        return;
      }
      const currentIndex = focusables.indexOf(document.activeElement as HTMLElement);
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;

      if (event.shiftKey && (document.activeElement === first || currentIndex === -1)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || currentIndex === -1)) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      if (lockScroll) {
        document.body.style.overflow = previousOverflow;
      }
      window.removeEventListener("keydown", handleKeyDown);
      if (restoreFocus) {
        lastActiveRef.current?.focus?.();
      }
    };
  }, [open, onClose, panelRef, initialFocusRef, trapFocus, lockScroll, restoreFocus, closeOnEscape]);
}
