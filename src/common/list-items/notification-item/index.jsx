import React, { useMemo } from "react";
import cx from "classnames";

import { Divider } from "common/divider";
import { Avatar } from "common/avatar";

import "./styles.scss";

const LiveContainer = () => (
  <div className="is-live-container">
    <div className="red-circle" />
    <h4>Live now</h4>
  </div>
);

export const NotificationItem = ({
  title,
  message,
  onClick,
  imageUrl,
  createdAt,
  isLive = false,
  avatarStyle = "round", // round, square
}) => {
  const className = "notification-list-item";

  const containerClass = useMemo(
    () => cx(className, { [`${className}-${avatarStyle}-avatar`]: true }),
    [avatarStyle]
  );

  return (
    <div className="notification-list-item-container" onClick={onClick}>
      <div className={containerClass}>
        <Avatar placeholderIcon="person" src={imageUrl} />

        <div className="content">
          <div className="top-container">
            <h4>{title}</h4>
            {isLive && <LiveContainer />}
            {createdAt && <p className="h7">{createdAt}</p>}
          </div>

          <h5>{message}</h5>
        </div>
      </div>

      <Divider marginTop="24px" />
    </div>
  );
};
