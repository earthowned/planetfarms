import React from "react";
import "./Frame1971.css";

function Frame1971(props) {
  const { src, className } = props;

  return (
    <div className={`frame-1971 ${className || ""}`}>
      <div className="play-button-1">
        <div className="group4">
          <div className="group-1" style={{ backgroundImage: `url(${src})` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Frame1971;
