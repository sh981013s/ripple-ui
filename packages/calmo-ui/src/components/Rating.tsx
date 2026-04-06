import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Text from "./Text.js";

export default function Rating({
  value = 0,
  max = 5,
  size = "md",
  tone = "accent",
  showValue = false,
  onChange,
  className = "",
}) {
  const stars = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div className={cx("rpl-rating", `rpl-rating-${size}`, `rpl-rating-${tone}`, className)}>
      {stars.map((star) => {
        const active = star <= value;
        return (
          <button
            key={star}
            type="button"
            className={cx("rpl-rating-star", active && "rpl-rating-star-active")}
            aria-label={`Rate ${star} out of ${max}`}
            onClick={onChange ? () => onChange(star) : undefined}
            disabled={!onChange}
          >
            <Icon name="star" size={size === "sm" ? 14 : size === "lg" ? 22 : 18} />
          </button>
        );
      })}
      {showValue ? (
        <Text variant="caption" className="rpl-rating-value">
          {value.toFixed(1)}
        </Text>
      ) : null}
    </div>
  );
}
