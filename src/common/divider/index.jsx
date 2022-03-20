import React from "react";

import "./styles.scss";

export const Divider = ({ style, backgroundColor, withGradient = false }) => {
  const background = withGradient
    ? `linear-gradient(90deg, ${backgroundColor} 30.07%, rgba(88, 189, 136, 0) 100%)`
    : backgroundColor;

  return <div className="divider" style={{ ...style, background }} />;
};
