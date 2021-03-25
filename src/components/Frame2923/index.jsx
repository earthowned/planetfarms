import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Frame2923.css";

function Frame2923(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="frame-29232">
      <IconsArrowsLeft
        vectorStroke={iconsArrowsLeftProps.vectorStroke}
        vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
      />
      <div className="place4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
    </div>
  );
}

export default Frame2923;
