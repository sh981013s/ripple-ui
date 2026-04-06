import React from "react";
import { cx } from "../utils/cx.js";
import Input from "./Input.js";

type Variant = "rrn13" | "rrnFirst7";

export interface SplitTextFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  variant?: Variant;
}

function formatLeft(value: string) {
  return value.slice(0, 6);
}

function formatRight(value: string, variant: Variant) {
  const source = variant === "rrnFirst7" ? value.slice(6, 7) : value.slice(6, 13);
  if (!source) return "";
  if (variant === "rrnFirst7") return source;
  return `${source.charAt(0)}${"•".repeat(Math.max(source.length - 1, 0))}`;
}

function BaseSplitTextField({
  label,
  value = "",
  onChange,
  placeholder,
  disabled = false,
  variant = "rrn13",
  className = "",
  ...props
}: SplitTextFieldProps) {
  const left = formatLeft(value);
  const right = formatRight(value, variant);

  return (
    <div className={cx("rpl-split-text-field", className)} {...props}>
      {label ? <label className="rpl-field-label">{label}</label> : null}
      <div className="rpl-split-text-field-row">
        <Input
          value={left}
          disabled={disabled}
          placeholder={placeholder ?? "######"}
          inputMode="numeric"
          maxLength={6}
          onChange={(event) => {
            const nextLeft = event.target.value.replace(/\D/g, "").slice(0, 6);
            onChange?.(`${nextLeft}${value.slice(6)}`);
          }}
        />
        <span className="rpl-split-text-field-separator">-</span>
        <Input
          value={right}
          disabled={disabled}
          placeholder={variant === "rrnFirst7" ? "#" : "#••••••"}
          inputMode="numeric"
          maxLength={variant === "rrnFirst7" ? 1 : 7}
          onChange={(event) => {
            const nextRight = event.target.value.replace(/\D/g, "").slice(0, variant === "rrnFirst7" ? 1 : 7);
            onChange?.(`${left}${nextRight}`);
          }}
        />
      </div>
    </div>
  );
}

export function SplitTextFieldRRN13(props: Omit<SplitTextFieldProps, "variant">) {
  return <BaseSplitTextField {...props} variant="rrn13" />;
}

export function SplitTextFieldRRNFirst7(props: Omit<SplitTextFieldProps, "variant">) {
  return <BaseSplitTextField {...props} variant="rrnFirst7" />;
}

export interface SplitTextFieldNamespace {
  RRN13: typeof SplitTextFieldRRN13;
  RRNFirst7: typeof SplitTextFieldRRNFirst7;
}

const SplitTextField = Object.assign(BaseSplitTextField, {
  RRN13: SplitTextFieldRRN13,
  RRNFirst7: SplitTextFieldRRNFirst7,
}) as typeof BaseSplitTextField & SplitTextFieldNamespace;

export default SplitTextField;
