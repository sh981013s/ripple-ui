import React, { Children, isValidElement, useEffect } from "react";
import { cx } from "../utils/cx.js";

function SheetHeader({ children, className = "" }) {
  return <div className={cx("rpl-sheet-header", className)}>{children}</div>;
}

function SheetHeaderDescription({ children, className = "" }) {
  return <div className={cx("rpl-sheet-description", className)}>{children}</div>;
}

function SheetFooter({ children, className = "" }) {
  return <div className={cx("rpl-sheet-footer", className)}>{children}</div>;
}

SheetHeader.displayName = "RippleBottomSheetHeader";
SheetHeaderDescription.displayName = "RippleBottomSheetHeaderDescription";
SheetFooter.displayName = "RippleBottomSheetFooter";

function BottomSheet({
  open,
  onClose,
  closeOnBackdrop = true,
  size = "md",
  variant = "floating",
  header,
  description,
  footer,
  className = "",
  panelClassName = "",
  children,
}) {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  let resolvedHeader = header ? <div className="rpl-sheet-title">{header}</div> : null;
  let resolvedDescription = description;
  let resolvedFooter = footer;
  const contentNodes = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      contentNodes.push(child);
      return;
    }

    if (child.type?.displayName === SheetHeader.displayName) {
      resolvedHeader = child;
      return;
    }

    if (child.type?.displayName === SheetHeaderDescription.displayName) {
      resolvedDescription = child;
      return;
    }

    if (child.type?.displayName === SheetFooter.displayName) {
      resolvedFooter = child;
      return;
    }

    contentNodes.push(child);
  });

  return (
    <div
      className={cx("rpl-sheet-backdrop", className)}
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className={cx("rpl-sheet-panel", `rpl-sheet-panel-${size}`, `rpl-sheet-panel-${variant}`, panelClassName)}>
        <div className="rpl-sheet-handle" aria-hidden="true"></div>
        {resolvedHeader || resolvedDescription ? (
          <div className="rpl-sheet-header-wrap">
            {resolvedHeader}
            {resolvedDescription ? (
              isValidElement(resolvedDescription) ? resolvedDescription : <div className="rpl-sheet-description">{resolvedDescription}</div>
            ) : null}
          </div>
        ) : null}
        <div className="rpl-sheet-content">{contentNodes}</div>
        {resolvedFooter ? (
          isValidElement(resolvedFooter) && resolvedFooter.type?.displayName === SheetFooter.displayName ? resolvedFooter : <div className="rpl-sheet-footer">{resolvedFooter}</div>
        ) : null}
      </div>
    </div>
  );
}

BottomSheet.Header = SheetHeader;
BottomSheet.HeaderDescription = SheetHeaderDescription;
BottomSheet.Footer = SheetFooter;

export default BottomSheet;
