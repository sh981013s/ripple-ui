import React from "react";
import SearchBar from "./SearchBar.jsx";
import Text from "./Text.jsx";
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
  return (
    <div className="rpl-search-field">
      <SearchBar
        value={value}
        onChange={onChange}
        clearable={clearable}
        onClear={onClear}
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
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rpl-search-field-suggestion"
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
