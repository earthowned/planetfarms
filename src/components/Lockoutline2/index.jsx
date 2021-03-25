import React from "react";
import "./Lockoutline2.css";

function Lockoutline2(props) {
  const { vector, vector2, vector3, className } = props;

  return (
    <div className={`lock-outline2 ${className || ""}`}>
      <div className="layer-23">
        <div className="lock">
          <img className="vector-92" src={vector} />
          <img className="vector-102" src={vector2} />
          <img className="vector-112" src={vector3} />
        </div>
      </div>
    </div>
  );
}

export default Lockoutline2;
