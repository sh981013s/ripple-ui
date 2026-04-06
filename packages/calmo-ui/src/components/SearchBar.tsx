import React from "react";
import { cx } from "../utils/cx.js";
import Input from "./Input.js";

export type SearchBarProps = React.ComponentProps<typeof Input>;

export default function SearchBar({ className = "", leading = "search", ...props }: SearchBarProps) {
  return (
    <Input
      className={cx("rpl-searchbar", className)}
      before={<span className="rpl-searchbar-icon" aria-hidden="true">{leading}</span>}
      variant="filled"
      {...props}
    />
  );
}
