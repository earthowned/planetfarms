import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../../../components/backButton/BackButton";
import FarmsDetailsCard from "../../../components/farmsDetailsCard/FarmsDetailsCard";
import CommunityGroupPhotos from "../../../components/communityGroupPhotos/CommunityGroupPhotos";
import CommunityGroupPost from "../../../components/communityGroupPost/CommunityGroupPost";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";
import { listGroupById } from "../../../actions/communityGroupActions";

import "./GroupViewPage.css";
import FilterSearch from "../../../components/filterSearch/FilterSearch";

const CommunityGroupViewPage = () => {
  const { id } = useParams();

  const groupSingle = useSelector((state) => state.groupView.group);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listGroupById(id));
  }, [dispatch]);

  return (
    <DashboardLayout title="Community Group">
      <div className="x05-2-0-group-page-inside-user-view">
        <div className="flex-col-4">
          <BackButton location="/community-group" />
          <div className="first-card">
            <div className="posts-farmer">
              <FarmsDetailsCard
                image="https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-1969@1x.png"
                title={groupSingle.title}
                description={groupSingle.description}
                followerNumber=" 2,564 followers"
              />
              <div className="group-boderline" />
            </div>
            {/* <GroupPhoto /> */}
            <CommunityGroupPhotos />
          </div>
          <div className="group-flex-row-7">
            <div className="community-group-post-container">
              <CommunityGroupPost
                title="Think like a farmer"
                timestamps="November 18 at 05:45 AM"
                content="Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. "
                postImage="/img/bg-image1.svg"
              />
              <CommunityGroupPost
                title="Be like a farmer"
                timestamps="November 30 at 09:40 PM"
                content={` Hi there! What do you think about new COVID 19? How will you
            protect your family and business? It’s just a real big problem
            right now with my business!!! `}
              />
            </div>
            <FilterSearch />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default CommunityGroupViewPage;
