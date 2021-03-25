import React from "react";
import Component3 from "../Component3";
import "./Frame3020.css";

function Frame3020(props) {
  const { text700, component3Props, className } = props;

  return (
    <div className={`frame-3020 ${className || ""}`}>
      <Component3 src={component3Props.src} />
      <div className="text-700 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text700}</div>
    </div>
  );
}

export default Frame3020;
