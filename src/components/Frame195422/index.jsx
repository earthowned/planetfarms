import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195422.css";

function Frame195422(props) {
  const { ragrariansI2892821, frame1951, text1214, emailProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195423">
      <div className="ragrarians-i2892821 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI2892821}</div>
      <div className="frame-197322">
        <div className="email-outline7">
          <Link to="/14-1-messages-popup">
            <div className="layer-236">
              <Email vector={emailProps.vector} vector2={emailProps.vector2} />
            </div>
          </Link>
        </div>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195123">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-121" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284823">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-1214 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text1214}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195422;
