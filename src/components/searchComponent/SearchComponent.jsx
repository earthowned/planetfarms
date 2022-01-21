import React from "react";
import "./SearchComponent.scss";

const SearchComponent = ({ search, setSearch, showEditIcon }) => {
  return (
    <div className="search-btn">
      <img src="/img/search-outline-icon.svg" alt="Search" />

      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {showEditIcon && <img src="/img/edit-icon.svg" alt="edit icon" />}
    </div>
  );
};

export default SearchComponent;
