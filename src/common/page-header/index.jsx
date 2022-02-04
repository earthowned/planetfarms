import React, { useState, useMemo } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { Modal } from "common/modal";
import { ModalButton } from "common/modal-button";
import { ActionButton } from "common/action-button";
import {
  DestructiveModalContainer,
  ChangePasswordModalContainer,
} from "common/modal-containers";

import { logout } from "actions/auth";
import useSizeFinder from "utils/sizeFinder";
import { getErrorMessage } from "utils/error";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { desktopButtons, mobileButtons } from "./config";
import { renderContent, renderComponent } from "./renders";

import "./styles.scss";

export const PageHeader = ({ title = "Kek" }) => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const screenWidth = useSizeFinder();

  const isTablet = screenWidth <= TABLET_SCREEN_WIDTH;

  const [showLogout, setShowLogout] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const modalButtons = useMemo(
    () => (isTablet ? mobileButtons : desktopButtons),
    [isTablet]
  );

  const handleLogoutClick = (setVisible) => {
    setVisible(false);
    setShowLogout(true);
  };

  const handleChangePasswordClick = (setVisible) => {
    setVisible(false);
    setShowChangePassword(true);
  };

  const handleMessageClick = (setVisible) => {
    setVisible(false);
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
      {isTablet ? (
        <Icon icon="logo-mobile" onClick={() => history.replace("/news")} />
      ) : (
        <h3>{title}</h3>
      )}

      <div className="right-nav-container">
        <div className="nav-btns-container">
          <ActionButton
            icon="grid"
            title={!isTablet && "Switch Community"}
            variant="header-nav"
            onClick={() => history.replace("/community-switching")}
          />

          {!isTablet && (
            <ActionButton
              icon="person"
              title="My dashboard"
              variant="header-nav"
              onClick={() => history.replace("/dashboard")}
            />
          )}
        </div>

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
                  onChangePassword: () => handleChangePasswordClick(setVisible),
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
      </div>

      <Modal visible={showLogout || showChangePassword}>
        {showLogout && (
          <DestructiveModalContainer
            title="Logout"
            onActionClick={onLogout}
            actionButtonTitle="Logout"
            onClose={() => setShowLogout(false)}
            message="Are you sure you want to logout?"
          />
        )}

        {showChangePassword && (
          <ChangePasswordModalContainer
            onClose={() => setShowChangePassword(false)}
            onChangePassword={() => {}}
          />
        )}
      </Modal>
    </div>
  );
};
