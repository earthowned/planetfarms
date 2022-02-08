import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { IconButton } from "common/buttons/icon-button";

import { MobileNavType, buttons } from "./config";
import {
  MessagesModalContainer,
  MobileNavModalContainer,
  NotificationsModalContainer,
} from "./mobile-menu-modals";

import "./styles.scss";

export const BottomNavigation = () => {
  const history = useHistory();

  const [selectedType, setSelectedType] = useState(undefined);

  const handleClose = () => setSelectedType(undefined);

  const handleMessageClick = () => {
    setSelectedType(undefined);
    history.push("/messenger");
  };

  const handleClick = useCallback(
    (type, path) => {
      switch (type) {
        case MobileNavType.Profile: {
          history.replace("/dashboard");
          break;
        }

        case MobileNavType.Messages:
        case MobileNavType.Notifications: {
          setSelectedType(selectedType === type ? undefined : type);
          break;
        }

        case MobileNavType.Menu: {
          setSelectedType(selectedType === type ? undefined : type);
          history.push(path);
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

      <MessagesModalContainer
        onClose={handleClose}
        onMessageClick={handleMessageClick}
        visible={selectedType === MobileNavType.Messages}
      />

      <NotificationsModalContainer
        onClose={handleClose}
        onMessageClick={handleMessageClick}
        visible={selectedType === MobileNavType.Notifications}
      />

      <MobileNavModalContainer
        onClose={handleClose}
        visible={selectedType === MobileNavType.Menu}
      />
    </>
  );
};
