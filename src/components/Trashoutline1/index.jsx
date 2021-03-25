import React from "react";
import "./Trashoutline1.css";

function Trashoutline1(props) {
  const { vector, vector2 } = props;

  return (
    <div className="trash-outline-1">
      <div className="layer-233">
        <div className="trash">
          <img className="vector-223" src={vector} />
          <img className="vector-313" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Trashoutline1;
