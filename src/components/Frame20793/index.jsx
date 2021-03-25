import React from "react";
import "./Frame20793.css";

function Frame20793(props) {
  const { editPost, deletePost, className } = props;

  return (
    <div className={`frame-20794 ${className || ""}`}>
      <div className="frame-20833">
        <div className="frame-20805">
          <div className="x-post inter-medium-quarter-spanish-white-16px">{editPost}</div>
        </div>
      </div>
      <div className="frame-20823">
        <div className="frame-2080-13">
          <div className="x-post inter-medium-quarter-spanish-white-16px">{deletePost}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame20793;
