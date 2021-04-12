import React from "react";
import "./my-profile.css";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import BackButton from "../../Components/BackButton/BackButton";
import { AdditionalInformation, ContactInformation, PersonalInformation } from "../../Components/ProfileFormCard/ProfileFormCard";


function MyProfile() {
  return (
    <DashboardLayout title="My Profile">
    <div className="x10-4-0-my-personals">
      <div className="flex-col-2">
        <div className="frame-2923">
          <BackButton location='/dashboard'></BackButton>
        </div>
        <div className="profile border-1px-onyx">
           <div className="profile-info">
           <PersonalInformation />
            <ContactInformation />
            <AdditionalInformation />
          </div> 
          <div className="profile-pic-1">
            <div className="profile-pic"></div>
            <EditInformation>Edit information</EditInformation>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

export default MyProfile;


function EditInformation({ children }) {
  return (
    <div className="edit-information border-0-5px-quarter-spanish-white">
      <div className="default-i905517658 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}
