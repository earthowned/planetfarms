import React from "react";
import "./Eye.css";

function Eye(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="eye">
      <img className="vector5" src={vector} />
      <img className="vector-113" src={vector2} />
      <img className="vector-23" src={vector3} />
    </div>
  );
}

export default Eye;
