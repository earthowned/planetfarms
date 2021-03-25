import React from "react";
import Frame1981 from "../Frame1981";
import "./Frame3464.css";

function Frame3464(props) {
  const { enterprisesEvents, groupsEvents, frame1981Props } = props;

  return (
    <div className="frame-3464">
      <Frame1981>{frame1981Props.children}</Frame1981>
      <div className="frame-19822 border-0-5px-white">
        <div className="s-events ibmplexsans-semi-bold-quarter-spanish-white-16px">{enterprisesEvents}</div>
      </div>
      <div className="frame-19835 border-0-5px-white">
        <div className="s-events ibmplexsans-semi-bold-quarter-spanish-white-16px">{groupsEvents}</div>
      </div>
    </div>
  );
}

export default Frame3464;
