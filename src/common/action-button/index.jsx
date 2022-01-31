/* eslint-disable react/button-has-type */
import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";

import { Icon } from "common/icon";

import "./styles.scss";

export const ActionButton = ({
  to,
  icon,
  exact,
  title,
  replace,
  onClick,
  disabled,
  className,
  type = "button",
  tintIcon = false,
  renderAsLink = false,
  variant = "secondary",
}) => {
  const btnClassName = cx(
    "action-btn",
    { [`action-btn-${variant}`]: true, "action-btn-tint-icon": tintIcon },
    className
  );

  if (renderAsLink) {
    return (
      <Link to={to} exact={exact} replace={replace} className={btnClassName}>
        {icon && <Icon icon={icon} />}
        {title}
      </Link>
    );
  }

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
