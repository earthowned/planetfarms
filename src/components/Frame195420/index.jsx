import React from "react";
import { Link } from "react-router-dom";
import Emailoutline from "../Emailoutline";
import Belloutline from "../Belloutline";
import Personoutline1 from "../Personoutline1";
import "./Frame195420.css";

function Frame195420(props) {
  const { ragrariansI1168229, frame1951, text986, emailoutlineProps, belloutlineProps, personoutline1Props } = props;

  return (
    <div className="frame-195421">
      <div className="ragrarians-i1168229 ibmplexsans-semi-bold-quarter-spanish-white-24px">{ragrariansI1168229}</div>
      <div className="frame-197320">
        <Emailoutline layer22Props={emailoutlineProps.layer22Props} />
        <Belloutline vector={belloutlineProps.vector} vector2={belloutlineProps.vector2} />
        <Link to="/10-4-my-personals-1">
          <div className="frame-195121">
            <Link to="/10-4-my-personals-1" onClick={window.event.stopPropagation()}>
              <img className="frame-1951-119" src={frame1951} />
            </Link>
          </div>
        </Link>
      </div>
      <Link to="/10-1-my-dashboard">
        <div className="frame-284821">
          <Personoutline1
            vector={personoutline1Props.vector}
            vector2={personoutline1Props.vector2}
            vector3={personoutline1Props.vector3}
          />
          <div className="text-986 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text986}</div>
        </div>
      </Link>
    </div>
  );
}

export default Frame195420;
