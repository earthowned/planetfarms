import React from "react";
import { Link } from "react-router-dom";
import Layer22 from "../Layer22";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame19546.css";

function Frame19546(props) {
  const { ragrariansI1166390, frame1951, text133, layer22Props, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-19546">
      <div className="ragrarians-i1166390 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1166390}</div>
      <div className="frame-19736">
        <Link to="/14-1-messages-popup">
          <div className="email-outline5">
            <Layer22 emailProps={layer22Props.emailProps} />
          </div>
        </Link>
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-19516">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-15" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-28487">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-133 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text133}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame19546;
