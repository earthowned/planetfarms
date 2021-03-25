import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195425.css";

function Frame195425(props) {
  const { ragrariansI2854952, frame1951, text1393, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195426">
      <div className="ragrarians-i2854952 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI2854952}</div>
      <div className="frame-197325">
        <Link to="/14-1-messages-popup">
          <div className="email-outline9">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195126">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-124" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284826">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-1393 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text1393}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195425;
