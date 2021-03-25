import React from "react";
import Component2 from "../Component2";
import "./Frame3693.css";

function Frame3693(props) {
  const { leaders, component2Props, className } = props;

  return (
    <div className={`frame-3693 ${className || ""}`}>
      <Component2 checkmarksquare2outline2Props={component2Props.checkmarksquare2outline2Props} />
      <div className="leaders ibmplexsans-semi-bold-quarter-spanish-white-16px">{leaders}</div>
    </div>
  );
}

export default Frame3693;
