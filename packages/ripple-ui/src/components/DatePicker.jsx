import React from "react";
import Input from "./Input.jsx";

export default function DatePicker({
  label,
  hint,
  error,
  validationState,
  validationMessage,
  before = "📅",
  size = "md",
  variant = "default",
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <Input
      type="text"
      label={label}
      hint={hint}
      error={error}
      validationState={validationState}
      validationMessage={validationMessage}
      size={size}
      variant={variant}
      className={className}
      before={<span className="rpl-input-leading" aria-hidden="true">{before}</span>}
      inputClassName={`rpl-date-input ${inputClassName}`.trim()}
      inputMode="numeric"
      placeholder={props.placeholder ?? "YYYY-MM-DD"}
      {...props}
    />
  );
}
