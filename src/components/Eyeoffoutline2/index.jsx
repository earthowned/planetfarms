import React from "react";
import "./Eyeoffoutline2.css";

function Eyeoffoutline2(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="eye-off-outline-2">
      <div className="overlap-group1">
        <img className="vector-18" src={vector} />
        <img className="vector-19" src={vector2} />
        <img className="vector-20" src={vector3} />
        <img className="vector-21" src={vector4} />
      </div>
    </div>
  );
}

export default Eyeoffoutline2;
