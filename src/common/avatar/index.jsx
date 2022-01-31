import React from "react";

import { Icon } from "common/icon";

import "./styles.scss";

export const Avatar = ({ src, placeholderIcon }) => {
  return (
    <div className="avatar-container">
      {src ? <img src={src} alt="" /> : <Icon icon={placeholderIcon} />}
    </div>
  );
};
