import React from "react";
import { buildRippleThemeVars, defaultRippleTheme, type RippleThemeDefinition } from "../theme.js";

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  theme?: RippleThemeDefinition;
  children?: React.ReactNode;
}

export default function ThemeProvider({
  as: Component = "div",
  theme = defaultRippleTheme,
  style,
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <Component
      data-rpl-theme={"id" in theme ? theme.id : "custom"}
      style={{ fontFamily: "var(--rpl-font-family)", ...buildRippleThemeVars(theme), ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
