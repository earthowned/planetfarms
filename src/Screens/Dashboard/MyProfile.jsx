import React from "react";
import "./my-profile.css";
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import BackButton from "../../Components/BackButton/BackButton";


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
            <div className="personal-info">
              <div className="text-1 ibmplexsans-semi-bold-quarter-spanish-white-24px">Personal infromation</div>
              <div className="flex-row-4">
                <div className="first-name">
                  <div className="first-name-1 ibmplexsans-regular-normal-monsoon-14px">First name</div>
                  <div className="mikhail ibmplexsans-semi-bold-quarter-spanish-white-16px">Mikhail</div>
                </div>
                <div className="last-name-1">
                  <div className="last-name ibmplexsans-regular-normal-monsoon-14px">Last Name</div>
                  <div className="ugryumov ibmplexsans-semi-bold-quarter-spanish-white-16px">Ugryumov</div>
                </div>
                <div className="date-of-birth">
                  <div className="date-of-birhday ibmplexsans-regular-normal-monsoon-14px">Date of birhday</div>
                  <div className="phone ibmplexsans-semi-bold-quarter-spanish-white-16px">08/23/1995</div>
                </div>
              </div>
              <div className="rectangle-867"></div>
            </div>
            <div className="contact-info">
              <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-24px">
                Contact information
              </div>
              <div className="flex-row-5">
                <div className="e-mail">
                  <div className="email ibmplexsans-regular-normal-monsoon-14px">Email</div>
                  <div className="mikhailgmailpro ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    mikhail@gmail.pro
                  </div>
                </div>
                <div className="phone-2">
                  <div className="phone-1 ibmplexsans-regular-normal-monsoon-14px">Phone</div>
                  <div className="text-2 ibmplexsans-semi-bold-quarter-spanish-white-16px">+1 (233) 369-50-15</div>
                </div>
              </div>
              <div className="rectangle-867"></div>
            </div>
            <div className="additional-info">
              <div className="text-3 ibmplexsans-semi-bold-quarter-spanish-white-24px">Additional information</div>
              <div className="flex-row-6">
                <div className="last-login-1">
                  <div className="last-login ibmplexsans-regular-normal-monsoon-14px">Last login</div>
                  <div className="phone-3 ibmplexsans-semi-bold-quarter-spanish-white-16px">09/22/2020</div>
                </div>
                <div className="number-of-visit">
                  <div className="numbers-of-visits ibmplexsans-regular-normal-monsoon-14px">Numbers of visits</div>
                  <div className="number-4 ibmplexsans-semi-bold-quarter-spanish-white-16px">153</div>
                </div>
              </div>
            </div>
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
