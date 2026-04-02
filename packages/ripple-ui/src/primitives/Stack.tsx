import React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  gap?: number;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Stack({
  as: Component = "div",
  gap = 12,
  align = "stretch",
  justify = "flex-start",
  className = "",
  style,
  children,
  ...props
}: StackProps) {
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
