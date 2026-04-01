import React from "react";
import { cx } from "../utils/cx.js";

function getPages(totalPages, currentPage) {
  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  return Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
}

export default function Pagination({
  page = 1,
  totalPages = 1,
  onPageChange,
  className = "",
}) {
  const pages = getPages(totalPages, page);

  return (
    <nav className={cx("rpl-pagination", className)} aria-label="Pagination">
      <button type="button" className="rpl-pagination-arrow" disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>
        ‹
      </button>
      {pages.map((item, index) => {
        const prev = pages[index - 1];
        const gapBefore = prev && item - prev > 1;

        return (
          <React.Fragment key={item}>
            {gapBefore ? <span className="rpl-pagination-gap">…</span> : null}
            <button
              type="button"
              className={cx("rpl-pagination-page", item === page && "is-active")}
              aria-current={item === page ? "page" : undefined}
              onClick={() => onPageChange?.(item)}
            >
              {item}
            </button>
          </React.Fragment>
        );
      })}
      <button type="button" className="rpl-pagination-arrow" disabled={page >= totalPages} onClick={() => onPageChange?.(page + 1)}>
        ›
      </button>
    </nav>
  );
}
