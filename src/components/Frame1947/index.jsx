import React from "react";
import Book from "../Book";
import "./Frame1947.css";

function Frame1947(props) {
  const { text41, bookProps, className } = props;

  return (
    <div className={`frame-19472 ${className || ""}`}>
      <div className="frame-19832">
        <Book vector={bookProps.vector} vector2={bookProps.vector2} className="book2" />
        <div className="text-41 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text41}</div>
      </div>
    </div>
  );
}

export default Frame1947;
