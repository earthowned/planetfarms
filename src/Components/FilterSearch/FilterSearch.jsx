import React from "react";

const FilterSearch = () => {
  return (
    <div>
      <div className="filter border-1px-onyx">
        <div className="search-filters ibmplexsans-semi-bold-quarter-spanish-white-16px">
          Search filters
        </div>
        <div className={`filter-field border-1px-onyx }`}>
          <div className="by-date ibmplexsans-semi-bold-monsoon-16px">
            By Date
          </div>
          <div className={`chevron-right-outline-1-1 }`}>
            <div className="overlap-group-5">
              <img className="vector-19" src="vector.png" />
            </div>
          </div>
        </div>
        <div className={`filter-field border-1px-onyx }`}>
          <div className="by-date ibmplexsans-semi-bold-monsoon-16px">
            Popular
          </div>
          <div className={`chevron-right-outline-1-1 }`}>
            <div className="overlap-group-5">
              <img className="vector-19" src="vector.png" />
            </div>
          </div>
        </div>
        <div className="search-btn-group">
          <div className="group-search ibmplexsans-semi-bold-shark-16px">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
