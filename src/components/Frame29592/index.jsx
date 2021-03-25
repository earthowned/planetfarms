import React from "react";
import "./Frame29592.css";

function Frame29592(props) {
  const { frame2801, name, spanText, spanText2, spanText3, text1190 } = props;

  return (
    <div className="frame-29594">
      <div className="frame-28126">
        <div className="frame-280112" style={{ backgroundImage: `url(${frame2801})` }}></div>
        <div className="frame-28029">
          <div className="name16 valign-text-middle">{name}</div>
          <p className="text-1189">
            <span className="span020">{spanText}</span>
            <span className="span120">{spanText2}</span>
            <span className="span210">{spanText3}</span>
          </p>
          <p className="text-1190 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1190}</p>
        </div>
      </div>
    </div>
  );
}

export default Frame29592;
