import React from "react";
import { Link } from "react-router-dom";
import Frame20232 from "../Frame20232";
import Frame54 from "../Frame54";
import "./Frame2902.css";

function Frame2902(props) {
  const { text155, text156, frame20232Props, frame54Props } = props;

  return (
    <div className="frame-2902">
      <div className="text-155 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text155}</div>
      <Frame20232
        chevronrightoutline2Props={frame20232Props.chevronrightoutline2Props}
        chevronrightoutline22Props={frame20232Props.chevronrightoutline22Props}
      />
      <Link to="/4-4-calendar-add-new-event">
        <div className="frame-1952">
          <div className="text-156 valign-text-middle ibmplexsans-semi-bold-shark-16px">{text156}</div>
        </div>
      </Link>
      <Frame54>{frame54Props.children}</Frame54>
    </div>
  );
}

export default Frame2902;
