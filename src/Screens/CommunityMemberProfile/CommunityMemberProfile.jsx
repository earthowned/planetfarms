import React from "react";
import { Link } from "react-router-dom";
import Backbtn from "../../Components/BackButton/BackButton";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
// import DataField from '../../Components/ProfileFormCard/ProfileFormCard'
import {
  PersonalInformation,
  ContactInformation,
  AdditionalInformation,
} from "../../Components/ProfileFormCard/ProfileFormCard";
import "./community-member-profile.css";

function App() {
  return (
    <DashboardLayout title="Mikhail Ugryumov">
      <CommunityMembersProfile />
    </DashboardLayout>
  );
}

export default App;

const ProfileImage = () => {
  return (
    <div className="flex-col-4">
      <div
        className="profile-image"
        style={{ backgroundImage: `url("/img/profile-image.svg") ` }}
      ></div>
      <div className="button">
        <div className="msg-btn border-0-5px-quarter-spanish-white">
          <div className="message-btn-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
            Write message
          </div>
        </div>
        <div className="default-btn-btn">
          <div className="follow ibmplexsans-semi-bold-shark-16px"> Follow</div>
        </div>
      </div>
    </div>
  );
};

function CommunityMembersProfile() {
  return (
    <div className="x08-1-0-community-members">
      <div className="flex-col-6">
        <Backbtn location={"/community-members"} />
        <div className="profie-details border-1px-onyx">
          <div className="information-container">
            <PersonalInformation />
            <ContactInformation />
            <AdditionalInformation />
          </div>
          {ProfileImage()}
        </div>
      </div>
    </div>
  );
}
