import React from "react";
import "./Paperplaneoutline1.css";

function Paperplaneoutline1(props) {
  const { vector, vector2 } = props;

  return (
    <div className="paper-plane-outline-1">
      <div className="layer-225">
        <div className="paper-plane">
          <img className="vector-155" src={vector} />
          <img className="vector-165" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Paperplaneoutline1;
