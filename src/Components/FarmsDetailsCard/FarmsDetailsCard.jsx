import React, { useState } from "react";
import "./farms-details-card.css";
const BackgroundImage = ({image,title,description,followerNumber}) => {
  const [followers, setFollowers] = useState(false);
   const handleFollowClick = () => {
     setFollowers(!followers);
  };
  return(
    <>
    <div className="group-bg-image" style={{backgroundImage:`url(${image})`}}></div>
    <div className="group-view-inner-content">
              <div className="post-title-group">
                <h1 className="post-title-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-40px">
                {title}
                </h1>
                <p className="post-description valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
                 {description}
                </p>

                <div className="followers-group">
                  <div className="group-followers-text valign-text-middle ibmplexsans-semi-bold-monsoon-16px">
                   {followerNumber}
                  </div>
                </div>
              </div>
              <div>
                <div className="community-group-view-filter-container">
                <div className="secondary-btn community-group-view-btn" onClick={handleFollowClick}>
                  <span
                  >
                    You’re follower
                  </span>

                  <img src="/img/chevron-right-outline.svg" alt="arrow-icon" />
                </div>
                 {followers && (
                  <div className="follow-option">
                    <div className="write-a-message ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      Write a message
                    </div>
                    <div className="follow-option-item ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      Unfollow
                    </div>
                    <div className="follow-option-item color-red">
                      Report group
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
    </>
  ) 
};

export default BackgroundImage;