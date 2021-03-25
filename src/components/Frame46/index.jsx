import React from "react";
import { Link } from "react-router-dom";
import "./Frame46.css";

function Frame46(props) {
  const { children } = props;

  return (
    <Link to="/10-5-my-courses">
      <div className="frame-411 border-0-5px-quarter-spanish-white">
        <div className="default-i905517608 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default Frame46;
