import React from "react";
import Searchoutline1 from "../Searchoutline1";
import "./Frame1980.css";

function Frame1980(props) {
  const { searchEnterprises, searchoutline1Props, className } = props;

  return (
    <div className={`frame-19804 border-1px-onyx ${className || ""}`}>
      <div className="frame-29133">
        <Searchoutline1 vector={searchoutline1Props.vector} vector2={searchoutline1Props.vector2} />
        <div className="search-enterprises ibmplexsans-normal-monsoon-16px">{searchEnterprises}</div>
      </div>
    </div>
  );
}

export default Frame1980;
