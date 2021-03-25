import React from "react";
import { Link } from "react-router-dom";
import "./Frame416.css";

function Frame416(props) {
  const { children } = props;

  return (
    <Link to="/5-1-all-groups">
      <div className="frame-423 border-0-5px-quarter-spanish-white">
        <div className="default-i905516688 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default Frame416;
