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

const DataField=({data:{ title,first_inputTitle,first_inputValue,second_inputTitle,second_inputValue,third_inputTitle,third_inputValue}})=>{
  return(
  
  <div className="x-information">
     <div className="flex-row-4">
       <div className="flex-col-5">
        <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-16px"> {title} </div>
        <div className="email-container">
           <div className="email-text ibmplexsans-regular-normal-monsoon-14px"> {first_inputTitle}</div>
           <div className="email-address ibmplexsans-semi-bold-quarter-spanish-white-16px">  {first_inputValue} </div>
         </div>
     </div>
       <div className="phone-container">
         <div className="phone-text ibmplexsans-regular-normal-monsoon-14px">{second_inputTitle}</div>
         <div className="phone-number ibmplexsans-semi-bold-quarter-spanish-white-16px"> {second_inputValue} </div>
       </div> 
        <div className="dob">
       <div className="date-of-birhday-text ibmplexsans-regular-normal-monsoon-14px">{third_inputTitle} </div>
       <div className="date-text ibmplexsans-semi-bold-quarter-spanish-white-16px">{third_inputValue} </div>
     </div>
     </div>
     <div className="border-line"></div>
   </div>
  )

}


const PersonalInformation=()=>{
  const PersonalInformationdata = {
    title: "Personal infromation",
    first_inputTitle:"First name",
    first_inputValue:"Mikhail" ,
    second_inputTitle:"Last Name" ,
    second_inputValue:"Ugryum",
    third_inputTitle:"Date of birhday",
    third_inputValue:"08/05/2021"
  }
  return(
  <DataField data={PersonalInformationdata} />
  )
}

const ContactInformation=()=>{
  const ContactInformationdatadata = {
    title: "Contact information",
    first_inputTitle:"Email",
    first_inputValue:"johndoe@gmail.com" ,
    second_inputTitle:"Phone" ,
    second_inputValue:"+1 61 2575684",
  }
  return(
  <DataField data={ContactInformationdatadata}  />
  )
}

const AdditionalInformation=()=>{
  const AdditionalInformationdata = {
    title: "Additional information",
    first_inputTitle:"Last login",
    first_inputValue:"09/22/2020" ,
    second_inputTitle:"Numbers of visits" ,
    second_inputValue:"153",
  }
  return(
  <DataField data={AdditionalInformationdata}    />

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

