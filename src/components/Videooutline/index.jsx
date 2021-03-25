import React from "react";
import "./Videooutline.css";

function Videooutline(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`video-outline ${className || ""}`}>
      <div className="layer-212">
        <div className="video">
          <img className="vector8" src={vector} />
          <img className="vector-117" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Videooutline;
