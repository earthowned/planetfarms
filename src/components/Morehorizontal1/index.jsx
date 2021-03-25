import React from "react";
import "./Morehorizontal1.css";

function Morehorizontal1(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="more-horizontal-1">
      <img className="vector24" src={vector} />
      <img className="vector-141" src={vector2} />
      <img className="vector-225" src={vector3} />
    </div>
  );
}

export default Morehorizontal1;
