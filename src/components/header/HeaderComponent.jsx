import { useState } from "react";
import { useHistory } from "react-router-dom";

import ProfileMenu from "./ProfileMenu";
import MessageDropdown from "../messageDropdown/MessageDropdown";

import "./HeaderComponent.css";

const ListContainer = ({ onSwitchCommunity, children }) => {
  return (
    <ul>
      <li className="community-switch-btn" onClick={onSwitchCommunity}>
        <button>Switch Community</button>
      </li>
      {children}
    </ul>
  );
};

const ListItem = ({
  title = "",
  badge = undefined,
  onClick = undefined,
  iconName = undefined,
  children = undefined,
}) => {
  return (
    <li className="header-tab-li" onClick={onClick}>
      {iconName && (
        <img src={`/img/${iconName}.svg`} alt={`${iconName}-icon`} />
      )}
      {title && <h4>{title}</h4>}
      {badge && <div className="badge">{badge}</div>}
      {children && children}
    </li>
  );
};

const HeaderComponent = ({ title }) => {
  const history = useHistory();

  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const onNotificationsClick = () => {
    setShowMessages(false);
    setShowNotifications(!showNotifications);
  };

  const onMessagesClick = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false);
  };

  return (
    <>
      <header className="header-container">
        <h3>{title}</h3>

        <ListContainer
          onSwitchCommunity={() => history.push("/community-switching")}
        >
          <ListItem
            title="My dashboard"
            iconName="user-green-outline"
            onClick={() => history.push("/dashboard")}
          />

          <ListItem badge={6} iconName="email" onClick={onMessagesClick}>
            {showMessages && (
              <MessageDropdown
                message="Your messages"
                btnName="See all messages"
                clickHandler={setShowMessages}
                handleClick={() => history.push("/messenger")}
              />
            )}
          </ListItem>

          <ListItem
            badge={4}
            iconName="bell-icon"
            onClick={onNotificationsClick}
          >
            {showNotifications && (
              <MessageDropdown
                message="Your notifications"
                btnName="See all notifications"
                clickHandler={setShowNotifications}
                handleClick={() => history.push("/messenger")}
              />
            )}
          </ListItem>

          <ListItem>
            <ProfileMenu />
          </ListItem>
        </ListContainer>
      </header>
    </>
  );
};

export default HeaderComponent;
