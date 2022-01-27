import React from "react";

import { Icon } from "common/icon";
import BigLogoImage from "assets/images/big-logo.png";

import "./styles.scss";

export const AuthLayout = ({ title, children }) => {
  return (
    <div className="auth-container">
      <div className="header">
        <Icon icon="logo-small" />
      </div>

      <div className="content-container">
        <div className="form-container">
          <h1>{title}</h1>
          {children}
        </div>

        <div className="big-logo-container">
          <img src={BigLogoImage} alt="big-logo" />
        </div>
      </div>
    </div>
  );
};
