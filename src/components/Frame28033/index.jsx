import React from "react";
import "./Frame28033.css";

function Frame28033(props) {
  const { frame2801, thinkLikeAFarmer, text1079 } = props;

  return (
    <div className="frame-28033">
      <div className="frame-28018" style={{ backgroundImage: `url(${frame2801})` }}></div>
      <div className="frame-28026">
        <div className="think-like-a-farmer3 valign-text-middle">{thinkLikeAFarmer}</div>
        <p className="text-1079 valign-text-middle inter-medium-monsoon-16px">{text1079}</p>
      </div>
    </div>
  );
}

export default Frame28033;
