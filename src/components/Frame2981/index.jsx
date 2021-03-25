import React from "react";
import "./Frame2981.css";

function Frame2981(props) {
  const { allEnterprises, yourEnterprises } = props;

  return (
    <div className="frame-29813">
      <div className="frame-19838 border-1px-quarter-spanish-white">
        <div className="x-enterprises2 ibmplexsans-semi-bold-shark-16px">{allEnterprises}</div>
      </div>
      <div className="frame-19843 border-class-2">
        <div className="x-enterprises ibmplexsans-semi-bold-quarter-spanish-white-16px">{yourEnterprises}</div>
      </div>
    </div>
  );
}

export default Frame2981;
