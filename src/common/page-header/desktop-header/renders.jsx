import React from "react";

import { Avatar } from "common/avatar";
import { Divider } from "common/divider";
import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";
import { NotificationItem } from "common/list-items/notification-item";

import { mockNotifications, mockMessages } from "mock";

import { ButtonType } from "./config";

const ButtonIcon = {
  [ButtonType.Messages]: "email",
  [ButtonType.Notifications]: "bell",
};

export const renderComponent = ({ type, onClick }) => {
  switch (type) {
    case ButtonType.Messages:
    case ButtonType.Notifications:
      return <IconButton icon={ButtonIcon[type]} onClick={onClick} />;

    case ButtonType.Settings:
      return <Avatar placeholderIcon="person" onClick={onClick} />;

    default:
      return null;
  }
};

export const renderContent = ({
  type,
  onLogout,
  onMessageClick,
  onChangePassword,
}) => {
  switch (type) {
    case ButtonType.Messages:
      return mockNotifications.map((item) => (
        <NotificationItem
          key={item.id}
          title={item.title}
          isLive={item.isLive}
          message={item.message}
          imageUrl={item.imageUrl}
          onClick={onMessageClick}
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
          onClick={onMessageClick}
          createdAt={item.createdAt}
        />
      ));

    case ButtonType.Settings:
      return (
        <div className="settings-modal-header-container">
          <ActionButton
            icon="lock"
            title="Change Password"
            onClick={onChangePassword}
            variant="transparent-white"
          />

          <Divider marginTop="12px" marginBottom="12px" />

          <ActionButton
            icon="logout"
            title="Logout"
            onClick={onLogout}
            variant="transparent-red"
          />
        </div>
      );

    default:
      return null;
  }
};
