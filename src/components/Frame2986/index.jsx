import React from "react";
import "./Frame2986.css";

function Frame2986(props) {
  const { vector, vector2, vector3, vector4, vector5, vector6, className } = props;

  return (
    <div className={`frame-2986 ${className || ""}`}>
      <div className="download-outline-1">
        <div className="layer-230">
          <div className="download">
            <img className="vector-58" src={vector} />
            <img className="vector-68" src={vector2} />
            <img className="vector-78" src={vector3} />
            <img className="vector-87" src={vector4} />
            <img className="vector-97" src={vector5} />
            <img className="vector-107" src={vector6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame2986;
