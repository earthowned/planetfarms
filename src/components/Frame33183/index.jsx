import React from "react";
import Cameraoutline from "../Cameraoutline";
import "./Frame33183.css";

function Frame33183(props) {
  const { text117, cameraoutlineProps } = props;

  return (
    <div className="frame-33183">
      <Cameraoutline
        vector={cameraoutlineProps.vector}
        vector2={cameraoutlineProps.vector2}
        vector3={cameraoutlineProps.vector3}
      />
      <div className="text-117 valign-text-middle">{text117}</div>
    </div>
  );
}

export default Frame33183;
