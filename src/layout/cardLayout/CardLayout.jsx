import React from "react";
import "./CardLayout.css";

const CardLayout = ({ children }) => {
  return <div className="grid-layout">{children}</div>;
};

export default CardLayout;
