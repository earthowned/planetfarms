import React from 'react'

const CommunityViewPost = () => {
   
    return (
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
              <div>
                <div className="community-group-follow-btn border-0-5px-quarter-spanish-white">
                  <div
                    className="youre-follower ibmplexsans-semi-bold-quarter-spanish-white-16px"
                   
                  >
                    Edit groups
                  </div>

                  <img src="/img/chevron-right-outline.svg" alt="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="group-boderline"></div>
          </div>
    )
}

export default CommunityViewPost
