import React from "react";
import Frame1971 from "../Frame1971";
import "./Frame30402.css";

function Frame30402(props) {
  const { frame3040, text738, frame1971Props, className } = props;

  return (
    <div className={`frame-3040-2 border-1px-onyx ${className || ""}`}>
      <img className="frame-3040-3" src={frame3040} />
      <p className="text-738 valign-text-middle inter-medium-quarter-spanish-white-16px">{text738}</p>
      <div className="frame-32394"></div>
      <Frame1971 src={frame1971Props.src} className="frame-19712" />
    </div>
  );
}

export default Frame30402;
