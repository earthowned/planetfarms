import React from "react";
import Searchoutline1 from "../Searchoutline1";
import "./Frame2912.css";

function Frame2912(props) {
  const { search, searchoutline1Props, className } = props;

  return (
    <div className={`frame-2912 ${className || ""}`}>
      <Searchoutline1 vector={searchoutline1Props.vector} vector2={searchoutline1Props.vector2} />
      <div className="search ibmplexsans-normal-monsoon-16px">{search}</div>
    </div>
  );
}

export default Frame2912;
