import React from "react";

import { Icon } from "common/icon";

import "./styles.scss";

export const Avatar = ({ src, placeholderIcon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="avatar-container"
      style={{ cursor: onClick ? "pointer" : "unset" }}
    >
      {src ? <img src={src} alt="" /> : <Icon icon={placeholderIcon} />}
    </div>
  );
};
