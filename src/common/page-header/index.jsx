import React, { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Avatar } from "common/avatar";
import { IconButton } from "common/icon-button";
import { ActionButton } from "common/action-button";

import { getPageTitle } from "./config";

import "./styles.scss";

export const PageHeader = () => {
  const history = useHistory();
  const location = useLocation();

  const title = useMemo(() => {
    return getPageTitle(location.pathname);
  }, [location.pathname]);

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
          <IconButton icon="email" />
          <IconButton icon="bell" />
        </div>

        <Avatar placeholderIcon="person" />
      </div>
    </div>
  );
};
