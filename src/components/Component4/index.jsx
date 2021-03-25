import React from "react";
import "./Component4.css";

function Component4(props) {
  const { vector, vector2, vector3, vector4, vector5 } = props;

  return (
    <div className="component-4">
      <img className="vector18" src={vector} />
      <img className="vector-131" src={vector2} />
      <div className="group5">
        <img className="vector-219" src={vector3} />
        <img className="vector-311" src={vector4} />
        <img className="vector-49" src={vector5} />
      </div>
    </div>
  );
}

export default Component4;
