import React, { useLayoutEffect, useRef, useState } from "react";
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
  const rootRef = useRef(null);
  const pageRefs = useRef(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState(null);

  useLayoutEffect(() => {
    const rootNode = rootRef.current;
    const activeNode = pageRefs.current.get(page);

    if (!rootNode || !activeNode) {
      setIndicatorStyle(null);
      return;
    }

    const rootRect = rootNode.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();
    setIndicatorStyle({
      width: activeRect.width,
      height: activeRect.height,
      left: activeRect.left - rootRect.left,
    });
  }, [page, totalPages]);

  return (
    <nav ref={rootRef} className={cx("rpl-pagination", className)} aria-label="Pagination">
      {indicatorStyle ? (
        <span
          className="rpl-pagination-indicator"
          aria-hidden="true"
          style={{
            width: `${indicatorStyle.width}px`,
            height: `${indicatorStyle.height}px`,
            transform: `translateX(${indicatorStyle.left}px)`,
          }}
        />
      ) : null}
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
              ref={(node) => {
                if (node) {
                  pageRefs.current.set(item, node);
                } else {
                  pageRefs.current.delete(item);
                }
              }}
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
