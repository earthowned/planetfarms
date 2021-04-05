import React from 'react'
import './filter-by-category.css'

const FilterByCategory = () => {
    return (
        <div className="filter-category border-1px-onyx">
        <div className="fllter-by-category-text">
          <div className="funnel-outline-1">
            <div className="overlap-group-5">
              {/* <img
                className="vector-10"
                src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector@2x.png"
              /> */}
              <img className="filter-image" src="img/filter-by-category.svg" />
              {/* <img
                className="vector-18"
                src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/606aaba9f36dd20182120705/img/vector-10@2x.png"
              /> */}
            </div>
          </div>
          <div className="filter-by-category ibmplexsans-semi-bold-quarter-spanish-white-16px">
            Filter by category
          </div>
        </div>
        <div className="chevron-right-outline-1">
          <div className="overlap-group1-1">
            <img
              className="vector-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector@2x.png"
            />
            <img
              className="vector-21"
              src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector-3@2x.png"
            />
          </div>
        </div>
      </div>
    )
}

export default FilterByCategory
