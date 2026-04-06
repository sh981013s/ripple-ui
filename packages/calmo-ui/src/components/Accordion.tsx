import React, { useState } from "react";
import { cx } from "../utils/cx.js";
import Text from "./Text.js";

export function Accordion({ className = "", children }) {
  return <div className={cx("rpl-accordion", className)}>{children}</div>;
}

export function AccordionItem({
  title,
  description,
  defaultOpen = false,
  className = "",
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cx("rpl-accordion-item", className, open && "is-open")}>
      <button type="button" className="rpl-accordion-trigger" onClick={() => setOpen((value) => !value)}>
        <span className="rpl-accordion-copy">
          <Text as="span" variant="body" className="rpl-accordion-title">
            {title}
          </Text>
          {description ? (
            <Text as="span" variant="caption" className="rpl-accordion-description">
              {description}
            </Text>
          ) : null}
        </span>
        <span className={cx("rpl-accordion-caret", open && "is-open")} aria-hidden="true">
          ⌄
        </span>
      </button>
      {open ? <div className="rpl-accordion-panel">{children}</div> : null}
    </div>
  );
}
