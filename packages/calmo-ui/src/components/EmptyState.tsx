import React from "react";
import { cx } from "../utils/cx.js";
import Stack from "../primitives/Stack.js";
import Text from "./Text.js";

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div className={cx("rpl-empty-state", className)}>
      <Stack gap={12} align="center">
        {icon ? <div className="rpl-empty-state-icon">{icon}</div> : null}
        <Text as="h3" variant="title" className="rpl-empty-state-title">
          {title}
        </Text>
        {description ? (
          <Text variant="body" className="rpl-empty-state-description">
            {description}
          </Text>
        ) : null}
        {action ? <div className="rpl-empty-state-action">{action}</div> : null}
      </Stack>
    </div>
  );
}
