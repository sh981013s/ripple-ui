import React, { useMemo, useState } from "react";
import { cx } from "../utils/cx.js";
import Button from "./Button.js";
import Icon from "./Icon.js";
import Popover from "./Popover.js";

export default function Dropdown({
  label = "Options",
  placeholder = "Choose an option",
  items = [],
  value,
  defaultValue = "",
  onChange,
  className = "",
}) {
  const controlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = controlled ? value : internalValue;
  const currentItem = useMemo(() => items.find((item) => item.value === currentValue), [items, currentValue]);
  const [open, setOpen] = useState(false);

  const commitValue = (nextValue) => {
    if (!controlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
    setOpen(false);
  };

  return (
    <div className={cx("rpl-dropdown", className)}>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button variant="weak" onClick={() => setOpen((prev) => !prev)}>
            {currentItem?.label ?? placeholder}
            <Icon name="chevronDown" size={16} />
          </Button>
        }
        panelClassName="rpl-dropdown-panel"
        align="start"
      >
        <div className="rpl-dropdown-header">{label}</div>
        <div className="rpl-dropdown-list">
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              className={cx("rpl-dropdown-item", item.value === currentValue && "is-selected")}
              onClick={() => commitValue(item.value)}
            >
              <span>{item.label}</span>
              {item.value === currentValue ? <Icon name="check" size={14} /> : null}
            </button>
          ))}
        </div>
      </Popover>
    </div>
  );
}
