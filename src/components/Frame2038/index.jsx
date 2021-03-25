import React from "react";
import "./Frame2038.css";

function Frame2038(props) {
  const { children } = props;

  return (
    <div className="frame-2038">
      <div className="frame-19882">
        <div className="frame-3678">
          <div className="nov-16 ibmplexsans-semi-bold-shark-16px">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame2038;
