import React from "react";

import { mockNotifications } from "mock";
import { ActionButton } from "common/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import "./styles.scss";

export const NotificationsModalContainer = ({ onClose }) => {
  return (
    <div className="notifications-modal-container">
      <div className="notifications-content-container">
        {mockNotifications.map((item) => (
          <NotificationItem
            key={item.id}
            title={item.title}
            isLive={item.isLive}
            message={item.message}
            imageUrl={item.imageUrl}
            avatarStyle="square"
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
