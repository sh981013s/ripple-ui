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

  return (
    <Input
      type={revealed ? "text" : type ?? "password"}
      passwordToggle
      revealed={revealed}
      onToggleReveal={() => {
        onToggleReveal?.(!revealed);
        if (controlledRevealed === undefined) {
          setInternalRevealed((prev) => !prev);
        }
      }}
      {...props}
    />
  );
}
