import React from "react";
import Filter from "../filter/Filter";
import Button from "../button/Button";
import "./FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="flex-3">
      <div className="filter-search-container">
        <h4>Search filters</h4>
        <div className="filter-search-innercontainer">
          <Filter newFilter />
          <div className="margin-vertical">
            <Filter newFilter />
          </div>
          <Button name="Search" />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
