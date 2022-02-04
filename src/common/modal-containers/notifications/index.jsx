import React from "react";
import { useHistory } from "react-router-dom";

import { mockNotifications } from "mock";
import { ActionButton } from "common/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import "./styles.scss";

export const NotificationsModalContainer = ({ onClose }) => {
  const history = useHistory();

  const handleClick = () => {
    onClose();
    history.push("/messenger");
  };

  return (
    <div className="notifications-modal-container">
      <div className="notifications-content-container">
        {mockNotifications.map((item) => (
          <NotificationItem
            key={item.id}
            title={item.title}
            isLive={item.isLive}
            avatarStyle="square"
            onClick={handleClick}
            message={item.message}
            imageUrl={item.imageUrl}
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
