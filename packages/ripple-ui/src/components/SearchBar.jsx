import React from "react";
import { cx } from "../utils/cx.js";
import Input from "./Input.jsx";

export default function SearchBar({ className = "", leading = "⌕", ...props }) {
  return (
    <Input
      className={cx("rpl-searchbar", className)}
      leading={<span className="rpl-searchbar-icon" aria-hidden="true">{leading}</span>}
      variant="filled"
      {...props}
    />
  );
}
