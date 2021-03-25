import React from "react";
import { Link } from "react-router-dom";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn16.css";

function Backbtn16(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn16">
      <Link to="/5-1-all-groups">
        <div className="frame-292315">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place20 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </Link>
    </div>
  );
}

export default Backbtn16;
