import React from "react";
import "./Calendaroutline2.css";

function Calendaroutline2(props) {
  const { vector, vector2, vector3, vector4, className } = props;

  return (
    <div className={`calendar-outline-2 ${className || ""}`}>
      <div className="layer-26">
        <div className="calendar">
          <img className="vector-24" src={vector} />
          <img className="vector-33" src={vector2} />
          <img className="vector-43" src={vector3} />
          <img className="vector-53" src={vector4} />
        </div>
      </div>
    </div>
  );
}

export default Calendaroutline2;
