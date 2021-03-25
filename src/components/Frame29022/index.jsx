import React from "react";
import Frame20232 from "../Frame20232";
import "./Frame29022.css";

function Frame29022(props) {
  const { november2020, addNewEvent, frame20232Props } = props;

  return (
    <div className="frame-29022">
      <div className="november-2020">{november2020}</div>
      <Frame20232
        chevronrightoutline2Props={frame20232Props.chevronrightoutline2Props}
        chevronrightoutline22Props={frame20232Props.chevronrightoutline22Props}
        className="frame-20233"
      />
      <div className="frame-19522">
        <div className="add-new-event2 valign-text-middle">{addNewEvent}</div>
      </div>
    </div>
  );
}

export default Frame29022;
