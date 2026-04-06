import React from "react";
import SearchBar from "./SearchBar.js";
import Text from "./Text.js";
import { cx } from "../utils/cx.js";

export default function SearchField({
  clearable = true,
  value,
  onChange,
  onClear,
  resultCount,
  suggestions = [],
  onSuggestionSelect,
  panelClassName = "",
  ...props
}) {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    setActiveIndex(suggestions.length ? 0 : -1);
  }, [suggestions]);

  return (
    <div className="rpl-search-field">
      <SearchBar
        value={value}
        onChange={onChange}
        clearable={clearable}
        onClear={onClear}
        onKeyDown={(event) => {
          if (!suggestions.length) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex((prev) => (prev + 1) % suggestions.length);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
          } else if (event.key === "Enter" && activeIndex >= 0) {
            event.preventDefault();
            onSuggestionSelect?.(suggestions[activeIndex]!);
          } else if (event.key === "Escape") {
            setActiveIndex(-1);
          }
        }}
        {...props}
      />
      {resultCount !== undefined || suggestions.length ? (
        <div className={cx("rpl-search-field-panel", panelClassName)}>
          {resultCount !== undefined ? (
            <Text as="div" variant="caption" className="rpl-search-field-result-count">
              {resultCount} result{resultCount === 1 ? "" : "s"}
            </Text>
          ) : null}
          {suggestions.length ? (
            <div className="rpl-search-field-suggestions">
              {suggestions.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={cx("rpl-search-field-suggestion", index === activeIndex && "is-active")}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => onSuggestionSelect?.(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function SearchFieldResult(props) {
  return <SearchField resultCount={props.resultCount ?? 0} {...props} />;
}

export function SearchFieldSuggest(props) {
  return <SearchField suggestions={props.suggestions ?? []} {...props} />;
}
