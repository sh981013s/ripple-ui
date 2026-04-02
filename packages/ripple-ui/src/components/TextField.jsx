import React from "react";
import Input from "./Input.jsx";

export default function TextField(props) {
  return <Input {...props} />;
}

export function TextFieldClearable(props) {
  return <Input clearable {...props} />;
}

export function TextFieldButton({ actionLabel = "Action", ...props }) {
  return <Input actionLabel={actionLabel} {...props} />;
}

export function TextFieldPassword({
  revealed: controlledRevealed,
  onToggleReveal,
  type,
  ...props
}) {
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
