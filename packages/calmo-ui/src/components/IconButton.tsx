import React from "react";
import { cx } from "../utils/cx.js";

const toneClass = {
  default: "rpl-icon-button-default",
  accent: "rpl-icon-button-accent",
  subtle: "rpl-icon-button-subtle",
};

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: keyof typeof toneClass;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function IconButton({
  tone = "default",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-icon-button",
        `rpl-icon-button-${size}`,
        toneClass[tone] || toneClass.default,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
