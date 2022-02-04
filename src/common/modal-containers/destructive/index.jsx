import React from "react";

import { IconButton } from "common/icon-button";
import { ActionButton } from "common/action-button";

import "./styles.scss";

export const DestructiveModalContainer = ({
  title,
  message,
  onClose,
  onActionClick,
  actionButtonTitle,
}) => {
  return (
    <div className="destruction-modal-container">
      <div className="top-container">
        <h3>{title}</h3>
        <IconButton icon="cross" variant="white" onClick={onClose} />
      </div>

      {message && <h5>{message}</h5>}

      <div className="buttons-container">
        <ActionButton title="Cancel" variant="secondary" onClick={onClose} />
        <ActionButton
          variant="logout"
          onClick={onActionClick}
          title={actionButtonTitle}
        />
      </div>
    </div>
  );
};
