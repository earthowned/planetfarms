import React from "react";
import { Link } from "react-router-dom";
import Frame20232 from "../Frame20232";
import Frame54 from "../Frame54";
import "./Frame29024.css";

function Frame29024(props) {
  const { text1008, text1009, frame20232Props, frame54Props } = props;

  return (
    <div className="frame-29024">
      <div className="text-1008 ibmplexsans-semi-bold-quarter-spanish-white-24px">{text1008}</div>
      <Frame20232
        chevronrightoutline2Props={frame20232Props.chevronrightoutline2Props}
        chevronrightoutline22Props={frame20232Props.chevronrightoutline22Props}
      />
      <Link to="/4-4-calendar-add-new-event">
        <div className="frame-19524">
          <div className="text-1009 valign-text-middle ibmplexsans-semi-bold-shark-16px">{text1009}</div>
        </div>
      </Link>
      <Frame54>{frame54Props.children}</Frame54>
    </div>
  );
}

export default Frame29024;
