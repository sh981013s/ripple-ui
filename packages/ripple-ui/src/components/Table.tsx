import React from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export default function Table({
  columns = [],
  rows = [],
  dense = false,
  className = "",
}) {
  return (
    <div className={cx("rpl-table-wrap", className)}>
      <table className={cx("rpl-table", dense && "rpl-table-dense")}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={cx(column.align && `is-${column.align}`)}>
                <Text as="span" variant="label">
                  {column.title}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.key ?? rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cx(column.align && `is-${column.align}`)}
                  data-label={typeof column.title === "string" ? column.title : undefined}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
