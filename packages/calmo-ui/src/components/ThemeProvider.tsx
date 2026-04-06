import React from "react";
import { buildCalmoThemeVars, defaultCalmoTheme, type CalmoThemeDefinition } from "../theme.js";

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  theme?: CalmoThemeDefinition;
  children?: React.ReactNode;
}

export default function ThemeProvider({
  as: Component = "div",
  theme = defaultCalmoTheme,
  style,
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <Component
      data-rpl-theme={"id" in theme ? theme.id : "custom"}
      style={{ fontFamily: "var(--rpl-font-family)", ...buildCalmoThemeVars(theme), ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
