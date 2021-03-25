import React from "react";
import { Link } from "react-router-dom";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn12.css";

function Backbtn12(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn12">
      <Link to="/10-1-my-dashboard">
        <div className="frame-292311">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place15 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </Link>
    </div>
  );
}

export default Backbtn12;
