import React from "react";
import "./IconsCamera.css";

function IconsCamera(props) {
  const { src } = props;

  return (
    <div className="icons-camera">
      <img className="union6" src={src} />
    </div>
  );
}

export default IconsCamera;
