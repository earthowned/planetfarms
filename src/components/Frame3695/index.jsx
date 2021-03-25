import React from "react";
import Component2 from "../Component2";
import "./Frame3695.css";

function Frame3695(props) {
  const { processing, component2Props, className } = props;

  return (
    <div className={`frame-3695 ${className || ""}`}>
      <Component2 checkmarksquare2outline2Props={component2Props.checkmarksquare2outline2Props} />
      <div className="processing ibmplexsans-semi-bold-quarter-spanish-white-16px">{processing}</div>
    </div>
  );
}

export default Frame3695;
