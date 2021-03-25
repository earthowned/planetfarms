import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195411.css";

function Frame195411(props) {
  const { ragrariansI128537, frame1951, text429, emailoutlineProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195412">
      <div className="ragrarians-i128537 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI128537}</div>
      <div className="frame-197311">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195112">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-110" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284812">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-429 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text429}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195411;
