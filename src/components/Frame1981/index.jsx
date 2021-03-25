import React from "react";
import "./Frame1981.css";

function Frame1981(props) {
  const { children } = props;

  return (
    <div className="frame-19813 border-1px-quarter-spanish-white">
      <div className="my-events ibmplexsans-semi-bold-shark-16px">{children}</div>
    </div>
  );
}

export default Frame1981;
