import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CommunityGroupCard from "../../Components/CommunityGroupCard/CommunityGroupCard";
import Filter from "../../Components/Filter/Filter";
import FilterByCategory from "../../Components/FilterByCategory/FilterByCategory";
import NewsCreateModal from "../../Components/NewsCreateModal/NewsCreateModal";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-group.css";

function App() {
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const [groupActive, setGroupActive] = useState(true);

  return (
    <>
      {createGroupModal && (
        <NewsCreateModal
          type="group"
          groupActive={groupActive}
          setGroupActive={setGroupActive}
        />
      )}
      <DashboardLayout title="Community Group">
        <CommunityGroup setCreateGroupModal={setCreateGroupModal} />
      </DashboardLayout>
    </>
  );
}
export default App;

function CommunityGroup({ setCreateGroupModal }) {
  const handleClickCreate = () => {
    setCreateGroupModal(true);
  };

  return (
    <>
      <div className="x05-0-0-all-groups">
        <div className="group-flex-col-4">

          <div className="community-group-main-header-container">
          <div className="flex-row-5">
            <div id="community-group-link-header" style={{justifyContent:"space-between"}}>
               <div className="all-groups-1 border-1px-quarter-spanish-white">
              <div className="all-groups">
                All Groups
              </div>
            </div>
            <div className="your-groups-1 border-class-1">
              <div className="your-groups ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Your Groups
              </div>
            </div>
            </div>
            <div className="community-group-search-container">
            <SearchComponent className="search-bar" />
            </div>
          </div>
          <div className="button-filter-container">
            <div className="community-group-header-btn-container">
            <Button name="Create group"/>
            </div>
            {/* <FilterByCategory /> comes here */}
            <Filter />
          </div>
          </div>
          <div className="community-group-container">
            <CommunityGroupCard location={"/community-group-view-page"} />
            <CommunityGroupCard location={"/community-group-view-page"} />
            <CommunityGroupCard location={"/community-group-view-page"} />
            <CommunityGroupCard location={"/community-group-view-page"} />
            <CommunityGroupCard location={"/community-group-view-page"} />
          </div>
        </div>
      </div>
    </>
  );
}
