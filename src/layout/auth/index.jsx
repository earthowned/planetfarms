import { Icon } from "common/icon";
import { BlurContainer } from "./blur-container";

import "./styles.scss";

export const AuthPageContainer = ({ children, withLogo = true }) => {
  return (
    <BlurContainer>
      <div className="auth-page-container">
        <div className="left-container">
          <div className="left-scroll-container">
            <div className="logo-container">
              <Icon icon="logo-small" className="left-logo-icon" />
            </div>

            <div className="form-container">{children}</div>
          </div>
        </div>

        {withLogo && (
          <div className="right-container">
            <Icon icon="logo-small" className="right-logo-icon" />
          </div>
        )}
      </div>
    </BlurContainer>
  );
};
