import React from "react";
import "./Frame3501.css";

function Frame3501(props) {
  const { farming, text81 } = props;

  return (
    <div className="frame-3501">
      <div className="farming2">{farming}</div>
      <div className="text-81 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text81}</div>
    </div>
  );
}

export default Frame3501;
