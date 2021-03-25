import React from "react";
import { Link } from "react-router-dom";
import "./Frame45.css";

function Frame45(props) {
  const { children } = props;

  return (
    <Link to="/10-3-my-library">
      <div className="frame-410 border-0-5px-quarter-spanish-white">
        <div className="default-i905517588 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default Frame45;
