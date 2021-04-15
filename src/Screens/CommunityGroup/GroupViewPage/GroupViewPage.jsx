import React from "react";
import BackButton from "../../../Components/BackButton/BackButton";
import CommunityGroupPost from "../../../Components/CommunityGroupPost/CommunityGroupPost";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";

import "./group-view-page.css";

function App() {
  return (
    <DashboardLayout title="Community Group">
      <CommunityGroupViewPage />
    </DashboardLayout>
  );
}

export default App;

function CommunityGroupViewPage() {
  return (
    <div className="x05-2-0-group-page-inside-user-view">
      <div className="flex-col-4">
        <BackButton location={"/community-group"} />
        <div className="first-card border-1px-onyx">
          <div className="posts-farmer">
            <div className="group-bg-image"></div>
            <div className="flex-row-6">
              <div className="post-title-group">
                <h1 className="post-title-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-40px">
                  Think like a farmer
                </h1>
                <p className="post-description valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
                  Hi there! We’re a most kind and friendly society for everyone!
                  We post here some news about farming, nature and etc… We hope
                  you gonna like it! Be a part of our still small, but amazing
                  community!
                </p>
                <div className="followers-group">
                  <div className="group-followers-text valign-text-middle ibmplexsans-semi-bold-monsoon-16px">
                    2,564 followers
                  </div>
                </div>
              </div>
              <div className="community-group-follow-btn border-0-5px-quarter-spanish-white">
                <div className="youre-follower ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  You’re follower
                </div>
                <img src="/img/chevron-right-outline.svg" alt="arrow-icon" />
              </div>
            </div>
            <div className="group-boderline"></div>
          </div>
          <GroupPhoto {...groupPhotoData} />
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
          {filter()}
        </div>
      </div>
    </div>
  );
}



function GroupPhoto(props) {
  const {
    enterprisePhotosI5,
    photo1,
    photo2,
    photo3,
    rectangle876,
  } = props;

  return (
    <div className="group-photo">
      <div className="group-photo-title">
        <div className="enterprise-photos-i5 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          {enterprisePhotosI5}
        </div>
        
        <div className={`chevron-right-outline-1-1 }`}>
      <div className="overlap-group-5">
        <img className="vector-19" src="vector.png" />
      </div>
    </div>
      </div>
      <div className="flex-row-4">
        <div
          className="photo"
          style={{ backgroundImage: `url(${photo1})` }}
        ></div>
        <div
          className="frame-296"
          style={{ backgroundImage: `url(${photo2})` }}
        ></div>
        <div
          className="frame-296"
          style={{ backgroundImage: `url(${photo2})` }}
        ></div>
        <div
          className="frame-296"
          style={{ backgroundImage: `url(${photo3})` }}
        ></div>
        <div className="overlap-group1-2">
          <div
            className="frame-2969"
            style={{ backgroundImage: `url(${photo1})` }}
          >
            <img className="rectangle-876" src={rectangle876} />
          </div>
          <div className="arrow">
            <div className="arrow-forward-outline-1">
              <div className="overlap-group-6">
                <img className="group-arrow-icon" src="img/arrow-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const groupPhotoData = {
  enterprisePhotosI5: "Group photos",
  photo1: "/img/group-photo-1.svg",
  photo2: "/img/group-photo-2.svg",
  photo3: "/img/group-photo-3.svg",
  photo1: "/img/group-photo-1.svg",
  photo2: "/img/group-photo-2.svg",
  photo3: "/img/group-photo-3.svg",
  rectangle876: "rectangle-876.png",
};

const filter = () => {
  return (
    <div className="filter border-1px-onyx">
      <div className="search-filters ibmplexsans-semi-bold-quarter-spanish-white-16px">
        Search filters
      </div>
      <div className={`frame-2808 border-1px-onyx }`}>
        <div className="by-date ibmplexsans-semi-bold-monsoon-16px">
          By Date
        </div>
        <div className={`chevron-right-outline-1-1 }`}>
      <div className="overlap-group-5">
        <img className="vector-19" src="vector.png" />
      </div>
    </div>
      </div>
      <div className={`frame-2808 border-1px-onyx }`}>
        <div className="by-date ibmplexsans-semi-bold-monsoon-16px">
          Popular
        </div>
        <div className={`chevron-right-outline-1-1 }`}>
      <div className="overlap-group-5">
        <img className="vector-19" src="vector.png" />
      </div>
    </div>
      </div>
      <div className="frame-2810">
        <div className="group-search ibmplexsans-semi-bold-shark-16px">
          Search
        </div>
      </div>
    </div>
  );
};
