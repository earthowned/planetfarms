import React, { useCallback, useState } from "react";

import { Modal } from "common/modal";
import { IconButton } from "common/icon-button";
import { MessagesModalContainer } from "common/modal-containers/messages";
import { NotificationsModalContainer } from "common/modal-containers/notifications";

import { MobileNavType, buttons } from "./config";

import "./styles.scss";

export const BottomNavigation = () => {
  const [selectedType, setSelectedType] = useState(undefined);

  const handleClick = useCallback(
    (type) => {
      switch (type) {
        case MobileNavType.Menu:
        case MobileNavType.Messages:
        case MobileNavType.Notifications: {
          setSelectedType(selectedType === type ? undefined : type);
          break;
        }

        default:
          break;
      }
    },
    [selectedType]
  );

  return (
    <>
      <div className="bottom-navigation">
        {buttons.map((item) => (
          <IconButton
            icon={item.icon}
            key={`${item.type}-mobile-nav`}
            onClick={() => handleClick(item.type)}
            variant={selectedType === item.type ? "selected" : "transparent"}
          />
        ))}
      </div>

      <Modal
        variant="mobile-page"
        visible={selectedType === MobileNavType.Messages}
      >
        <MessagesModalContainer onClose={() => setSelectedType(undefined)} />
      </Modal>

      <Modal
        variant="mobile-page"
        visible={selectedType === MobileNavType.Notifications}
      >
        <NotificationsModalContainer
          onClose={() => setSelectedType(undefined)}
        />
      </Modal>
    </>
  );
};
