import React from "react";
import "./Filetextoutline.css";

function Filetextoutline(props) {
  const { vector, vector2, vector3, vector4, className } = props;

  return (
    <div className={`file-text-outline ${className || ""}`}>
      <div className="layer-214">
        <div className="file-text">
          <img className="vector-54" src={vector} />
          <img className="vector-64" src={vector2} />
          <img className="vector-74" src={vector3} />
          <img className="vector-84" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Filetextoutline;
