import React from "react";
import "./Frame2959.css";

function Frame2959(props) {
  const { frame2801, name, spanText, spanText2, spanText3, text1019 } = props;

  return (
    <div className="frame-29592">
      <div className="frame-28123">
        <div className="frame-28016" style={{ backgroundImage: `url(${frame2801})` }}></div>
        <div className="frame-28025">
          <div className="name13 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
          <p className="text-1018">
            <span className="span018">{spanText}</span>
            <span className="span118">{spanText2}</span>
            <span className="span29">{spanText3}</span>
          </p>
          <p className="text-1019 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1019}</p>
        </div>
      </div>
    </div>
  );
}

export default Frame2959;
