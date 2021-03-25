import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195413.css";

function Frame195413(props) {
  const { ragrariansI169223, frame1951, text603, emailoutlineProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195414">
      <div className="ragrarians-i169223 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI169223}</div>
      <div className="frame-197313">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195114">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-112" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284814">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-603 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text603}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195413;
