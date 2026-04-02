import React from "react";

export interface InlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  gap?: number;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

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
}: InlineProps) {
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
