import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface DropzonePanelProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  activeLabel?: React.ReactNode;
  dragging?: boolean;
  status?: "idle" | "active" | "success" | "processing";
  actions?: React.ReactNode;
  children?: React.ReactNode;
  onFilesDrop?: (files: File[], event: React.DragEvent<HTMLElement>) => void;
  onDragStateChange?: (dragging: boolean, event: React.DragEvent<HTMLElement>) => void;
}

export default function DropzonePanel({
  title,
  description,
  activeLabel,
  dragging = false,
  status = "idle",
  actions,
  children,
  onFilesDrop,
  onDragStateChange,
  className = "",
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  ...props
}: DropzonePanelProps) {
  const dragDepthRef = React.useRef(0);
  const [helperDragging, setHelperDragging] = React.useState(false);
  const resolvedDragging = dragging || helperDragging;
  const resolvedStatus = resolvedDragging ? "active" : status;
  const canHandleFiles = Boolean(onFilesDrop || onDragStateChange);

  const emitDragState = (nextDragging: boolean, event: React.DragEvent<HTMLElement>) => {
    setHelperDragging(nextDragging);
    onDragStateChange?.(nextDragging, event);
  };

  return (
    <section
      className={cx(
        "rpl-dropzone-panel",
        `rpl-dropzone-panel-${resolvedStatus}`,
        resolvedDragging && "is-dragging",
        className,
      )}
      onDragEnter={(event) => {
        onDragEnter?.(event);
        if (!canHandleFiles) return;
        event.preventDefault();
        dragDepthRef.current += 1;
        if (!resolvedDragging) emitDragState(true, event);
      }}
      onDragOver={(event) => {
        onDragOver?.(event);
        if (!canHandleFiles) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
      }}
      onDragLeave={(event) => {
        onDragLeave?.(event);
        if (!canHandleFiles) return;
        event.preventDefault();
        dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
        if (dragDepthRef.current === 0) emitDragState(false, event);
      }}
      onDrop={(event) => {
        onDrop?.(event);
        if (!canHandleFiles) return;
        event.preventDefault();
        dragDepthRef.current = 0;
        emitDragState(false, event);
        const files = Array.from(event.dataTransfer.files ?? []);
        if (files.length > 0) {
          onFilesDrop?.(files, event);
        }
      }}
      {...props}
    >
      <div className="rpl-dropzone-panel-header">
        <div className="rpl-dropzone-panel-copy">
          <Text as="div" variant="title" className="rpl-dropzone-panel-title">
            {title}
          </Text>
          {description ? (
            <Text as="div" variant="body" className="rpl-dropzone-panel-description">
              {description}
            </Text>
          ) : null}
          {resolvedDragging && activeLabel ? (
            <Text as="div" variant="label" className="rpl-dropzone-panel-active-label">
              {activeLabel}
            </Text>
          ) : null}
        </div>
        {actions ? <div className="rpl-dropzone-panel-actions">{actions}</div> : null}
      </div>
      {children ? <div className="rpl-dropzone-panel-body">{children}</div> : null}
    </section>
  );
}
