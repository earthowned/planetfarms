import React from "react";
import "./Frame3007.css";

function Frame3007(props) {
  const { src, className } = props;

  return (
    <div className={`frame-3007-1 border-1px-onyx ${className || ""}`}>
      <img className="frame-29262" src={src} />
    </div>
  );
}

export default Frame3007;
