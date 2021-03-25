import React from "react";
import { Link } from "react-router-dom";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn17.css";

function Backbtn17(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn17">
      <Link to="/3-community-page-news">
        <div className="frame-292316">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place21 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </Link>
    </div>
  );
}

export default Backbtn17;
