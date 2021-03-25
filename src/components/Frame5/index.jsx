import React from "react";
import "./Frame5.css";

function Frame5(props) {
  const { children } = props;

  return (
    <div className="frame-5 border-0-5px-quarter-spanish-white">
      <div className="default-i905512678 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}

export default Frame5;
