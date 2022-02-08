import React from "react";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="not-found-page-container">
      <div className="content-container">
        <Icon icon="logo-small" />

        <p className="not-found-title">Ooops, page not found...</p>

        <ActionButton
          title="Go Back"
          variant="transparent"
          onClick={() => history.goBack()}
        />
      </div>
    </div>
  );
};
