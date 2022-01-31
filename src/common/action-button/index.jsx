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
      {title}
    </button>
  );
};
