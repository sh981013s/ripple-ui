import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function TableRow({
  label,
  value,
  leading,
  trailing,
  className = "",
  ...props
}) {
  return (
    <div className={cx("rpl-table-row", className)} {...props}>
      <div className="rpl-table-row-main">
        {leading ? <span className="rpl-table-row-leading">{leading}</span> : null}
        <div className="rpl-table-row-copy">
          <Text as="div" variant="label" className="rpl-table-row-label">{label}</Text>
          {value ? <Text as="div" variant="body" className="rpl-table-row-value">{value}</Text> : null}
        </div>
      </div>
      {trailing ? <div className="rpl-table-row-trailing">{trailing}</div> : null}
    </div>
  );
}
