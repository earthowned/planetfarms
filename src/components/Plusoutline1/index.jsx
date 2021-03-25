import React from "react";
import "./Plusoutline1.css";

function Plusoutline1(props) {
  const { vector, vector2 } = props;

  return (
    <div className="plus-outline-1">
      <div className="layer-229">
        <div className="plus">
          <img className="vector-217" src={vector} />
          <img className="vector-310" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Plusoutline1;
