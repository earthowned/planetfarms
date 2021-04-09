import React from "react";
import CommunitiesCard from "../../Components/CommunitiesCard/CommunitiesCard";
import FilterByCategory from "../../Components/FilterByCategory/FilterByCategory";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-switching.css";

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
        <div className="flex-row-4">
          <SearchComponent className={"search border-1px-onyx"} />
          <FilterByCategory />
        </div>

        <CommunitiesCard />
      </div>
    </div>
  );
}
