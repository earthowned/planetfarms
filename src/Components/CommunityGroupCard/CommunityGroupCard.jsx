import React from "react";
import "./community-group-card.css";

const CommunityGroupCard = () => {
  return (
    <div className="card-1 border-1px-onyx">
      <div className="card-container"></div>
      <div className="card-text-container">
        <div className="farmers ibmplexsans-semi-bold-caribbean-green-14px">
          FARMERS
        </div>
        <div className="think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Think like a farmer
        </div>
      </div>

      <div className="follower-container">
        <div className={`follower-number-container`}>
          <div className="follower-number-item ibmplexsans-regular-normal-monsoon-16px">
            2,564 followers
          </div>
          <p className="follower-number-item ibmplexsans-regular-normal-monsoon-16px">
            Last publication: 2 days ago
          </p>
        </div>
        <div className="frame-2796-1">
          <div className="frame-5-1 border-0-5px-quarter-spanish-white">
            <div className="default-i905516418 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              Don't recommend
            </div>
          </div>
          <div className={`frame-2792`}>
            <div className="follow ibmplexsans-semi-bold-shark-16px">
              Follow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  <div className="frame-2796-1">
// <div className="frame-5-1 border-0-5px-quarter-spanish-white">
// <div className="default-i905516418 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
//   Don't recommend
// </div>
// </div>
// <div className={`frame-2792`}>
// <div className="follow ibmplexsans-semi-bold-shark-16px">
//   Follow
// </div>
// </div>
// </div>

//follow
{
  /* <div className="follow-btn border-0-5px-quarter-spanish-white">
<div className="btn-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
  Unfollow
</div>
</div> */
}
export default CommunityGroupCard;
