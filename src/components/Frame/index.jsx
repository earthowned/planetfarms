import React from "react";
import "./Frame.css";

function Frame(props) {
  const { group, vector, vector2, vector3, vector4, vector5 } = props;

  return (
    <div className="frame4">
      <div className="group3" style={{ backgroundImage: `url(${group})` }}></div>
      <img className="vector7" src={vector} />
      <img className="vector-116" src={vector2} />
      <img className="vector-29" src={vector3} />
      <img className="vector-34" src={vector4} />
      <img className="vector-44" src={vector5} />
    </div>
  );
}

export default Frame;
