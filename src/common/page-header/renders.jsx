import { Avatar } from "common/avatar";
import { IconButton } from "common/icon-button";
import { NotificationItem } from "common/list-items/notification-item";

import { mockNotifications, mockMessages } from "mock";

import { ButtonType } from "./config";

export const renderComponent = (type, onClick) => {
  let component;

  switch (type) {
    case ButtonType.Messages:
      component = <IconButton icon="email" onClick={onClick} />;
      break;

    case ButtonType.Notifications:
      component = <IconButton icon="bell" onClick={onClick} />;
      break;

    case ButtonType.Settings:
      component = <Avatar placeholderIcon="person" onClick={onClick} />;
      break;

    default:
      component = null;
  }

  return component;
};

export const renderContent = (type) => {
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

    default:
      return null;
  }
};
