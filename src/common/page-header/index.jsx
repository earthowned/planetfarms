import React from "react";
import { useHistory } from "react-router-dom";

import { ActionButton } from "common/action-button";
import { ModalButton } from "common/modal-button";

import { buttons } from "./config";
import { renderContent, renderComponent } from "./renders";

import "./styles.scss";

export const PageHeader = ({ title = "Kek" }) => {
  const history = useHistory();

  return (
    <div className="main-page-header">
      <h3>{title}</h3>

      <div className="right-nav-container">
        <div className="nav-btns-container">
          <ActionButton
            icon="grid"
            variant="header-nav"
            title="Switch Community"
            onClick={() => history.replace("/community-switching")}
          />

          <ActionButton
            icon="person"
            variant="header-nav"
            title="My dashboard"
            onClick={() => history.replace("/dashboard")}
          />
        </div>

        <div className="modal-btns-container">
          {buttons.map((item) => (
            <ModalButton
              key={item.title}
              modalTitle={item.title}
              onActionButtonClick={() => {}}
              renderContent={renderContent(item.type)}
              actionButtonTitle={item.actionButtonTitle}
              {...(item.position && { position: item.position })}
              component={(onClick) => renderComponent(item.type, onClick)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
