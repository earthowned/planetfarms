import React from "react";
import "./Cameraoutline.css";

function Cameraoutline(props) {
  const { vector, vector2, vector3, className } = props;

  return (
    <div className={`camera-outline ${className || ""}`}>
      <div className="layer-213">
        <div className="camera">
          <img className="vector-210" src={vector} />
          <img className="vector-35" src={vector2} />
          <img className="vector-45" src={vector3} />
        </div>
      </div>
    </div>
  );
}

export default Cameraoutline;
