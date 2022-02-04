import React from "react";
import { useHistory } from "react-router-dom";

import { mockMessages } from "mock";
import { ActionButton } from "common/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import "./styles.scss";

export const MessagesModalContainer = ({ onClose }) => {
  const history = useHistory();

  const handleClick = () => {
    onClose();
    history.push("/messenger");
  };

  return (
    <div className="messages-modal-container">
      <div className="messages-content-container">
        {mockMessages.map((item) => (
          <NotificationItem
            key={item.id}
            avatarStyle="round"
            title={item.fullName}
            onClick={handleClick}
            message={item.message}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        ))}

        <ActionButton
          onClick={onClose}
          variant="secondary"
          title="Hide messages"
        />
      </div>
    </div>
  );
};
