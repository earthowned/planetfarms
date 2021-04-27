import React, { useState } from "react";
import BackButton from "../../../Components/BackButton/BackButton";
import CommunityGroupPost from "../../../Components/CommunityGroupPost/CommunityGroupPost";
import FarmsDetailsCard from "../../../Components/FarmsDetailsCard/FarmsDetailsCard";
import FilterSearch from "../../../Components/FilterSearch/FilterSearch";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";
import "./enterprises-view-page.css";

function App() {
  return (
    <DashboardLayout title="Ragrarians enterprises">
      <EnterprisesPage />
    </DashboardLayout>
  );
}

export default App;




function EnterprisesPage() {
 
  return (
    <div className="enterprise-user-view screen">
      <div className="enterprise-user-view-wrapper">
        <BackButton location={"/enterprises"} />
        <div className="enterprises-view border-1px-onyx">
          <EnterpriseDetails {...enterpriseDetailsData} />
          <AdditionalInformation />
          <EnterprisesProduct />
    
          <EnterprisesPhoto />
        </div>
        <div className="group-flex-row-7">
          <div>
            <CommunityGroupPost
              title={"Think like a farmer"}
              timestamps={"November 18 at 05:45 AM"}
              content={
                "Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. "
              }
              postImage={"/img/bg-image1.svg"}
            />
            <CommunityGroupPost
              title={"Be like a farmer"}
              timestamps={"November 30 at 09:40 PM"}
              content={` Hi there! What do you think about new COVID 19? How will you
            protect your family and business? It’s just a real big problem
            right now with my business!!! `}
            />
          </div>
          {/*** filter */}
          {/* {filter()} */}
          <FilterSearch />
        </div>
      </div>
    </div>
  );
}

function EnterprisesProduct() {
  return (
    <>
      <div className="title">
        <div className="enterprise-photos valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Enterprises Products
        </div>
        
        <div className={`chevron-right-outline-1-2 chevron-right-outline-1-1`}>
          <div className="enterprises-overlap">
          <img src="/img/chevron-right-outline.svg" />
          </div>
        </div>
      </div>
      <div className="hr-lines"></div>
    </>
  );
}

function AdditionalInformation() {
  const [isActive,setIsActive]=useState(false)
  const [btnActive,setBtnActive]=useState(false)
  return (
    <>
      <div className="title" onClick={()=>setIsActive(!isActive)}>
        <div className="enterprise-photos valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Additional Information
        </div>
        <div className={`chevron-right-outline-1-2 chevron-right-outline-1-1`}>
          <div className="enterprises-overlap">
          <img src="/img/chevron-right-outline.svg" />
          </div>
        </div>
      </div>
      {isActive && <div className="accordin-content">
        <div className="accordin-button">
      <button className="btn-accordin tasks-button" > <img src="/img/checkmark-square.svg" />Tasks</button>
      <button className="btn-accordin"> <img src="/img/dollar-sign.svg" /> Finances</button>
      <button className="btn-accordin"> <img src="/img/pie-chart-outline.svg" />  Reports</button>
      <button className="btn-accordin" > <img src="/img/file-text-outline.svg" /> Materials</button>

        </div>  </div>}
      <div className="hr-lines"></div>
    </>
  );
}

function EnterprisesPhoto() {
  const [isActive,setIsActive]=useState(false)
  return (
    <>
      <div className="title" onClick={()=>setIsActive(!isActive)}>
        <div className="enterprise-photos valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Enterprises Photo
        </div>
       
        <div className={`chevron-right-outline-1-2 chevron-right-outline-1-1`}>
          <div className="enterprises-overlap">
           
            <img src="/img/chevron-right-outline.svg" />
          </div>
        </div>
         
      </div>
     {isActive && <div className="flex-row-6">
        {/** picture slider component  component comes  here */}
        
        
      </div>}
      <div className="hr-lines"></div>
      
    </>
  );
}
function EnterpriseDetails(props) {
  const {
    text6,
    openInCalendar,
    text3,
    text4,
    joinMessenger,
    text5,
  } = props;

  return (
    <div className="enterprise-details">
      <FarmsDetailsCard
        image={
          "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-1969@1x.png"
        }
        title="Farmer Enterprise"
        description="Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!"
        followerNumber="2,564 followers"
      />
      <div className="event-messenger-container">
        <div className="event-container">
          <div className="event-container-wrapper">
            <p className="event-text-title valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">
              {text6}
            </p>
            <Events
              event="New event for everyone New event for everyone New event for everyone New event for everyone New event for everyone "
              date="11/24/2020"
            />
            <Events event="New event for everyone" date="11/24/2020" />
            <Events event="New event for everyone" date="11/24/2020" />
            <div className="calenderButton">
              <div className="calenderButton-text ibmplexsans-semi-bold-shark-16px">
                {openInCalendar}
              </div>
            </div>
          </div>
        </div>
        <JoinMessenger />
        
      </div>
      <div className="rectangle-875-1"></div>
    </div>
  );
}
 
/** side join messenger screen */
const JoinMessenger=()=>{
  return(
    <div className="enterprise-messenger-container">
          <div className="enterprise-messenger-wrapper">
            <div className="enterprises-messenger-text-container">
              <div className="enterprises-messenger-text-wrapper">
                <p className="enterprises-messenger-text-1  valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">
                Would you like to communicate with other this enterpise users?
                </p>
                <div className="enterprises-messenger-text-2  valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Join our free messenger!
                </div>
              </div>
              <div className="enterprise-messenger-btn">
                <div className="enterprise-messenger-btn-text valign-text-middle ibmplexsans-semi-bold-shark-16px">
                Join messenger
                </div>
              </div>
              <div className="rectangle-875"></div>
            </div>
            <div className="enterprise-messenger-lower">
              <div className="enterprise-messenger-lower-wrapper">
                <div className="enterprise-messenger-lower-overlap-group ">
                  <div
                    className="enterprise-messenger-lower-avatar-1 "
                    style={{ backgroundImage: `url("/img/avatar-img.svg")` }}
                  ></div>
                  <div
                    className="enterprise-messenger-lower-avatar-2 border-2px-shark-2"
                    style={{ backgroundImage: `url("/img/avatar-msg.svg")` }}
                  ></div>
                  <div
                    className="enterprise-messenger-lower-avatar-3 border-2px-shark-2"
                    style={{ backgroundImage: `url("/img/avatar-img.svg")` }}
                  ></div>
                </div>
              </div>
              <p className="enterprise-messenger-lower-text valign-text-middle ibmplexsans-normal-monsoon-14px">
              Bessy, Misha and 175 more users already follow us! 
              </p>
            </div>
          </div>
        </div>

  )
}




const enterpriseDetailsData = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60814bcc20bdddf897339de8/img/image@1x.svg",
  surname: "Farmer Enterprise",
  text2:
    "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
  dueToTheAdvantage: "2,564 followers",
  text6: "Upcoming events in “Farmer Enterprise”",
  text7: "New event for everyone",
  phone: "11/24/2020",
  text8: "Free lesson for our users (online)",
  phone2: "11/28/2020",
  text9: "Open lesson in farmer school for everyo…",
  phone3: "12/04/2020",
  openInCalendar: "Open in calendar",
  youreFollower: "You’re follower",
  text3: "Would you like to communicate with other this enterpise users?",
  text4: "Join our free messenger!",
  joinMessenger: "Join messenger",
  text5: "Bessy, Misha and 175 more users already follow us! ",
  
};



const Events = ({ event, date }) => {
  return (
    <>
      <div className="event-text-container">
        <div className="green-dot"></div>
        <div className="event-text-1 ibmplexsans-normal-quarter-spanish-white-16px">
          {event}
        </div>
        <div className="event-date-1 ibmplexsans-normal-quarter-spanish-white-16px">
          {date}
        </div>
      </div>
    </>
  );
};
