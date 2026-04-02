import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.jsx";
import Popover from "./Popover.jsx";

export default function Menu({
  open = false,
  onClose,
  trigger,
  items = [],
  className = "",
  panelClassName = "",
}) {
  return (
    <Popover
      open={open}
      onClose={onClose}
      trigger={trigger}
      className={className}
      panelClassName={cx("rpl-menu-panel", panelClassName)}
      placement="bottom"
      align="end"
    >
      <div className="rpl-menu-list" role="menu">
        {items.map((item, index) => (
          item.type === "divider" ? (
            <div key={item.key ?? `divider-${index}`} className="rpl-menu-divider" role="separator" />
          ) : item.type === "header" ? (
            <div key={item.key ?? item.label} className="rpl-menu-header">
              {item.label}
            </div>
          ) : (
            <button
              key={item.key ?? item.label}
              type="button"
              role="menuitemcheckbox"
              aria-checked={item.checked ? "true" : undefined}
              className={cx("rpl-menu-item", item.tone && `rpl-menu-item-${item.tone}`, item.checked && "is-checked")}
              onClick={() => {
                item.onSelect?.();
                onClose?.();
              }}
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
          )
        ))}
      </div>
    </Popover>
  );
}
