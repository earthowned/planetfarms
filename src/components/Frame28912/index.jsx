import React from "react";
import ChevronsLeft from "../ChevronsLeft";
import "./Frame28912.css";

function Frame28912(props) {
  const { text57, chevronsLeftProps, chevronsLeft2Props } = props;

  return (
    <div className="frame-28913">
      <div className="text-57 valign-text-middle ibmplexsans-normal-ebb-14px">{text57}</div>
      <div className="rectangle-8605"></div>
      <div className="rectangle-861"></div>
      <ChevronsLeft src={chevronsLeftProps.src} />
      <ChevronsLeft src={chevronsLeft2Props.src} className="chevrons-right" />
    </div>
  );
}

export default Frame28912;
