import React from "react";
import Input from "./Input.js";

export type TextFieldProps = React.ComponentProps<typeof Input>;

export default function TextField(props: TextFieldProps) {
  return <Input {...props} />;
}

export function TextFieldClearable(props: TextFieldProps) {
  return <Input clearable {...props} />;
}

export function TextFieldButton({ actionLabel = "Action", ...props }: TextFieldProps) {
  return <Input actionLabel={actionLabel} {...props} />;
}

export function TextFieldPassword({
  revealed: controlledRevealed,
  onToggleReveal,
  type,
  ...props
}: TextFieldProps) {
  const [internalRevealed, setInternalRevealed] = React.useState(false);
  const revealed = controlledRevealed ?? internalRevealed;
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <Input
      inputRef={inputRef}
      type={revealed ? "text" : type ?? "password"}
      passwordToggle
      revealed={revealed}
      onToggleReveal={() => {
        onToggleReveal?.(!revealed);
        if (controlledRevealed === undefined) {
          setInternalRevealed((prev) => !prev);
        }
        window.requestAnimationFrame(() => {
          inputRef.current?.focus();
          const length = inputRef.current?.value?.length ?? 0;
          inputRef.current?.setSelectionRange?.(length, length);
        });
      }}
      {...props}
    />
  );
}
