import React from "react";
import "./Frame43.css";

function Frame43(props) {
  const { videoTitle, name, className } = props;

  return (
    <div className={`frame-47 ${className || ""}`}>
      <div className="frame-6510 border-1px-onyx">
        <div className="frame-19337"></div>
        <div className="frame-912">
          <div className="video-title">{videoTitle}</div>
          <p className="name ibmplexsans-normal-quarter-spanish-white-16px">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Frame43;
