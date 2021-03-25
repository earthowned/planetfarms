import React from "react";
import Paperplaneoutline1 from "../Paperplaneoutline1";
import "./Frame2961.css";

function Frame2961(props) {
  const { frame2815, text375, paperplaneoutline1Props, className } = props;

  return (
    <div className={`frame-2961 ${className || ""}`}>
      <div className="frame-2815" style={{ backgroundImage: `url(${frame2815})` }}></div>
      <div className="frame-2960 border-1px-monsoon">
        <p className="text-375 valign-text-middle inter-medium-quarter-spanish-white-16px">{text375}</p>
        <Paperplaneoutline1 vector={paperplaneoutline1Props.vector} vector2={paperplaneoutline1Props.vector2} />
      </div>
    </div>
  );
}

export default Frame2961;
