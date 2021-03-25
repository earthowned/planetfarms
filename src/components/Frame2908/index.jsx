import React from "react";
import Component12 from "../Component12";
import "./Frame2908.css";

function Frame2908(props) {
  const { frame2904, name, component12Props, className } = props;

  return (
    <div className={`frame-2908 ${className || ""}`}>
      <div className="frame-29044" style={{ backgroundImage: `url(${frame2904})` }}></div>
      <div className="name10 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
      <div className="rectangle-8732"></div>
      <Component12 vector={component12Props.vector} vector2={component12Props.vector2} />
    </div>
  );
}

export default Frame2908;
