import React from "react";
import "./Frame92.css";

function Frame92(props) {
  const { vector, subtract, rememberMe, className } = props;

  return (
    <div className={`frame-922 ${className || ""}`}>
      <div className="frame-92-12">
        <div className="checkmark-square-2-outline-12">
          <div className="layer-25">
            <div className="checkmark-square-2">
              <img className="vector3" src={vector} />
              <img className="subtract2" src={subtract} />
            </div>
          </div>
        </div>
      </div>
      <div className="remember-me2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{rememberMe}</div>
    </div>
  );
}

export default Frame92;
