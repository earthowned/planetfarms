import React from "react";
import Videooutline from "../Videooutline";
import "./Frame3318.css";

function Frame3318(props) {
  const { text116, videooutlineProps } = props;

  return (
    <div className="frame-3318">
      <Videooutline vector={videooutlineProps.vector} vector2={videooutlineProps.vector2} />
      <div className="text-116 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text116}</div>
    </div>
  );
}

export default Frame3318;
