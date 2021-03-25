import React from "react";
import "./Frame29842.css";

function Frame29842(props) {
  const { vector, vector2, finances } = props;

  return (
    <div className="frame-29846">
      <div className="dollar-sign-1">
        <img className="vector-86" src={vector} />
        <img className="vector-96" src={vector2} />
      </div>
      <div className="finances ibmplexsans-semi-bold-quarter-spanish-white-16px">{finances}</div>
    </div>
  );
}

export default Frame29842;
