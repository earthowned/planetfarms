/* eslint-disable react/button-has-type */
import React from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import "./styles.scss";

export const ActionButton = ({
  icon,
  title,
  onClick,
  rightIcon,
  className,
  type = "button",
  disabled = false,
  tintIcon = false,
  variant = "secondary",
}) => {
  const btnClassName = cx(
    "action-btn",
    { [`action-btn-${variant}`]: true, "action-btn-tint-icon": tintIcon },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={btnClassName}
    >
      {icon && <Icon icon={icon} />}
      {title && <p className="btn-title">{title}</p>}
      {rightIcon && <Icon icon={rightIcon} />}
    </button>
  );
};
