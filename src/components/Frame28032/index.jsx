import React from "react";
import "./Frame28032.css";

function Frame28032(props) {
  const { frame2801, natureLovers, text1011 } = props;

  return (
    <div className="frame-28032">
      <div className="frame-28013" style={{ backgroundImage: `url(${frame2801})` }}></div>
      <div className="frame-28023">
        <div className="nature-lovers valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
          {natureLovers}
        </div>
        <p className="text-1011 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1011}</p>
      </div>
    </div>
  );
}

export default Frame28032;
