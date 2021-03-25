import React from "react";
import Component22 from "../Component22";
import "./Frame3694.css";

function Frame3694(props) {
  const { place, component22Props, className } = props;

  return (
    <div className={`frame-3694 ${className || ""}`}>
      <Component22
        vector={component22Props.vector}
        subtract={component22Props.subtract}
        vector2={component22Props.vector2}
      />
      <div className="place10 ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
    </div>
  );
}

export default Frame3694;
