import React from "react";

import { mockNotifications } from "mock";
import { MobileMenuModal } from "common/modal";
import { ActionButton } from "common/buttons/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import "./styles.scss";

const NotificationsModalContainer = ({ visible, onClose, onMessageClick }) => {
  return (
    <MobileMenuModal visible={visible}>
      <div className="notifications-modal-container">
        <div className="notifications-content-container">
          {mockNotifications.map((item) => (
            <NotificationItem
              key={item.id}
              title={item.title}
              isLive={item.isLive}
              avatarStyle="square"
              message={item.message}
              onClick={onMessageClick}
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
    </MobileMenuModal>
  );
};

export { NotificationsModalContainer };
