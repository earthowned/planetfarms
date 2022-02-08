import React from "react";

import { CommonModal } from "common/modal";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const DestructiveModalContainer = ({
  title,
  visible,
  message,
  onClose,
  onActionClick,
  actionButtonTitle,
}) => {
  return (
    <CommonModal visible={visible} title={title} onClose={onClose}>
      <div className="destruction-modal-container">
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
    </CommonModal>
  );
};
