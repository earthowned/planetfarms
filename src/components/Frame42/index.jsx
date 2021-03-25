import React from "react";
import { Link } from "react-router-dom";
import "./Frame42.css";

function Frame42(props) {
  const { children } = props;

  return (
    <Link to="/3-community-page-news">
      <div className="frame-46 border-0-5px-quarter-spanish-white">
        <div className="default-i905507538 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default Frame42;
