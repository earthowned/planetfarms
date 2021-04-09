import React from "react";
import { Link } from "react-router-dom";
import CardImage from "../../Components/CardImage/CardImage";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-members.css";

function App() {
  return (
    <DashboardLayout title="Ragrarians members">
      <CommunityMembers />
    </DashboardLayout>
  );
}
export default App;

function CommunityMembers() {
  return (
    <div className="x08-0-0-community-members">
      <div className="flex-col-4">
        <SearchComponent className={"search-bar border-1px-onyx"} />

        <div className="flex-row-5">
          <CardImage follow="Follow" />
        </div>
      </div>
    </div>
  );
}