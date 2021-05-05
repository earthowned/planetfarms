import React, { useState } from "react";
import BackButton from "../../../Components/BackButton/BackButton";
import FarmsDetailsCard from "../../../Components/FarmsDetailsCard/FarmsDetailsCard";
import CommunityGroupPhotos from "../../../Components/CommunityGroupPhotos/CommunityGroupPhotos";
import CommunityGroupPost from "../../../Components/CommunityGroupPost/CommunityGroupPost";
import CommunityViewPost from "../../../Components/CommunityViewPost/CommunityViewPost";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";

import "./group-view-page.css";
import FilterSearch from "../../../Components/FilterSearch/FilterSearch";

function App() {
  return (
    <DashboardLayout title="Community Group">
      <CommunityGroupViewPage />
    </DashboardLayout>
  );
}

export default App;

function CommunityGroupViewPage() {
  const [followers, setFollowers] = useState(false);
  // const handleFollowClick = () => {
  //   setFollowers(!followers);
  // };
  return (
    <div className="x05-2-0-group-page-inside-user-view">
      <div className="flex-col-4">
        <BackButton location={"/community-group"} />
        <div className="first-card border-1px-onyx">
          <div className="posts-farmer">
            <FarmsDetailsCard
              image={
                "https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-1969@1x.png"
              }
              title="Think like a farmer"
              description=" Hi there! We’re a most kind and friendly society for everyone!
            We post here some news about farming, nature and etc… We hope
            you gonna like it! Be a part of our still small, but amazing
            community!"
              followerNumber=" 2,564 followers"
            />
            <div className="group-boderline"></div>
          </div>
          {/* <GroupPhoto /> */}
          <CommunityGroupPhotos />
        </div>
        <div className="group-flex-row-7">
          <div style={{ overflowY: "scroll" }}>
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

