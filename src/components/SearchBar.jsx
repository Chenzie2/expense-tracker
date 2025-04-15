import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by description or category..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
