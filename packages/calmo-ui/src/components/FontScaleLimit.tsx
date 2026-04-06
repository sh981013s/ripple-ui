import React from "react";

export interface FontScaleLimitProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  children?: React.ReactNode;
}

export default function FontScaleLimit({
  max = 1.15,
  style,
  children,
  ...props
}: FontScaleLimitProps) {
  return (
    <div
      style={{
        WebkitTextSizeAdjust: `${max * 100}%`,
        textSizeAdjust: `${max * 100}%`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
