import React from "react";
import { Link } from "react-router-dom";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn11.css";

function Backbtn11(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn11">
      <Link to="/10-1-my-dashboard">
        <div className="frame-292310">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place14 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </Link>
    </div>
  );
}

export default Backbtn11;
