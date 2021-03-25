import React from "react";
import "./Lockoutline.css";

function Lockoutline(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="lock-outline">
      <div className="overlap-group2">
        <img className="vector-15" src={vector} />
        <img className="vector-16" src={vector2} />
        <img className="vector-17" src={vector3} />
      </div>
    </div>
  );
}

export default Lockoutline;
