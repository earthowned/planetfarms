import { useState } from "react";
import { useHistory } from "react-router-dom";
import MessageDropdown from "../messageDropdown/MessageDropdown";
import "./HeaderComponent.css";

import ProfileMenu from "./ProfileMenu";

const HeaderComponent = ({ title }) => {
  const [active, setActive] = useState(false);
  const [notification, setNotification] = useState(false);

  function messageNoti() {
    setActive(!active);
    setNotification(false);
  }

  function notificationNoti() {
    setNotification(!notification);
    setActive(false);
  }
  const history = useHistory();

  function handleClick() {
    history.push("/messenger");
  }

  return (
    <>
      <header className="header-container">
        <h3>{title}</h3>
        <ul>
          <li
            className="community-switch-btn"
            onClick={() => history.push("/community-switching")}
          >
            <button type="button">Switch Community</button>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/dashboard")}
          >
            <img src="/img/user-green-outline.svg" alt="user-green-outline" />
            <span>My dashboard</span>
          </li>
          <li onClick={() => messageNoti()} className="message">
            <img src="/img/email.svg" alt="email-icon" />
            {active || <div className="message-noti">6</div>}
            {active && (
              <MessageDropdown
                clickHandler={setActive}
                message="Your messages"
                btnName="See all messages"
                handleClick={handleClick}
              />
            )}
          </li>
          <li onClick={() => notificationNoti()} className="message">
            <img src="/img/bell-icon.svg" alt="bell-icon" />
            {notification && (
              <MessageDropdown
                clickHandler={setNotification}
                message="Your notifications"
                btnName="See all notifications"
                handleClick={handleClick}
              />
            )}
          </li>

          <li className="message">
            <ProfileMenu />
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderComponent;
