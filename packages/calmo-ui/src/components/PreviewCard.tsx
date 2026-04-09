import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface PreviewCardProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  meta?: React.ReactNode;
  sizeLabel?: React.ReactNode;
  badge?: React.ReactNode;
  media: React.ReactNode;
  href?: string;
  active?: boolean;
  compact?: boolean;
  aspectRatio?: number | `${number}/${number}`;
  imageFit?: React.CSSProperties["objectFit"];
}

export default function PreviewCard({
  title,
  meta,
  sizeLabel,
  badge,
  media,
  href,
  active = false,
  compact = false,
  aspectRatio = compact ? "4/5" : "3/4",
  imageFit = "cover",
  className = "",
  ...props
}: PreviewCardProps) {
  const content = (
    <>
      <div
        className="rpl-preview-card-media"
        style={
          {
            "--rpl-preview-card-aspect-ratio": String(aspectRatio),
            "--rpl-preview-card-image-fit": imageFit,
          } as React.CSSProperties
        }
      >
        {media}
      </div>
      <div className="rpl-preview-card-copy">
        <div className="rpl-preview-card-header">
          <Text as="div" variant="label" className="rpl-preview-card-title">
            {title}
          </Text>
          {badge ? <div className="rpl-preview-card-badge">{badge}</div> : null}
        </div>
        {meta ? (
          <Text as="div" variant="caption" className="rpl-preview-card-meta">
            {meta}
          </Text>
        ) : null}
        {sizeLabel ? (
          <Text as="div" variant="caption" className="rpl-preview-card-size">
            {sizeLabel}
          </Text>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        className={cx(
          "rpl-preview-card",
          active && "is-active",
          compact && "rpl-preview-card-compact",
          "is-clickable",
          className,
        )}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className={cx(
        "rpl-preview-card",
        active && "is-active",
        compact && "rpl-preview-card-compact",
        className,
      )}
      {...props}
    >
      {content}
    </article>
  );
}
