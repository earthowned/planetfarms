import React from "react";
import Paperplaneoutline1 from "../Paperplaneoutline1";
import "./Frame29612.css";

function Frame29612(props) {
  const { frame2815, text382, paperplaneoutline1Props, className } = props;

  return (
    <div className={`frame-29613 ${className || ""}`}>
      <div className="frame-28152" style={{ backgroundImage: `url(${frame2815})` }}></div>
      <div className="frame-29602 border-1px-onyx">
        <div className="text-382 valign-text-middle ibmplexsans-normal-monsoon-16px">{text382}</div>
        <Paperplaneoutline1 vector={paperplaneoutline1Props.vector} vector2={paperplaneoutline1Props.vector2} />
      </div>
    </div>
  );
}

export default Frame29612;
