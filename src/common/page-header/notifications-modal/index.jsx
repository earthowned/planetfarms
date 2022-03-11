import { useState } from "react";

import { SideModal } from "common/side-modal";
import { NavigationTabs } from "common/nav-tabs";

import { navTabs } from "./config";

import "./styles.scss";

export const NotificationsModal = ({ visible, onClose }) => {
  const [index, setIndex] = useState(0);

  return (
    <SideModal title="Notifications" visible={visible} onClose={onClose}>
      <div className="notifications-menu-container">
        <NavigationTabs
          tabs={navTabs}
          onChange={setIndex}
          selectedIndex={index}
        />
      </div>
    </SideModal>
  );
};
