import React from "react";
import "./IconsArrowsLeft.css";

function IconsArrowsLeft(props) {
  const { vectorStroke, vectorStroke2 } = props;

  return (
    <div className="icons-arrows-left">
      <img className="vector-stroke" src={vectorStroke} />
      <img className="vector-stroke-1" src={vectorStroke2} />
    </div>
  );
}

export default IconsArrowsLeft;
