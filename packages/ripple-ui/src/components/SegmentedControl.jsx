import React from "react";
import { cx } from "../utils/cx.js";

export default function SegmentedControl({
  options = [],
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={cx("rpl-segmented", className)} role="tablist">
      {options.map((option) => {
        const optionValue = option.value ?? option.key;
        const active = value === optionValue;

        return (
          <button
            key={optionValue}
            type="button"
            role="tab"
            aria-selected={active}
            className={cx("rpl-segmented-option", active && "is-active")}
            onClick={() => onChange?.(optionValue)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
