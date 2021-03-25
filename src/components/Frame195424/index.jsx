import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195424.css";

function Frame195424(props) {
  const { ragrariansI2852566, frame1951, text1281, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195425">
      <div className="ragrarians-i2852566 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI2852566}</div>
      <div className="frame-197324">
        <Link to="/14-1-messages-popup">
          <div className="email-outline8">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195125">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-123" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284825">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-1281 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text1281}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195424;
