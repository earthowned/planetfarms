import React, { useState, useMemo } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ModalButton } from "common/buttons/modal-button";
import { ActionButton } from "common/buttons/action-button";
import { DestructiveModalContainer } from "common/modal-containers";

import { logout } from "actions/auth";
import useSizeFinder from "utils/sizeFinder";
import { getErrorMessage } from "utils/error";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { IconButton } from "common/buttons/icon-button";

// import { SettingsModal } from "./settings-modal";
import { MobileMenu } from "./mobile-menu";
import { desktopButtons, mobileButtons } from "./config";
import { renderContent, renderComponent } from "./renders";
import { ChangePasswordModalContainer } from "./change-password-modal";

import "./styles.scss";

const TitleContainer = ({ isTablet, title, withBackButton }) => {
  const history = useHistory();

  if (withBackButton) {
    return <p>Back Button</p>;
  }

  if (isTablet) {
    return (
      <IconButton icon="logo-mobile" onClick={() => history.push("/news")} />
    );
  }

  return <h3>{title}</h3>;
};

export const DesktopHeader = ({ title = "PlanetFarms" }) => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const screenWidth = useSizeFinder();

  const isTablet = screenWidth <= TABLET_SCREEN_WIDTH;

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [logoutVisible, setLogoutVisible] = useState(false);
  //   const [settingsVisible, setSettingsVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const modalButtons = useMemo(
    () => (isTablet ? mobileButtons : desktopButtons),
    [isTablet]
  );

  const handleLogoutClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setLogoutVisible(true);
  };

  const handleChangePasswordClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setChangePasswordVisible(true);
  };

  const handleMessageClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    history.push("/messenger");
  };

  const onLogout = async () => {
    try {
      await logout()(dispatch);
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      // TODO: Hide Loading;
    }
  };

  return (
    <div className="main-page-header">
      <TitleContainer
        title={title}
        isTablet={isTablet}
        withBackButton={false}
      />

      <div className="right-nav-container">
        <IconButton icon="search" variant="white" />
        <IconButton variant="white" icon="bell" />

        {isTablet && (
          <IconButton
            variant="white"
            icon={isMenuVisible ? "cross" : "gamburger"}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
        )}

        {!isTablet && (
          <div className="modal-btns-container">
            {modalButtons.map((item) => (
              <ModalButton
                key={item.title}
                width={item.width}
                modalTitle={item.title}
                onActionButtonClick={() => {}}
                actionButtonTitle={item.actionButtonTitle}
                {...(item.position && { position: item.position })}
                renderContent={({ setVisible }) =>
                  renderContent({
                    type: item.type,
                    onLogout: () => handleLogoutClick(setVisible),
                    onMessageClick: () => handleMessageClick(setVisible),
                    onChangePassword: () =>
                      handleChangePasswordClick(setVisible),
                  })
                }
                component={({ visible, setVisible }) =>
                  renderComponent({
                    type: item.type,
                    onClick: () => setVisible(!visible),
                  })
                }
              />
            ))}
          </div>
        )}
      </div>

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

      {isTablet && <MobileMenu visible={isMenuVisible} />}

      {/* {isTablet && (
        <SettingsModal
          visible={settingsVisible}
          onClose={() => setSettingsVisible(false)}
          onLogout={() => {
            setSettingsVisible(false);
            setLogoutVisible(true);
          }}
          onChangePassword={() => {
            setSettingsVisible(false);
            setChangePasswordVisible(true);
          }}
        />
      )} */}
    </div>
  );
};
