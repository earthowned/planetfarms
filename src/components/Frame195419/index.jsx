import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195419.css";

function Frame195419(props) {
  const { ragrariansI1166412, frame1951, text911, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195420">
      <div className="ragrarians-i1166412 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1166412}</div>
      <div className="frame-197319">
        <Link to="/14-1-messages-popup">
          <div className="email-outline6">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195120">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-118" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284820">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-911 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text911}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195419;
