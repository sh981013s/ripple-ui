import React from "react";
import { cx } from "../utils/cx.js";
import Icon from "./Icon.js";

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: "default" | "neutral" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode | string;
  iconPosition?: "leading" | "trailing";
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  underline?: boolean;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children?: React.ReactNode;
}

export default function TextButton({
  tone = "default",
  size = "md",
  icon,
  iconPosition = "trailing",
  leading,
  trailing,
  underline = false,
  className = "",
  type = "button",
  children,
  ...props
}: TextButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-text-button",
        `rpl-text-button-${tone}`,
        `rpl-text-button-${size}`,
        underline && "rpl-text-button-underline",
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "leading" ? (
        <span className="rpl-text-button-leading">
          {typeof icon === "string" ? <Icon name={icon} size={15} /> : icon}
        </span>
      ) : null}
      {leading ? <span className="rpl-text-button-leading">{leading}</span> : null}
      <span className="rpl-text-button-label">{children}</span>
      {trailing ? <span className="rpl-text-button-trailing">{trailing}</span> : null}
      {icon && iconPosition === "trailing" ? (
        <span className="rpl-text-button-trailing">
          {typeof icon === "string" ? <Icon name={icon} size={15} /> : icon}
        </span>
      ) : null}
    </button>
  );
}
