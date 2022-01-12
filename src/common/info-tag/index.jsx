import React from "react";

import "./styles.scss";

export const InfoTag = ({ title, className = "" }) => {
  return (
    <div className={`info-tag ${className}`}>
      <p>{title}</p>
    </div>
  );
};
