import React from "react";
import Usermanagement from "../Usermanagement";
import "./Frame1953.css";

function Frame1953(props) {
  const { text37, usermanagementProps } = props;

  return (
    <div className="frame-19532">
      <Usermanagement
        vector={usermanagementProps.vector}
        vector2={usermanagementProps.vector2}
        vector3={usermanagementProps.vector3}
        vector4={usermanagementProps.vector4}
        vector5={usermanagementProps.vector5}
        vector6={usermanagementProps.vector6}
        className="user-management2"
      />
      <div className="text-37 ibmplexsans-semi-bold-shark-16px">{text37}</div>
    </div>
  );
}

export default Frame1953;
