import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame19543.css";

function Frame19543(props) {
  const { ragrariansI1161397, frame1951, text80, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-19543">
      <div className="ragrarians-i1161397 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1161397}</div>
      <div className="frame-19733">
        <Link to="/14-1-messages-popup">
          <div className="email-outline4">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-19513">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-13" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-28484">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-80 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text80}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame19543;
