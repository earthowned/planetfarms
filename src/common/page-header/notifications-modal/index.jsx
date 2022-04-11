import { useState, useMemo } from "react";

import { SideModal } from "common/side-modal";
import { NavigationTabs } from "common/nav-tabs";

import { NotificationListItem } from "./notifications-list-item";
import { navTabs, mockedNotifications, mockedMessages } from "./config";

import "./styles.scss";

export const NotificationsModal = ({ visible, onClose, onSelect }) => {
  const [index, setIndex] = useState(0);

  const list = useMemo(() => {
    if (index === 0) return mockedNotifications;
    return mockedMessages;
  }, [index]);

  return (
    <SideModal title="Notifications" visible={visible} onClose={onClose}>
      <div className="notifications-modal-container">
        <div className="nav-tabs-container">
          <NavigationTabs
            tabs={navTabs}
            onChange={setIndex}
            selectedIndex={index}
          />
        </div>

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
