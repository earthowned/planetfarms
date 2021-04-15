import React from "react";
import CommunityGroupCard from "../../Components/CommunityGroupCard/CommunityGroupCard";
import FilterByCategory from "../../Components/FilterByCategory/FilterByCategory";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-group.css";

function App() {
  return (
    <DashboardLayout title="Community Group">
      <CommunityGroup />
    </DashboardLayout>
  );
}
export default App;

function Button() {
  return (
    <>
      <div className="all-groups-1 border-1px-quarter-spanish-white">
        <div className="all-groups ibmplexsans-semi-bold-shark-16px">
          All Groups
        </div>
      </div>
    </>
  );
}

function CommunityGroup() {
  return (
    <div className="x05-0-0-all-groups">
      <div className="flex-col-4">
        <div className="flex-row-5">
          <div className="all-groups-1 border-1px-quarter-spanish-white">
            <div className="all-groups ibmplexsans-semi-bold-shark-16px">
              All Groups
            </div>
          </div>
          <div className="your-groups-1 border-class-1">
            <div className="your-groups ibmplexsans-semi-bold-quarter-spanish-white-16px">
              Your Groups
            </div>
          </div>
          <div className="create-group">
            <div className="create-group-1 ibmplexsans-semi-bold-shark-16px">
              Create group
            </div>
          </div>
        </div>
        <div className="flex-row-4">
          <SearchComponent className={"search-bar border-1px-onyx"} />

          {/* <FilterByCategory /> comes here */}
        </div>
        <div className="flex-row-4">
          <CommunityGroupCard />
          <CommunityGroupCard />
          <CommunityGroupCard />
          <CommunityGroupCard />
          <CommunityGroupCard />
          <CommunityGroupCard />
        </div>
      </div>
    </div>
  );
}

