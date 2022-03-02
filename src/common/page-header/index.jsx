import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { IconButton } from "common/buttons/icon-button";
import { ModalButton } from "common/buttons/modal-button";
import { DestructiveModalContainer } from "common/modal-containers";

import { logout } from "actions/auth";
import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";
import { getErrorMessage } from "utils/error";

import { MobileMenu } from "./mobile-menu";
import { renderContent, renderComponent } from "./renders";
import { ChangePasswordModalContainer } from "./change-password-modal";

import "./styles.scss";

export const PageHeader = ({ title, withBackButton = false }) => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const device = useDeviceType();

  const isMobile = device === DeviceType.Tablet || device === DeviceType.Mobile;

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const handleLogoutClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setLogoutVisible(true);
  };

  const handleChangePasswordClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setChangePasswordVisible(true);
  };

  const onLogout = async () => {
    try {
      await logout()(dispatch);
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <div className="main-page-header">
      <div className="top-header-container">
        <>
          {withBackButton && <p>Back Button</p>}

          {!withBackButton && isMobile && (
            <IconButton
              icon="logo-mobile"
              onClick={() => {
                history.push("/news");
                setIsMenuVisible(false);
              }}
            />
          )}

          {!withBackButton && !isMobile && <h2>{title || "PlanetFarms"}</h2>}
        </>

        <div className="right-nav-container">
          <IconButton icon="search" variant="white" />
          <IconButton variant="white" icon="bell" />

          {isMobile && (
            <IconButton
              variant="white"
              icon={isMenuVisible ? "cross" : "gamburger"}
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            />
          )}

          {!isMobile && (
            <div className="modal-btns-container">
              <ModalButton
                width="400px"
                modalTitle="Your settings"
                position={{ top: "65px", right: "-12px" }}
                renderContent={({ setVisible }) =>
                  renderContent({
                    onLogout: () => handleLogoutClick(setVisible),
                    onChangePassword: () =>
                      handleChangePasswordClick(setVisible),
                  })
                }
                component={({ visible, setVisible }) =>
                  renderComponent({
                    onClick: () => setVisible(!visible),
                  })
                }
              />
            </div>
          )}
        </div>

        {isMobile && (
          <MobileMenu
            visible={isMenuVisible}
            onLogout={() => {
              setIsMenuVisible(false);
              setLogoutVisible(true);
            }}
          />
        )}
      </div>

      {isMobile && title && (
        <div className="bottom-header-container">
          <h2>{title}</h2>
        </div>
      )}

      <DestructiveModalContainer
        title="Logout"
        visible={logoutVisible}
        onActionClick={onLogout}
        actionButtonTitle="Logout"
        onClose={() => setLogoutVisible(false)}
        message="Are you sure you want to logout?"
      />

      <ChangePasswordModalContainer
        visible={changePasswordVisible}
        onClose={() => setChangePasswordVisible(false)}
        onChangePassword={() => {}}
      />
    </div>
  );
};
