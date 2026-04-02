import React from "react";
import { cx } from "../utils/cx.js";

const classByVariant = {
  primary: "rpl-button-primary",
  ghost: "rpl-button-ghost",
  weak: "rpl-button-weak",
  icon: "rpl-button-icon",
  fill: "rpl-button-primary",
};

const classByColor = {
  primary: "rpl-button-color-primary",
  danger: "rpl-button-color-danger",
  neutral: "rpl-button-color-neutral",
};

const classBySize = {
  small: "rpl-button-small",
  medium: "rpl-button-medium",
  large: "rpl-button-large",
  xlarge: "rpl-button-xlarge",
};

const classByDisplay = {
  inline: "rpl-button-inline",
  block: "rpl-button-block",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof classByVariant;
  color?: keyof typeof classByColor;
  size?: keyof typeof classBySize;
  display?: keyof typeof classByDisplay;
  className?: string;
  children?: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Button({
  variant = "primary",
  color = "primary",
  size = "xlarge",
  display = "inline",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "rpl-button",
        classByVariant[variant] || classByVariant.primary,
        classByColor[color] || classByColor.primary,
        classBySize[size] || classBySize.xlarge,
        classByDisplay[display] || classByDisplay.inline,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
