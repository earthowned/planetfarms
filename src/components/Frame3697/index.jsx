import React from "react";
import Component2 from "../Component2";
import "./Frame3697.css";

function Frame3697(props) {
  const { surname, component2Props, className } = props;

  return (
    <div className={`frame-3697 ${className || ""}`}>
      <Component2 checkmarksquare2outline2Props={component2Props.checkmarksquare2outline2Props} />
      <div className="surname2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{surname}</div>
    </div>
  );
}

export default Frame3697;
