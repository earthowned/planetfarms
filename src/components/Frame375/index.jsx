import React from "react";
import Book from "../Book";
import Frame3292 from "../Frame3292";
import "./Frame375.css";

function Frame375(props) {
  const { text192, text193, rectangle1194, text194, text196, bookProps, frame3292Props, className } = props;

  return (
    <div className={`frame-375 border-1px-onyx ${className || ""}`}>
      <div className="frame-3291-2">
        <div className="text-192 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">{text192}</div>
      </div>
      <div className="text-193 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text193}</div>
      <img className="rectangle-11942" src={rectangle1194} />
      <div className="frame-3756">
        <div className="frame-3291-3 border-0-5px-quarter-spanish-white">
          <div className="frame-33282">
            <Book vector={bookProps.vector} vector2={bookProps.vector2} className="book" />
            <div className="text-194 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
              {text194}
            </div>
          </div>
        </div>
        <Frame3292>{frame3292Props.children}</Frame3292>
      </div>
      <div className="text-196 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text196}</div>
    </div>
  );
}

export default Frame375;
