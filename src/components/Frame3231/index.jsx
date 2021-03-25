import React from "react";
import "./Frame3231.css";

function Frame3231(props) {
  const { rectangle117, x01Introducing, text705, seeLesson, className } = props;

  return (
    <div className={`frame-3231 ${className || ""}`}>
      <img className="rectangle-117" src={rectangle117} />
      <div className="frame-3258">
        <div className="x01-introducing valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          {x01Introducing}
        </div>
        <p className="text-705 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text705}</p>
        <div className="see-lesson">{seeLesson}</div>
      </div>
    </div>
  );
}

export default Frame3231;
