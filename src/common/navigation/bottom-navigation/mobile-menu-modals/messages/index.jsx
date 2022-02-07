import React from "react";

import { mockMessages } from "mock";
import { MobileMenuModal } from "common/modal";
import { ActionButton } from "common/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import "./styles.scss";

const MessagesModalContainer = ({ visible, onClose, onMessageClick }) => {
  return (
    <MobileMenuModal visible={visible}>
      <div className="messages-modal-container">
        <div className="messages-content-container">
          {mockMessages.map((item) => (
            <NotificationItem
              key={item.id}
              avatarStyle="round"
              title={item.fullName}
              message={item.message}
              onClick={onMessageClick}
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
    </MobileMenuModal>
  );
};

export { MessagesModalContainer };
