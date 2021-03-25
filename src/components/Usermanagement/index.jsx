import React from "react";
import "./Usermanagement.css";

function Usermanagement(props) {
  const { vector, vector2, vector3, vector4, vector5, vector6, className } = props;

  return (
    <div className={`user-management ${className || ""}`}>
      <div className="group-437">
        <img className="vector-103" src={vector} />
        <img className="vector-115" src={vector2} />
        <img className="vector-123" src={vector3} />
        <img className="vector-133" src={vector4} />
        <img className="vector-143" src={vector5} />
        <img className="vector-153" src={vector6} />
      </div>
    </div>
  );
}

export default Usermanagement;
