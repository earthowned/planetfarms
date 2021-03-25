import React from "react";
import "./Frame2803.css";

function Frame2803(props) {
  const { frame2801, thinkLikeAFarmer, text373 } = props;

  return (
    <div className="frame-2803">
      <div className="frame-28012" style={{ backgroundImage: `url(${frame2801})` }}></div>
      <div className="frame-28022">
        <div className="think-like-a-farmer2 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          {thinkLikeAFarmer}
        </div>
        <p className="text-373 valign-text-middle ibmplexsans-normal-monsoon-16px">{text373}</p>
      </div>
    </div>
  );
}

export default Frame2803;
