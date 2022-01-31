import React from "react";
import { useHistory } from "react-router-dom";

import { Avatar } from "common/avatar";
import { IconButton } from "common/icon-button";

import "./styles.scss";
import { ActionButton } from "common/action-button";

export const PageHeader = () => {
  const history = useHistory();

  return (
    <div className="main-page-header">
      <h3>All Communities</h3>

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
          <IconButton icon="email" />
          <IconButton icon="bell" />
        </div>

        <Avatar placeholderIcon="person" />
      </div>
    </div>
  );
};
