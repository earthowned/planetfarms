import React from 'react';
import BackButton from '../../../Components/BackButton/BackButton';
import FarmsDetailsCard from '../../../Components/FarmsDetailsCard/FarmsDetailsCard';
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout';
import './enterprises-view-page.css'


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
   
      <div className="x09-0-1-enterprise-user-view screen">
        
        <div className="flex-col-7">
          <BackButton location={"/enterprises"} />
          <div className="enterprises-view border-1px-onyx">
            <EnterpriseDetails {...enterpriseDetailsData} />
           
           
            <Frame2956 {...frame2956Data} />
          </div>
       
        </div>
      </div>
    
  );
}












function EnterpriseDetails(props) {
  const {
    image,
    surname,
    text2,
    dueToTheAdvantage,
    text6,
    text7,
    phone,
    text8,
    phone2,
    text9,
    phone3,
    openInCalendar,
    youreFollower,
    text3,
    text4,
    joinMessenger,
    frame2904,
    frame3392,
    frame3393,
    text5,
    chevronRightOutline1Props,
  } = props;

  return (
    <div className="enterprise-details">
       <FarmsDetailsCard image={"https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-1969@1x.png"} 
       title="Farmer Enterprise"
       description="Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!"
       followerNumber="2,564 followers"
       />
       


      <div className="second-container">
        <div className="second-container-col-1">
          
          <div className="second-container-wrapper">
            <p className="container-text-title valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text6}</p>
            <div className="col-1-text-container">
              <div className="green-dot"></div>
              <div className="first-event-text-1 ibmplexsans-normal-quarter-spanish-white-16px">{text7}</div>
              <div className="first-event-date-1 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
            </div>
            <div className="col-1-text-container">
              <div className="green-dot"></div>
              <div className="first-event-text-1 ibmplexsans-normal-quarter-spanish-white-16px">{text7}</div>
              <div className="first-event-date-1 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
            </div>
            <div className="col-1-text-container">
              <div className="green-dot"></div>
              <div className="first-event-text-1 ibmplexsans-normal-quarter-spanish-white-16px">{text7}</div>
              <div className="first-event-date-1 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
            </div>
            
            <div className="calenderButton">
              <div className="calenderButton-text ibmplexsans-semi-bold-shark-16px">{openInCalendar}</div>
            </div>
          </div>
        </div>
        {/* <div className="flex-col-4">
         
          <div className="joinmsg">
            <div className="frame-3429">
              <div className="frame-3435">
                <p className="text-3 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text3}</p>
                <div className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  {text4}
                </div>
              </div>
              <div className="frame-3421">
                <div className="join-messenger valign-text-middle ibmplexsans-semi-bold-shark-16px">
                  {joinMessenger}
                </div>
              </div>
              <div className="rectangle-875"></div>
            </div>
            <div className="frame-3425">
              <div className="frame-3424">
                <div className="overlap-group-5">
                  <div className="frame-2904" style={{ backgroundImage: `url(${frame2904})` }}></div>
                  <div className="frame-3392 border-2px-shark-2" style={{ backgroundImage: `url(${frame3392})` }}></div>
                  <div className="frame-3393 border-2px-shark-2" style={{ backgroundImage: `url(${frame3393})` }}></div>
                </div>
              </div>
              <p className="text-5 valign-text-middle ibmplexsans-normal-monsoon-14px">{text5}</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="rectangle-875-1"></div>
    </div>
  );
}


function ChevronRightOutline1(props) {
  const { vector2, className } = props;

  return (
    <div className={`chevron-right-outline-1-2 ${className || ""}`}>
      <div className="overlap-group-6">
        <img
          className="vector-20"
          src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector@2x.png"
        />
        <img className="vector-19" src={vector2} />
      </div>
    </div>
  );
}




function Frame2956(props) {
  const {
    enterprisePhotosI5,
    frame2965,
    frame2966,
    frame2967,
    frame2968,
    vector2,
    chevronRightOutline1Props,
    frame2969Props,
  } = props;

  return (
    <div className="enterprises-photos">
      <div className="title">
        <div className="enterprise-photos valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          {enterprisePhotosI5}
        </div>
        <ChevronRightOutline1 vector2={chevronRightOutline1Props.vector2} className="chevron-right-outline-1-1" />
      </div>
      <div className="flex-row-6">
        <div className="photo-1" style={{ backgroundImage: `url(${frame2965})` }}></div>
        <div className="flex-row-item" style={{ backgroundImage: `url(${frame2966})` }}></div>
        <div className="flex-row-item" style={{ backgroundImage: `url(${frame2967})` }}></div>
        <div className="flex-row-item" style={{ backgroundImage: `url(${frame2968})` }}></div>
        <div className="overlap-group1-2">
          <Frame2969 frame2969={frame2969Props.frame2969} rectangle876={frame2969Props.rectangle876} />
          <div className="frame-2970">
            <div className="arrow-forward-outline-1">
              <div className="overlap-group-7">
                <img
                  className="vector-22"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector@2x.png"
                />
                <img className="vector-21" src={vector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Frame2969(props) {
  const { frame2969, rectangle876 } = props;

  return (
    <div className="frame-2969" style={{ backgroundImage: `url(${frame2969})` }}>
      <img className="rectangle-876" src={rectangle876} />
    </div>
  );
}








const chevronRightOutline1Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector-3@2x.png",
};

const enterpriseDetailsData = {
    image: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60814bcc20bdddf897339de8/img/image@1x.svg",
    surname: "Farmer Enterprise",
    text2: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
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
    frame2904: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60814bcc20bdddf897339de8/img/frame-2904@2x.png",
    frame3392: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60814bcc20bdddf897339de8/img/frame-3392@2x.png",
    frame3393: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60814bcc20bdddf897339de8/img/frame-3393@2x.png",
    text5: "Bessy, Misha and 175 more users already follow us!",
    chevronRightOutline1Props: chevronRightOutline1Data,
};




const chevronRightOutline14Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector-3@2x.png",
};

const frame2969Data = {
    frame2969: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-2969@2x.png",
    rectangle876: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/rectangle-876@2x.png",
};

const frame2956Data = {
    enterprisePhotosI5: "Enterprise photos",
    frame2965: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-2965@2x.png",
    frame2966: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-2966@2x.png",
    frame2967: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-2967@2x.png",
    frame2968: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-2968@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/vector-1@2x.png",
    chevronRightOutline1Props: chevronRightOutline14Data,
    frame2969Props: frame2969Data,
};

