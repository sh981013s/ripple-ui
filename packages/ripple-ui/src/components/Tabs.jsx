import React, { Children, cloneElement, isValidElement, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cx } from "../utils/cx.js";

export function Tabs({ className = "", stretch = false, size = "md", variant = "pill", children, ...props }) {
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState(null);

  const items = useMemo(
    () =>
      Children.toArray(children).filter(isValidElement).map((child, index) =>
        cloneElement(child, {
          "data-rpl-tab-index": index,
        }),
      ),
    [children],
  );

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl = container.querySelector(".rpl-tab-active");
    if (!activeEl) {
      setIndicatorStyle(null);
      return;
    }

    setIndicatorStyle({
      width: `${activeEl.offsetWidth}px`,
      transform: `translateX(${activeEl.offsetLeft}px)`,
    });
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={cx("rpl-tabs", `rpl-tabs-${size}`, `rpl-tabs-${variant}`, stretch && "rpl-tabs-stretch", className)}
      role="tablist"
      {...props}
    >
      {indicatorStyle ? <span className="rpl-tabs-indicator" style={indicatorStyle} aria-hidden="true" /> : null}
      {items}
    </div>
  );
}

export function Tab({
  active = false,
  size,
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      className={cx("rpl-tab", size && `rpl-tab-${size}`, active && "rpl-tab-active", className)}
      {...props}
    >
      {children}
    </button>
  );
}
