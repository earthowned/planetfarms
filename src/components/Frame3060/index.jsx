import React from "react";
import Frame1971 from "../Frame1971";
import "./Frame3060.css";

function Frame3060(props) {
  const { frame3060, text244, frame1971Props, className } = props;

  return (
    <div className={`frame-3060-2 border-class-1 ${className || ""}`}>
      <img className="frame-3060-3" src={frame3060} />
      <Frame1971 src={frame1971Props.src} />
      <p className="text-244 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text244}</p>
    </div>
  );
}

export default Frame3060;
