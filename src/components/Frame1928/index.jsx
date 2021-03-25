import React from "react";
import "./Frame1928.css";

function Frame1928(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="frame-19282">
      <div className="frame3">
        <img className="vector-52" src={vector} />
        <img className="vector-62" src={vector2} />
        <img className="vector-72" src={vector3} />
        <img className="vector-82" src={vector4} />
      </div>
    </div>
  );
}

export default Frame1928;
