import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommunityGroupCard from "../../Components/CommunityGroupCard/CommunityGroupCard";
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
          <div className="flex-row-5">
            <div style={{display:"flex",justifyContent:"space-between"}}>
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
            </div>
            <div className="create-group">
              <div className="create-group-1 ibmplexsans-semi-bold-shark-16px" onClick={() => handleClickCreate()}>
                Create Group
              </div>
            </div>
          </div>
          <div className="flex-row-4">
            <SearchComponent className={"search-bar border-1px-onyx"} />

            {/* <FilterByCategory /> comes here */}
          </div>
          <div className="flex-row-4">
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
