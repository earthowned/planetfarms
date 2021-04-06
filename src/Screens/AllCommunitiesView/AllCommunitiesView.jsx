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
          <FilterByCategory />
        </div>
        <AllCommunitiesCard />
      </div>
    </div>
  );
}
