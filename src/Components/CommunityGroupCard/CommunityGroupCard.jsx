import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./community-group-card.css";

const CommunityGroupCard = ({ location }) => {
  const [follow, setFollow] = useState(false);
  const followClick = () => {
    setFollow(!follow);
  };
  return (
    <div className="card-1 border-1px-onyx">
      <Link to={location} style={{ textDecoration: "none" }}>
        <div className="card-container"></div>
      </Link>

      <div className="card-text-container">
        <Link to={location} style={{ textDecoration: "none" }}>
          <div className="farmers ibmplexsans-semi-bold-caribbean-green-14px">
            FARMERS
          </div>
        </Link>
        <Link to={location} style={{ textDecoration: "none" }}>
          <div className="think-like-a-farmer ibmplexsans-semi-bold-quarter-spanish-white-24px">
            Think like a farmer
          </div>
        </Link>
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
        {follow ? (
          <div className="follow-btn border-0-5px-quarter-spanish-white">
            <div
              className="btn-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px"
              onClick={followClick}
            >
              Unfollow
            </div>
          </div>
        ) : (
          <div className="frame-2796-1">
            <div className="frame-5-1 border-0-5px-quarter-spanish-white">
              <div className="default-i905516418 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Don't recommend
              </div>
            </div>
            <div className={`frame-2792`}>
              <div
                className="follow ibmplexsans-semi-bold-shark-16px"
                onClick={followClick}
              >
                Follow
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityGroupCard;
