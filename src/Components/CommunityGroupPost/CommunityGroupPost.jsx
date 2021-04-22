import React from "react";

const CommunityGroupPost = ({ title, timestamps, content, postImage }) => {
  return (
    <div className="user-post-card border-1px-onyx">
      <div className="group-user-post-container">
        <div className="group-user-post">
          <div className="group-user-avatar"></div>
          <div className="group-user-post-header">
            <div className="group-user-post-title valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
              {title}
            </div>
            <p className="group-user-post-timestamps valign-text-middle ibmplexsans-regular-normal-monsoon-16px">
              {timestamps}
            </p>
          </div>
        </div>
        <p className="group-user-post-text valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
          {content}
        </p>
        {postImage && (
          <div
            className="post-image"
            style={{ backgroundImage: `url(${postImage})` }}
          ></div>
        )}

        <div className="group-flex-row-5">
          <div className="comment-container">
            <div className={`message-square-outline-1-1 }`}>
              <div className="overlap-group-7">
                <img
                  className="message-outline-icon"
                  src="/img/message-square-outline.svg"
                />
              </div>
            </div>
            <div className="comment-number valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              17 replies
            </div>
          </div>
          <div className="frame-2805">
            <div className={`eye-outline-1 }`}>
              <div className="overlap-group-8">
                <img className="eye-outlined-icon" src="/img/eye-outline.svg" />
              </div>
            </div>
            <div className="comment-number valign-text-middle ibmplexsans-regular-normal-monsoon-16px">
              387 views
            </div>
          </div>
        </div>
        <div className="comment-boderline"></div>
      </div>
      <div className="frame-2813">
        <div className="most-newest valign-text-middle ibmplexsans-semi-bold-caribbean-green-16px">
          Most newest
        </div>
        <div className={`chevron-right-outline-1-1}`}>
          <div className="overlap-group-5">
            <img
              className="right-arrow-icon"
              src="/img/chevron-right-outline.svg"
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      <div className="user-post-cmnt-1">
        <div className="comment-details-container">
          <div className="user-cmnt-avatar"></div>
          <div className="cmnt-details">
            <div className="cmnt-user-name valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              John Billboy
            </div>
            <p className="cmnt-user-text valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
              Yeah, man! I really got you! We live in Texas for right now and
              could make a call with and help maybe!
            </p>

            <p className="cmnt-user-timestamps valign-text-middle ibmplexsans-regular-normal-monsoon-16px">
              November 1 at 05:55 PM
            </p>
          </div>
        </div>
        <div className="user-cmnt-boderline"></div>
      </div>
      <div className="user-post-cmnt-1">
        <div className="comment-details-container">
          <div className="user-cmnt-avatar"></div>
          <div className="cmnt-details">
            <div className="cmnt-user-name valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              John Billboy
            </div>
            <p className="cmnt-user-text valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
              Yeah, man! I really got you! We live in Texas for right now and
              could make a call with and help maybe!
            </p>
            <p className="cmnt-user-timestamps valign-text-middle ibmplexsans-regular-normal-monsoon-16px">
              November 1 at 05:55 PM
            </p>
          </div>
        </div>
        <div className="user-cmnt-boderline"></div>
      </div>

      <div className="cmt">
        <div className="frame-2815"></div>
        <div className="comment-box-container  border-1px-onyx">
          <input
            type="text"
            className="text-12 valign-text-middle ibmplexsans-regular-normal-monsoon-16px"
            placeholder="Leave your comment here..."
          />
          <div className="paper-plane-outline-1-1">
            <img className="vector-32" src="/img/send-msg-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGroupPost;
