import React from "react";
import { cx } from "../utils/cx.js";
import Stack from "../primitives/Stack.js";
import Text from "./Text.js";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  className = "",
}) {
  return (
    <div className={cx("rpl-section-header", className)}>
      <Stack gap={6}>
        {eyebrow ? (
          <Text as="span" variant="label" className="rpl-section-header-eyebrow">
            {eyebrow}
          </Text>
        ) : null}
        <Text as="h2" variant="title" className="rpl-section-header-title">
          {title}
        </Text>
        {description ? (
          <Text variant="body" className="rpl-section-header-description">
            {description}
          </Text>
        ) : null}
      </Stack>
      {actions ? <div className="rpl-section-header-actions">{actions}</div> : null}
    </div>
  );
}
