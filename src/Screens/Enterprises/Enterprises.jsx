
import React from "react";
import "./enterprises.css";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import CommunityGroupCard from "../../Components/CommunityGroupCard/CommunityGroupCard";

function App() {
  return (
    <DashboardLayout title="Ragrarians enterprises">
      <Enterprises />
    </DashboardLayout>
  );
}

export default App;

function Enterprises() {
  return (
    <div className="all-enterprises screen">
      <div className="enterprises-col">
        <div className="enterprises-row">
          <div className="enterprises-header">
            <div className="enterprises-option">
              <div className="enterprises-option-first">
                <div className="all-enterprises-text ibmplexsans-semi-bold-shark-16px">
                  All Enterprises
                </div>
              </div>
              <div className="enterprises-option-second border-0-5px-white">
                <div className="your-enterprises ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Your Enterprises
                </div>
              </div>
            </div>

            <SearchComponent className={"search border-1px-onyx"} />
          </div>
          <div className="create-enterprises-wrapper">
            <div className="add-enterprises">
              <div className="create-enterprise-text ibmplexsans-semi-bold-shark-16px">
                Create Enterprise
              </div>
            </div>
          </div>
        </div>
        <div className="enterpriseCard">
        <CommunityGroupCard  />
        <CommunityGroupCard  />
            <CommunityGroupCard  />
            <CommunityGroupCard  />
            <CommunityGroupCard  />
        </div>
        
       
      </div>
    </div>
  );
}
