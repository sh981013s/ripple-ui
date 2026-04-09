import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface PreviewRailProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  meta?: React.ReactNode;
  badge?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  snap?: "none" | "proximity" | "mandatory";
  controls?: boolean;
}

export default function PreviewRail({
  title,
  meta,
  badge,
  action,
  children,
  snap = "proximity",
  controls = false,
  className = "",
  ...props
}: PreviewRailProps) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!controls) return undefined;

    const track = trackRef.current;
    if (!track) return undefined;

    const syncScrollState = () => {
      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      setCanScrollPrev(track.scrollLeft > 8);
      setCanScrollNext(track.scrollLeft < maxScrollLeft - 8);
    };

    syncScrollState();
    track.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);

    return () => {
      track.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [children, controls]);

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: Math.round(track.clientWidth * 0.82) * direction,
      behavior: "smooth",
    });
  };

  return (
    <section className={cx("rpl-preview-rail", className)} {...props}>
      {(title || meta || badge || action) ? (
        <div className="rpl-preview-rail-header">
          <div className="rpl-preview-rail-copy">
            {title ? (
              <Text as="div" variant="title" className="rpl-preview-rail-title">
                {title}
              </Text>
            ) : null}
            {meta ? (
              <Text as="div" variant="body" className="rpl-preview-rail-meta">
                {meta}
              </Text>
            ) : null}
          </div>
          {badge || action ? (
            <div className="rpl-preview-rail-trailing">
              {badge}
              {action}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="rpl-preview-rail-track-wrap">
        {controls ? (
          <div className="rpl-preview-rail-controls" aria-label="Preview rail controls">
            <button
              type="button"
              className="rpl-preview-rail-control"
              aria-label="Scroll previews left"
              onClick={() => scrollByPage(-1)}
              disabled={!canScrollPrev}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="rpl-preview-rail-control"
              aria-label="Scroll previews right"
              onClick={() => scrollByPage(1)}
              disabled={!canScrollNext}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : null}
        <div
          ref={trackRef}
          className="rpl-preview-rail-track"
          style={{ scrollSnapType: snap === "none" ? "none" : `x ${snap}` }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
