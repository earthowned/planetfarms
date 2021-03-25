import React from "react";
import "./Frame2985.css";

function Frame2985(props) {
  const { vector, vector2, vector3, tasks } = props;

  return (
    <div className="frame-2985">
      <div className="checkmark-square-outline-1">
        <div className="layer-222">
          <div className="checkmark-square">
            <img className="vector-56" src={vector} />
            <img className="vector-66" src={vector2} />
            <img className="vector-76" src={vector3} />
          </div>
        </div>
      </div>
      <div className="tasks ibmplexsans-semi-bold-quarter-spanish-white-16px">{tasks}</div>
    </div>
  );
}

export default Frame2985;
