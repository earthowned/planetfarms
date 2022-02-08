import React from "react";

import { Icon } from "common/icon";
import { Loader } from "common/loader";
import BigLogoImage from "assets/images/big-logo.png";

import "./styles.scss";

export const AuthLayout = ({
  title,
  subtitle,
  children,
  withLogo = true,
  isLoading = false,
}) => {
  return (
    <div className="auth-container">
      <div className="header">
        <Icon icon="logo-small" />
      </div>

      <div className="content-container">
        <div
          className="form-container"
          style={{ maxWidth: withLogo ? "560px" : "unset" }}
        >
          <div className="title-container">
            <h1>{title}</h1>
            {subtitle && <h4>{subtitle}</h4>}
          </div>
          {children}
        </div>

        {withLogo && (
          <div className="big-logo-container">
            <img src={BigLogoImage} alt="big-logo" />
          </div>
        )}
      </div>

      {isLoading && <Loader />}
    </div>
  );
};
