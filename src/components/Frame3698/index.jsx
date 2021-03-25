import React from "react";
import Component22 from "../Component22";
import "./Frame3698.css";

function Frame3698(props) {
  const { marketers, component22Props, className } = props;

  return (
    <div className={`frame-3698 ${className || ""}`}>
      <Component22
        vector={component22Props.vector}
        subtract={component22Props.subtract}
        vector2={component22Props.vector2}
      />
      <div className="marketers ibmplexsans-semi-bold-quarter-spanish-white-16px">{marketers}</div>
    </div>
  );
}

export default Frame3698;
