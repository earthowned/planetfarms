import React from "react";
import Videooutline from "../Videooutline";
import Cameraoutline from "../Cameraoutline";
import Filetextoutline from "../Filetextoutline";
import "./Frame19392.css";

function Frame19392(props) {
  const { addVideo, addImage, addText, videooutlineProps, cameraoutlineProps, filetextoutlineProps, className } = props;

  return (
    <div className={`frame-19392 ${className || ""}`}>
      <div className="frame-33172 border-0-5px-white">
        <div className="frame-33185">
          <Videooutline vector={videooutlineProps.vector} vector2={videooutlineProps.vector2} />
          <div className="add- valign-text-middle">{addVideo}</div>
        </div>
      </div>
      <div className="frame-3318-1 border-0-5px-white">
        <div className="frame-3318-2">
          <Cameraoutline
            vector={cameraoutlineProps.vector}
            vector2={cameraoutlineProps.vector2}
            vector3={cameraoutlineProps.vector3}
            className="camera-outline2"
          />
          <div className="add- valign-text-middle">{addImage}</div>
        </div>
      </div>
      <div className="frame-33192 border-0-5px-white">
        <div className="frame-3318-3">
          <Filetextoutline
            vector={filetextoutlineProps.vector}
            vector2={filetextoutlineProps.vector2}
            vector3={filetextoutlineProps.vector3}
            vector4={filetextoutlineProps.vector4}
          />
          <div className="add- valign-text-middle">{addText}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame19392;
