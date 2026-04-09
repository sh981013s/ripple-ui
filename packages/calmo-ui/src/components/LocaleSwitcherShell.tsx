import React from "react";
import { cx } from "../utils/cx.js";
import Button from "./Button.js";
import MegaMenuShell from "./MegaMenuShell.js";

export interface LocaleSwitcherOption {
  label: React.ReactNode;
  value: string;
  active?: boolean;
  onSelect?: (value: string) => void;
}

export interface LocaleSwitcherShellProps extends React.HTMLAttributes<HTMLDivElement> {
  currentLabel: React.ReactNode;
  options: LocaleSwitcherOption[];
  triggerLabel?: string;
}

export default function LocaleSwitcherShell({
  currentLabel,
  options,
  triggerLabel = "Language",
  className = "",
  ...props
}: LocaleSwitcherShellProps) {
  return (
    <MegaMenuShell
      className={cx("rpl-locale-switcher", className)}
      panelClassName="rpl-locale-switcher-panel"
      interactionMode="click"
      align="end"
      trigger={<Button variant="ghost" size="small">{triggerLabel}: {currentLabel}</Button>}
      {...props}
    >
      <div className="rpl-locale-switcher-list">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={cx("rpl-locale-switcher-option", option.active && "is-active")}
            onClick={() => option.onSelect?.(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </MegaMenuShell>
  );
}
