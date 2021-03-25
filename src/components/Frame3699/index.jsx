import React from "react";
import Component22 from "../Component22";
import "./Frame3699.css";

function Frame3699(props) {
  const { mentors, component22Props, className } = props;

  return (
    <div className={`frame-3699 ${className || ""}`}>
      <Component22
        vector={component22Props.vector}
        subtract={component22Props.subtract}
        vector2={component22Props.vector2}
      />
      <div className="mentors ibmplexsans-semi-bold-quarter-spanish-white-16px">{mentors}</div>
    </div>
  );
}

export default Frame3699;
