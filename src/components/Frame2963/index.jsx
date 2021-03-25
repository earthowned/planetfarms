import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame2963.css";

function Frame2963(props) {
  const { youreFollower, chevronrightoutline1Props } = props;

  return (
    <div className="frame-2963">
      <div className="youre-follower ibmplexsans-semi-bold-quarter-spanish-white-16px">{youreFollower}</div>
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-15"
      />
    </div>
  );
}

export default Frame2963;
