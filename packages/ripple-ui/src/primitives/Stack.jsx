import React from "react";

export default function Stack({
  as: Component = "div",
  gap = 12,
  align = "stretch",
  justify = "flex-start",
  className = "",
  style,
  children,
  ...props
}) {
  return (
    <Component
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
