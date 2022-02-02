import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { ModalButton } from "common/modal-button";
import { ActionButton } from "common/action-button";
import SettingsActionModal from "components/settingsActionModal/SettingsActionModal";

import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { desktopButtons, mobileButtons } from "./config";
import { renderContent, renderComponent } from "./renders";

import "./styles.scss";

export const PageHeader = ({ title = "Kek" }) => {
  const history = useHistory();
  const screenWidth = useSizeFinder();
  const isTablet = screenWidth <= TABLET_SCREEN_WIDTH;

  const [passwordModalVisible, setPasswordModalVisible] = useState(false);

  const modalButtons = useMemo(
    () => (isTablet ? mobileButtons : desktopButtons),
    [isTablet]
  );

  const handleLogout = () => {};

  const handleChangePassword = (setVisible) => {
    setVisible(false);
    setPasswordModalVisible(true);
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
                  onLogout: () => handleLogout(setVisible),
                  onChangePassword: () => handleChangePassword(setVisible),
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

      {passwordModalVisible && <SettingsActionModal />}
    </div>
  );
};
