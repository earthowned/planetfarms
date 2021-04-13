import React from "react";
import CommunitiesCard from "../../Components/CommunitiesCard/CommunitiesCard";
import Filter from "../../Components/Filter/Filter";
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
      <div className="community-container">
        <div className="flex-row-4">
          {/* <SearchComponent className={"search border-1px-onyx"} />
          <div className="library-sub-header-2">
              <Filter />
              </div> */}
               <div className="library-sub-header">
              <div className="library-sub-header-1">
              <SearchComponent className={"search border-1px-onyx"} /> 
              </div>
              <div className="library-sub-header-2 filter">
              <Filter />
              </div>
           </div>
        </div>
        <CommunitiesCard />
      </div>
    </div>
  );
}
