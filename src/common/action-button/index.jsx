/* eslint-disable react/button-has-type */
import React from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import "./styles.scss";

export const ActionButton = ({
  icon,
  title,
  onClick,
  disabled,
  className,
  type = "button",
  tintIcon = false,
  variant = "secondary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "action-btn",
        { [`action-btn-${variant}`]: true, "action-btn-tint-icon": tintIcon },
        className
      )}
    >
      {icon && <Icon icon={icon} />}
      {title}
    </button>
  );
};
