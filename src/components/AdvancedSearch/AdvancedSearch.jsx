import React from "react";
import "./AdvancedSearch.css";

const AdvancedSearch = ({
  minLength,
  maxLength,
  domainExtension,
  onFilterChange,
}) => {
  return (
    <div className="advanced-search-container">
      <input
        type="number"
        value={minLength}
        onChange={(e) =>
          onFilterChange(e.target.value, maxLength, domainExtension)
        }
        placeholder="Min Length"
        className="advanced-input"
      />
      <input
        type="number"
        value={maxLength}
        onChange={(e) =>
          onFilterChange(minLength, e.target.value, domainExtension)
        }
        placeholder="Max Length"
        className="advanced-input"
      />
      <input
        type="text"
        value={domainExtension}
        onChange={(e) => onFilterChange(minLength, maxLength, e.target.value)}
        placeholder="Domain Extension (e.g. .com)"
        className="advanced-input"
      />
    </div>
  );
};

export default AdvancedSearch;
