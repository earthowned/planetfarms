import React from "react";
import "./Belloutline.css";

function Belloutline(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`bell-outline ${className || ""}`}>
      <div className="layer-29">
        <div className="bell">
          <img className="vector-222" src={vector} />
          <img className="vector-232" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Belloutline;
