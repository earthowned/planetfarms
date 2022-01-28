import React from "react";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { ActionButton } from "common/action-button";

import "./styles.scss";

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="not-found-page-container">
      <div className="content-container">
        <Icon icon="logo-small" />

        <h1>Ooops, page not found...</h1>

        <ActionButton
          title="Go Back"
          variant="primary"
          onClick={() => history.goBack()}
        />
      </div>
    </div>
  );
};
