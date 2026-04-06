import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";
import Popover from "./Popover.js";

export default function Menu({
  open = false,
  onClose,
  trigger,
  header,
  footer,
  width,
  items = [],
  className = "",
  panelClassName = "",
}) {
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const actionableItems = React.useMemo(
    () => items.filter((item) => item.type !== "divider" && item.type !== "header"),
    [items],
  );
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!open) return;
    const firstEnabled = actionableItems.findIndex((item) => !item.disabled);
    setActiveIndex(firstEnabled >= 0 ? firstEnabled : 0);
  }, [open, actionableItems]);

  React.useEffect(() => {
    if (!open) return;
    itemRefs.current[activeIndex]?.focus?.();
  }, [open, activeIndex]);

  const move = (direction: number) => {
    if (!actionableItems.length) return;
    let next = activeIndex;
    for (let count = 0; count < actionableItems.length; count += 1) {
      next = (next + direction + actionableItems.length) % actionableItems.length;
      if (!actionableItems[next]?.disabled) {
        setActiveIndex(next);
        return;
      }
    }
  };

  return (
    <Popover
      open={open}
      onClose={onClose}
      trigger={trigger}
      className={className}
      panelClassName={cx("rpl-menu-panel", panelClassName)}
      panelStyle={width ? { width } : undefined}
      placement="bottom"
      align="end"
    >
      {header ? <div className="rpl-menu-header-block">{header}</div> : null}
      <div className="rpl-menu-list" role="menu" onKeyDown={(event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          move(1);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "Home") {
          event.preventDefault();
          setActiveIndex(0);
        } else if (event.key === "End") {
          event.preventDefault();
          setActiveIndex(Math.max(actionableItems.length - 1, 0));
        }
      }}>
        {(() => {
          let actionIndex = -1;
          return items.map((item, index) => (
          item.type === "divider" ? (
            <div key={item.key ?? `divider-${index}`} className="rpl-menu-divider" role="separator" />
          ) : item.type === "header" ? (
            <div key={item.key ?? item.label} className="rpl-menu-header">
              {item.label}
            </div>
          ) : (
            (() => {
              actionIndex += 1;
              const checkedRole = item.checked !== undefined ? "menuitemcheckbox" : "menuitem";
              const isActive = actionIndex === activeIndex;
              return (
            <button
              key={item.key ?? item.label}
              ref={(node) => {
                itemRefs.current[actionIndex] = node;
              }}
              type="button"
              role={checkedRole}
              aria-checked={item.checked ? "true" : undefined}
              tabIndex={isActive ? 0 : -1}
              className={cx("rpl-menu-item", item.tone && `rpl-menu-item-${item.tone}`, item.checked && "is-checked")}
              onClick={() => {
                item.onSelect?.();
                onClose?.();
              }}
              onMouseEnter={() => setActiveIndex(actionIndex)}
              disabled={item.disabled}
            >
              <span className="rpl-menu-item-main">
                {item.icon ? <Icon name={item.icon} size={16} /> : null}
                <span className="rpl-menu-item-copy">
                  <span className="rpl-menu-item-label">{item.label}</span>
                  {item.description ? <span className="rpl-menu-item-description">{item.description}</span> : null}
                </span>
              </span>
              <span className="rpl-menu-item-meta">
                {item.shortcut ? <span className="rpl-menu-item-shortcut">{item.shortcut}</span> : null}
                {item.checked ? <Icon name="check" size={15} /> : null}
              </span>
            </button>
              );
            })()
          )
        ))})()}
      </div>
      {footer ? <div className="rpl-menu-footer-block">{footer}</div> : null}
    </Popover>
  );
}
