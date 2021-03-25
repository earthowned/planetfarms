import React from "react";
import { Link } from "react-router-dom";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn8.css";

function Backbtn8(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn8">
      <Link to="/9-1-all-enterprises">
        <div className="frame-29238">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place12 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </Link>
    </div>
  );
}

export default Backbtn8;
