import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Modal } from "common/modal";
import { IconButton } from "common/icon-button";
import {
  MessagesModalContainer,
  MobileNavModalContainer,
  NotificationsModalContainer,
} from "common/modal-containers";

import { MobileNavType, buttons } from "./config";

import "./styles.scss";

export const BottomNavigation = () => {
  const history = useHistory();

  const [selectedType, setSelectedType] = useState(undefined);

  const handleClose = () => setSelectedType(undefined);

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

      <Modal variant="mobile-page" visible={selectedType}>
        {selectedType === MobileNavType.Messages && (
          <MessagesModalContainer onClose={handleClose} />
        )}

        {selectedType === MobileNavType.Notifications && (
          <NotificationsModalContainer onClose={handleClose} />
        )}

        {selectedType === MobileNavType.Menu && (
          <MobileNavModalContainer onClose={handleClose} />
        )}
      </Modal>
    </>
  );
};
