import React from "react";
import "./Frame27972.css";

function Frame27972(props) {
  const { vector, vector2, vector3, reports } = props;

  return (
    <div className="frame-27972 border-0-5px-white">
      <div className="frame-29852">
        <div className="pie-chart-outline">
          <div className="layer-228">
            <div className="pie-chart">
              <img className="vector15" src={vector} />
              <img className="vector-128" src={vector2} />
              <img className="vector-216" src={vector3} />
            </div>
          </div>
        </div>
        <div className="reports ibmplexsans-semi-bold-quarter-spanish-white-16px">{reports}</div>
      </div>
    </div>
  );
}

export default Frame27972;
