import React from "react";
import Component2 from "../Component2";
import "./Frame3700.css";

function Frame3700(props) {
  const { accounting, component2Props, className } = props;

  return (
    <div className={`frame-3700 ${className || ""}`}>
      <Component2 checkmarksquare2outline2Props={component2Props.checkmarksquare2outline2Props} />
      <div className="accounting ibmplexsans-semi-bold-quarter-spanish-white-16px">{accounting}</div>
    </div>
  );
}

export default Frame3700;
