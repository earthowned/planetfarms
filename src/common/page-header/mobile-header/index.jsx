import { useState, useMemo } from "react";
import cx from "classnames";
import { useHistory } from "react-router-dom";

import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

export const MobileHeader = () => {
  const history = useHistory();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  const menuClassName = useMemo(
    () =>
      cx("menu-modal-container", {
        "menu-modal-container-expanded": isMenuVisible,
      }),
    [isMenuVisible]
  );

  const notificationsClassName = useMemo(
    () =>
      cx("menu-modal-container", {
        "menu-modal-container-expanded": isMessagesVisible,
      }),
    [isMessagesVisible]
  );

  const onMessagesClick = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      setIsMessagesVisible(!isMessagesVisible);
    }, 300);
  };

  const onMenuClick = () => {
    setIsMessagesVisible(false);
    setTimeout(() => {
      setIsMenuVisible(!isMenuVisible);
    }, 300);
  };

  return (
    <>
      <div className="mobile-header-container">
        <IconButton icon="logo-mobile" onClick={() => history.push("/news")} />

        <div className="buttons-container">
          <IconButton icon="search" variant="white" />

          <IconButton
            variant="white"
            onClick={onMessagesClick}
            icon={isMessagesVisible ? "cross" : "bell"}
          />
          <IconButton
            variant="white"
            onClick={onMenuClick}
            icon={isMenuVisible ? "cross" : "gamburger"}
          />
        </div>
      </div>

      <div className={menuClassName} />
      <div className={notificationsClassName} />
    </>
  );
};
