import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./community-members-profile.css";

function App() {
  return (
    <DashboardLayout title="Mikhail Ugryumov">
      <CommunityMembersProfile />
    </DashboardLayout>
  );
}

export default App;

function CommunityMembersProfile() {
  return (
    <div className="x08-1-0-community-members">
      <div className="flex-col-6">
        <div className="frame-2923">
          <div className="icons-arrows-left">
            <div className="overlap-group-5">
              {/* <img
                className="vector-stroke-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector--stroke-@2x.png"
              />
              <img
                className="vector-stroke-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector--stroke--1@2x.png"
              /> */}
            </div>
          </div>
          <Link to="/community-members" style={{ textDecoration: "none" }}>
            <div className="place-1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              Back
            </div>
          </Link>
        </div>
        <div className="profie-details border-1px-onyx">
          <div className="information-container">
            <div className="x-information">
              <div className="flex-row-5">
                <div className="flex-col-8">
                  <div className="text-2 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Personal infromation
                  </div>
                  <div className="frame-9">
                    <div className="first-name ibmplexsans-regular-normal-monsoon-14px">
                      First name
                    </div>
                    <div className="mikhail ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      Mikhail
                    </div>
                  </div>
                </div>
                <div className="frame-2819">
                  <div className="last-name ibmplexsans-regular-normal-monsoon-14px">
                    Last Name
                  </div>
                  <div className="ugryumov ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Ugryum
                  </div>
                </div>
                <div className="dob">
                  <div className="date-of-birhday ibmplexsans-regular-normal-monsoon-14px">
                    Date of birhday
                  </div>
                  <div className="phone ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    08/23/1995
                  </div>
                </div>
              </div>
              <div className="rectangle-867"></div>
            </div>
            <div className="x-information">
              <div className="flex-row-4">
                <div className="flex-col-5">
                  <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Contact information
                  </div>
                  <div className="frame-2823-1">
                    <div className="email ibmplexsans-regular-normal-monsoon-14px">
                      Email
                    </div>
                    <div className="mikhailgmailpro ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      mikhail@gmail.pro
                    </div>
                  </div>
                </div>
                <div className="frame-2824-1">
                  <div className="phone ibmplexsans-regular-normal-monsoon-14px">
                    Phone
                  </div>
                  <div className="text-3 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    +1 (233) 369-50-15
                  </div>
                </div>
              </div>
              <div className="rectangle-867"></div>
            </div>
            <div className="additional-information">
              <div className="flex-col-7">
                <div className="text-4 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Additional information
                </div>
                <div className="frame-2823">
                  <div className="last-login ibmplexsans-regular-normal-monsoon-14px">
                    Last login
                  </div>
                  <div className="phone ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    09/22/2020
                  </div>
                </div>
              </div>
              <div className="frame-2824">
                <div className="numbers-of-visits ibmplexsans-regular-normal-monsoon-14px">
                  Numbers of visits
                </div>
                <div className="number-5 ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  153
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-4">
            <div className="profile-image"></div>
            <div className="button">
              <Msgbtn>Write message</Msgbtn>
              <div className="default-btn">
                <div className="follow ibmplexsans-semi-bold-shark-16px">
                  Follow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Msgbtn(props) {
  const { children } = props;

  return (
    <div className="msg-btn border-0-5px-quarter-spanish-white">
      <div className="default-i905517068 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}
