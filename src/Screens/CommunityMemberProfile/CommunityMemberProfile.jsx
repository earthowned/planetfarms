import React from "react";
import { Link } from "react-router-dom";
import Backbtn from "../../Components/BackButton/BackButton";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-member-profile.css";

function App() {
  return (
    <DashboardLayout title="Mikhail Ugryumov">
      <CommunityMembersProfile />
    </DashboardLayout>
  );
}

export default App;

const PersonalInformation=()=>{
  return(
    <div className="x-information">
    <div className="flex-row-5">
    <div className="flex-col-8">
      <div className="personal-information-text ibmplexsans-semi-bold-quarter-spanish-white-16px"> Personal infromation</div>
      <div className="first-name-input">
        <div className="first-name ibmplexsans-regular-normal-monsoon-14px"> First name</div>
        <div className="name ibmplexsans-semi-bold-quarter-spanish-white-16px"> Mikhail</div>
      </div>
    </div>
    <div className="last-name">
      <div className="first-name ibmplexsans-regular-normal-monsoon-14px">Last Name </div>
      <div className="name ibmplexsans-semi-bold-quarter-spanish-white-16px">  Ugryum</div>
    </div>
    <div className="dob">
      <div className="date-of-birhday-text ibmplexsans-regular-normal-monsoon-14px">Date of birhday </div>
      <div className="date-text ibmplexsans-semi-bold-quarter-spanish-white-16px"> 08/23/1995</div>
    </div>
  </div>
  <div className="border-line"></div>
  </div>
  )
}

const ContactInformation=()=>{
  return(
    <div className="x-information">
    <div className="flex-row-4">
      <div className="flex-col-5">
        <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-16px"> Contact information </div>
        <div className="email-container">
          <div className="email-text ibmplexsans-regular-normal-monsoon-14px"> Email</div>
          <div className="email-address ibmplexsans-semi-bold-quarter-spanish-white-16px">  mikhail@gmail.pro </div>
        </div>
      </div>
      <div className="phone-container">
        <div className="phone-text ibmplexsans-regular-normal-monsoon-14px">Phone</div>
        <div className="phone-number ibmplexsans-semi-bold-quarter-spanish-white-16px"> +1 (233) 369-50-15 </div>
      </div>
    </div>
    <div className="border-line"></div>
  </div>
  )
}

const AdditionalInformation=()=>{
  return(
    <div className="additional-information-container">
    <div className="flex-col-7">
      <div className="additional-information-text ibmplexsans-semi-bold-quarter-spanish-white-16px">Additional information </div>
      <div className="additional-information-login">
        <div className="last-login ibmplexsans-regular-normal-monsoon-14px"> Last login </div>
        <div className="login-date ibmplexsans-semi-bold-quarter-spanish-white-16px"> 09/22/2020  </div>
      </div>
    </div>
    <div className="frame-2824">
      <div className="numbers-of-visits ibmplexsans-regular-normal-monsoon-14px"> Numbers of visits</div>
      <div className="number-5 ibmplexsans-semi-bold-quarter-spanish-white-16px"> 153</div>
    </div>
  </div>
  )
}

const ProfileImage=()=>{
  return(
    <div className="flex-col-4">
    <div
      className="profile-image"
      style={{ backgroundImage: `url("/img/profile-image.svg") ` }}
    ></div>
    <div className="button">
      <div className="msg-btn border-0-5px-quarter-spanish-white">
       <div className="message-btn-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px"> Write message</div>
      </div>
      <div className="default-btn">
        <div className="follow ibmplexsans-semi-bold-shark-16px"> Follow</div>
      </div>
    </div>
  </div>

  )
}


function CommunityMembersProfile() {
  return (
    <div className="x08-1-0-community-members">
      <div className="flex-col-6">
        <Link to="/community-members" style={{ textDecoration: "none" }}>
          <Backbtn />
        </Link>
        <div className="profie-details border-1px-onyx">
          <div className="information-container">
              {PersonalInformation()}
           {ContactInformation()}
           {AdditionalInformation()}
          </div>
          {ProfileImage()}
        </div>
      </div>
    </div>
  );
}

