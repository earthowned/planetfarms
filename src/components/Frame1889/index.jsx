import React from "react";
import "./Frame1889.css";

function Frame1889(props) {
  const { src, className } = props;

  return (
    <div className={`frame-1889 ${className || ""}`}>
      <img className="ellipse-15" src={src} />
    </div>
  );
}

export default Frame1889;
