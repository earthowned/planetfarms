import { useState, useMemo } from "react";

import { Avatar } from "common/avatar";
import { SideModal } from "common/side-modal";
import { NavigationTabs } from "common/nav-tabs";

import { navTabs, mockedNotifications, mockedMessages } from "./config";

import "./styles.scss";

const NotificationListItem = ({
  from,
  message,
  onClick,
  imageUrl,
  createdAt,
  withDivider,
}) => {
  return (
    <div className="notification-list-item-container" onClick={onClick}>
      <div className="main-container">
        <Avatar src={imageUrl} placeholderIcon="person" />

        <div className="data-container">
          {from && <h4>{from}</h4>}
          {message && <h5>{message}</h5>}
          {createdAt && <h5 className="date-text">{createdAt}</h5>}
        </div>
      </div>

      {withDivider && <div className="divider" />}
    </div>
  );
};

export const NotificationsModal = ({ visible, onClose, onSelect }) => {
  const [index, setIndex] = useState(0);

  const list = useMemo(() => {
    if (index === 0) return mockedNotifications;
    return mockedMessages;
  }, [index]);

  return (
    <SideModal title="Notifications" visible={visible} onClose={onClose}>
      <div className="notifications-menu-container">
        <NavigationTabs
          tabs={navTabs}
          onChange={setIndex}
          selectedIndex={index}
        />

        <div className="notifications-list-container">
          <div className="notifications-list-header">
            <h5>Today</h5>
          </div>

          {list.map((item, i) => (
            <NotificationListItem
              key={item.id}
              from={item.from}
              onClick={onSelect}
              message={item.message}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
              withDivider={i !== list.length - 1}
            />
          ))}
        </div>
      </div>
    </SideModal>
  );
};
