import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function BarChart({
  data = [],
  max,
  showValue = true,
  className = "",
}) {
  const resolvedMax = max ?? Math.max(...data.map((item) => item.value), 1);

  return (
    <div className={cx("rpl-bar-chart", className)}>
      {data.map((item) => {
        const ratio = resolvedMax > 0 ? Math.max(0, Math.min(1, item.value / resolvedMax)) : 0;

        return (
          <div key={item.key ?? item.label} className="rpl-bar-chart-row">
            <div className="rpl-bar-chart-meta">
              <Text variant="caption" className="rpl-bar-chart-label">{item.label}</Text>
              {showValue ? <Text variant="caption" className="rpl-bar-chart-value">{item.value}</Text> : null}
            </div>
            <div className="rpl-bar-chart-track">
              <div className={cx("rpl-bar-chart-fill", item.tone && `rpl-bar-chart-fill-${item.tone}`)} style={{ width: `${ratio * 100}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
