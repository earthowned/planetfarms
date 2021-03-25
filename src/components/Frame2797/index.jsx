import React from "react";
import "./Frame2797.css";

function Frame2797(props) {
  const { surname, text355, dueToTheAdvantage } = props;

  return (
    <div className="frame-2797">
      <div className="surname valign-text-middle">{surname}</div>
      <p className="text-355 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text355}</p>
      <div className="frame-24882">
        <div className="due-to-the-advantage2 valign-text-middle ibmplexsans-normal-monsoon-16px">
          {dueToTheAdvantage}
        </div>
      </div>
    </div>
  );
}

export default Frame2797;
