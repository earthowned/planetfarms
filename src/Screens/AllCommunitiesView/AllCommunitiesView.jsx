import React from "react";
import AllCommunitiesCard from "../../Components/AllCommunitiesCard/AllCommunitiesCard";
import FilterByCategory from "../../Components/FilterByCategory/FilterByCategory";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./all-communities-view.css";

function App() {
  return (
    <DashboardLayout title="All Communities">
      <AllCommunities />
    </DashboardLayout>
  );
}

export default App;

function AllCommunities(props) {
  return (
    <div className="x07-1-0-all-communities">
      <div className="flex-col-3">
        <div className="flex-row-3">
          <SearchComponent className={"search border-1px-onyx"} />
          {/* <div className="filter-category border-1px-onyx">
            <div className="fllter-by-category-text">
              <div className="funnel-outline-1">
                <div className="overlap-group-5">
                  <img
                    className="vector-10"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector@2x.png"
                  />
                  <img
                    className="vector-18"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/606aaba9f36dd20182120705/img/vector-10@2x.png"
                  />
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
          </div> */}
          <FilterByCategory />
        </div>
        <AllCommunitiesCard />
      </div>
    </div>
  );
}
