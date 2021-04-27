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
    <div className="flex-row-6">
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
                <div className="community-group-follow-btn border-0-5px-quarter-spanish-white">
                  <div
                    className="youre-follower ibmplexsans-semi-bold-quarter-spanish-white-16px"
                     onClick={handleFollowClick}
                  >
                    You’re follower
                  </div>

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
                    <div className="follow-option-item ibmplexsans-semi-bold-rusty-red-16px">
                      Report group
                    </div>
                  </div>
                )} 
              </div>
            </div>
    </>
  ) 
};

export default BackgroundImage;
