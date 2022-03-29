import { Avatar } from "common/avatar";

import "./styles.scss";

export const NotificationListItem = ({
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
