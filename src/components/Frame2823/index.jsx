import React from "react";
import "./Frame2823.css";

function Frame2823(props) {
  const { email, mikhailGmailPro, className } = props;

  return (
    <div className={`frame-2823 ${className || ""}`}>
      <div className="email3">{email}</div>
      <div className="mikhailgmailpro ibmplexsans-semi-bold-quarter-spanish-white-16px">{mikhailGmailPro}</div>
    </div>
  );
}

export default Frame2823;
