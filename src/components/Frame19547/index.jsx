import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame19547.css";

function Frame19547(props) {
  const { ragrariansI2073184, frame1951, text160, emailoutlineProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-19547">
      <div className="ragrarians-i2073184 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI2073184}</div>
      <div className="frame-19737">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/104-my-personals">
          <div className="frame-19517">
            <Link to="/104-my-personals" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-16" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-28488">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-160 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text160}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame19547;
