import React from "react";
import "./my-profile.css";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import BackButton from "../../Components/BackButton/BackButton";
import {
  AdditionalInformation,
  ContactInformation,
  PersonalInformation,
} from "../../Components/ProfileFormCard/ProfileFormCard";

function MyProfile() {
  return (
    <DashboardLayout title="My Profile">
      <div className="x10-4-0-my-personals">
        <div className="flex-col-2">
          <div className="frame-2923">
            <BackButton location="/dashboard"></BackButton>
          </div>
          <div className="profile border-1px-onyx">
            <div className="profile-info">
              <PersonalInformation />
              <ContactInformation />
              <AdditionalInformation />
            </div>
            <EditInformation />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MyProfile;

function EditInformation() {
  return (
   <div className="edit-information-container">
     <img src="/img/DashboardProfilePic.png" />
     <button className="edit-btn">Edit Information</button>
   </div>
  );
}
