import React from "react";

import { Avatar } from "common/avatar";
import { Divider } from "common/divider";
import { IconButton } from "common/icon-button";
import { ActionButton } from "common/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import { mockNotifications, mockMessages } from "mock";

import { ButtonType } from "./config";

export const renderComponent = ({ type, onClick }) => {
  switch (type) {
    case ButtonType.Messages:
      return <IconButton icon="email" onClick={onClick} />;

    case ButtonType.Notifications:
      return <IconButton icon="bell" onClick={onClick} />;

    case ButtonType.Settings:
      return <Avatar placeholderIcon="person" onClick={onClick} />;

    default:
      return null;
  }
};

export const renderContent = ({ type, onLogout, onChangePassword }) => {
  switch (type) {
    case ButtonType.Messages:
      return mockNotifications.map((item) => (
        <NotificationItem
          key={item.id}
          title={item.title}
          isLive={item.isLive}
          message={item.message}
          imageUrl={item.imageUrl}
        />
      ));

    case ButtonType.Notifications:
      return mockMessages.map((item) => (
        <NotificationItem
          key={item.id}
          avatarStyle="round"
          title={item.fullName}
          message={item.message}
          imageUrl={item.imageUrl}
          createdAt={item.createdAt}
        />
      ));

    case ButtonType.Settings:
      return (
        <div className="settings-modal-header-container">
          <ActionButton title="Change Password" onClick={onChangePassword} />
          <Divider marginTop="24px" marginBottom="24px" />
          <ActionButton title="Logout" variant="logout" onClick={onLogout} />
        </div>
      );

    default:
      return null;
  }
};
