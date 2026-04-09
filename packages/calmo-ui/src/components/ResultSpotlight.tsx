import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface ResultSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  highlighted?: boolean;
  children?: React.ReactNode;
  highlightDuration?: number;
}

export default function ResultSpotlight({
  title,
  description,
  badge,
  actions,
  highlighted = false,
  children,
  highlightDuration = 2800,
  className = "",
  ...props
}: ResultSpotlightProps) {
  const [isHighlighted, setIsHighlighted] = React.useState(highlighted);

  React.useEffect(() => {
    if (!highlighted) {
      setIsHighlighted(false);
      return undefined;
    }

    setIsHighlighted(true);

    if (highlightDuration <= 0) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setIsHighlighted(false), highlightDuration);
    return () => window.clearTimeout(timeout);
  }, [highlightDuration, highlighted]);

  return (
    <section className={cx("rpl-result-spotlight", isHighlighted && "is-highlighted", className)} {...props}>
      {(title || description || badge || actions) ? (
        <div className="rpl-result-spotlight-header">
          <div className="rpl-result-spotlight-copy">
            <div className="rpl-result-spotlight-title-row">
              {title ? (
                <Text as="div" variant="title" className="rpl-result-spotlight-title">
                  {title}
                </Text>
              ) : null}
              {badge}
            </div>
            {description ? (
              <Text as="div" variant="body" className="rpl-result-spotlight-description">
                {description}
              </Text>
            ) : null}
          </div>
          {actions ? <div className="rpl-result-spotlight-actions">{actions}</div> : null}
        </div>
      ) : null}
      {children ? <div className="rpl-result-spotlight-body">{children}</div> : null}
    </section>
  );
}
