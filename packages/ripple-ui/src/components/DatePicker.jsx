import React from "react";
import Input from "./Input.jsx";

export default function DatePicker({
  label,
  hint,
  error,
  before = "📅",
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <Input
      type="date"
      label={label}
      hint={hint}
      error={error}
      size={size}
      variant={variant}
      className={className}
      before={<span className="rpl-input-leading" aria-hidden="true">{before}</span>}
      inputClassName={`rpl-date-input ${inputClassName}`.trim()}
      {...props}
    />
  );
}
