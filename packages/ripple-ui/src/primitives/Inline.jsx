import React from "react";

export default function Inline({
  as: Component = "div",
  gap = 12,
  align = "center",
  justify = "flex-start",
  wrap = false,
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
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
