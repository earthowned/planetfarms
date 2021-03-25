import React from "react";
import Frame2792 from "../Frame2792";
import "./Frame2796.css";

function Frame2796(props) {
  const { dontRecommend, frame2792Props } = props;

  return (
    <div className="frame-27962">
      <div className="frame-27952 border-0-5px-quarter-spanish-white">
        <div className="dont-recommend2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{dontRecommend}</div>
      </div>
      <Frame2792>{frame2792Props.children}</Frame2792>
    </div>
  );
}

export default Frame2796;
