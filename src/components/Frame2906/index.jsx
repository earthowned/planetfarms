import React from "react";
import Component1 from "../Component1";
import "./Frame2906.css";

function Frame2906(props) {
  const { frame2904, name, component1Props, className } = props;

  return (
    <div className={`frame-2906 ${className || ""}`}>
      <div className="frame-29043" style={{ backgroundImage: `url(${frame2904})` }}></div>
      <div className="name9 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
      <div className="rectangle-873"></div>
      <Component1 vector={component1Props.vector} vector2={component1Props.vector2} vector3={component1Props.vector3} />
    </div>
  );
}

export default Frame2906;
