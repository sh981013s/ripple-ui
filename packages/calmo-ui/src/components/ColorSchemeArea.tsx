import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export interface ColorSchemeItem {
  key?: React.Key;
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
}

export interface ColorSchemeAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: ColorSchemeItem[];
}

export default function ColorSchemeArea({
  title = "Color scheme",
  description,
  items = [],
  className = "",
  ...props
}: ColorSchemeAreaProps) {
  return (
    <div className={cx("rpl-color-scheme-area", className)} {...props}>
      <div className="rpl-color-scheme-area-header">
        <Text variant="label">{title}</Text>
        {description ? <Text variant="caption">{description}</Text> : null}
      </div>
      <div className="rpl-color-scheme-area-grid">
        {items.map((item, index) => (
          <div key={item.key ?? index} className="rpl-color-scheme-area-item">
            <span className="rpl-color-scheme-area-swatch" style={{ background: item.value }} aria-hidden="true" />
            <div className="rpl-color-scheme-area-copy">
              <Text variant="body">{item.label}</Text>
              <Text variant="caption">{item.value}</Text>
              {item.description ? <Text variant="caption">{item.description}</Text> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
