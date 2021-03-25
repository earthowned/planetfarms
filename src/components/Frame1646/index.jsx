import React from "react";
import "./Frame1646.css";

function Frame1646(props) {
  const { group, vector, vector2, vector3, vector4, vector5 } = props;

  return (
    <div className="frame-1646">
      <div className="frame2">
        <div className="group" style={{ backgroundImage: `url(${group})` }}></div>
        <img className="vector2" src={vector} />
        <img className="vector-110" src={vector2} />
        <img className="vector-22" src={vector3} />
        <img className="vector-32" src={vector4} />
        <img className="vector-42" src={vector5} />
      </div>
    </div>
  );
}

export default Frame1646;
