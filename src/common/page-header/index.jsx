import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ActionButton } from "common/action-button";
import { ModalButton } from "common/modal-button";

import SettingsActionModal from "components/settingsActionModal/SettingsActionModal";

import { buttons, actionButtons } from "./config";
import { renderContent, renderComponent } from "./renders";

import "./styles.scss";

export const PageHeader = ({ title = "Kek" }) => {
  const history = useHistory();

  const [passwordModalVisible, setPasswordModalVisible] = useState(false);

  const handleLogout = (setVisible) => {};

  const handleChangePassword = (setVisible) => {
    setVisible(false);
    setPasswordModalVisible(true);
  };

  return (
    <div className="main-page-header">
      <h3>{title}</h3>

      <div className="right-nav-container">
        <div className="nav-btns-container">
          {actionButtons.map((item) => (
            <ActionButton
              icon={item.icon}
              key={item.title}
              title={item.title}
              variant="header-nav"
              onClick={() => history.replace(item.path)}
            />
          ))}
        </div>

        <div className="modal-btns-container">
          {buttons.map((item) => (
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
