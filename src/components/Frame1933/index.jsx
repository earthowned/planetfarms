import React from "react";
import Layer2 from "../Layer2";
import "./Frame1933.css";

function Frame1933(props) {
  const { username, mikhail, layer2Props, className } = props;

  return (
    <div className={`frame-1933 ${className || ""}`}>
      <Layer2 personProps={layer2Props.personProps} />
      <div className="frame-9">
        <div className="username2">{username}</div>
        <div className="mikhail ibmplexsans-normal-quarter-spanish-white-16px">{mikhail}</div>
      </div>
    </div>
  );
}

export default Frame1933;
