import React from "react";
import "./Frame3423.css";

function Frame3423(props) {
  const { joinMessenger, text356, text357, frame2904, frame3392, frame3393, text358 } = props;

  return (
    <div className="frame-3423">
      <div className="frame-3429">
        <div className="frame-3421">
          <div className="join-messenger valign-text-middle ibmplexsans-semi-bold-shark-16px">{joinMessenger}</div>
        </div>
        <div className="rectangle-8754"></div>
        <div className="frame-3435">
          <p className="text-356 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text356}</p>
          <div className="text-357 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text357}</div>
        </div>
      </div>
      <div className="frame-3425">
        <div className="frame-3424">
          <div className="frame-29042" style={{ backgroundImage: `url(${frame2904})` }}></div>
          <div className="frame-3392 border-2px-shark-2" style={{ backgroundImage: `url(${frame3392})` }}></div>
          <div className="frame-3393 border-2px-shark-2" style={{ backgroundImage: `url(${frame3393})` }}></div>
        </div>
        <p className="text-358 valign-text-middle">{text358}</p>
      </div>
    </div>
  );
}

export default Frame3423;
