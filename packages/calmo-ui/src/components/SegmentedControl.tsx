import React, { useLayoutEffect, useRef, useState } from "react";
import { cx } from "../utils/cx.js";

export default function SegmentedControl({
  options = [],
  value,
  onChange,
  className = "",
}) {
  const containerRef = useRef(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicatorStyle, setIndicatorStyle] = useState(null);
  const currentIndex = options.findIndex((option) => (option.value ?? option.key) === value);

  const moveFocus = (direction) => {
    if (options.length === 0) return;
    const fallbackIndex = currentIndex >= 0 ? currentIndex : 0;
    const nextIndex = (fallbackIndex + direction + options.length) % options.length;
    const nextValue = options[nextIndex].value ?? options[nextIndex].key;
    onChange?.(nextValue);
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl = container.querySelector(".rpl-segmented-option.is-active");
    if (!activeEl) {
      setIndicatorStyle(null);
      return;
    }
    setIndicatorStyle({
      width: `${activeEl.offsetWidth}px`,
      transform: `translateX(${activeEl.offsetLeft}px)`,
    });
  }, [options, value]);

  return (
    <div
      ref={containerRef}
      className={cx("rpl-segmented", className)}
      role="tablist"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveFocus(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveFocus(-1);
        }
        if (event.key === "Home") {
          event.preventDefault();
          const first = options[0];
          if (first) onChange?.(first.value ?? first.key);
          optionRefs.current[0]?.focus();
        }
        if (event.key === "End") {
          event.preventDefault();
          const last = options[options.length - 1];
          if (last) onChange?.(last.value ?? last.key);
          optionRefs.current[options.length - 1]?.focus();
        }
      }}
    >
      {indicatorStyle ? <span className="rpl-segmented-indicator" style={indicatorStyle} aria-hidden="true" /> : null}
      {options.map((option, index) => {
        const optionValue = option.value ?? option.key;
        const active = value === optionValue;

        return (
          <button
            key={optionValue}
            ref={(node) => {
              optionRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
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
