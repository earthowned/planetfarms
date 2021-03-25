import React from "react";
import Frame3231 from "../Frame3231";
import "./Frame3255.css";

function Frame3255(props) {
  const { vector, vector2, vector3, text708, frame3231Props, className } = props;

  return (
    <div className={`frame-3255 ${className || ""}`}>
      <Frame3231
        rectangle117={frame3231Props.rectangle117}
        x01Introducing={frame3231Props.x01Introducing}
        text705={frame3231Props.text705}
        seeLesson={frame3231Props.seeLesson}
        className="frame-3232"
      />
      <div className="frame-3256">
        <div className="lock-outline4">
          <div className="layer-231">
            <div className="lock2">
              <img className="vector20" src={vector} />
              <img className="vector-138" src={vector2} />
              <img className="vector-221" src={vector3} />
            </div>
          </div>
        </div>
        <div className="text-708 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text708}</div>
      </div>
    </div>
  );
}

export default Frame3255;
