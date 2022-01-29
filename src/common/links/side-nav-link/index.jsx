import React from "react";
import cx from "classnames";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Icon } from "common/icon";

import "./styles.scss";

export const SideNavLink = ({ variant, icon, title, to }) => {
  const className = (isActive) =>
    cx("side-nav-link", {
      [`side-nav-link-${variant}`]: true,
      "side-nav-link-active": isActive,
    });

  return (
    <RouterNavLink to={to} className={(isActive) => className(isActive)}>
      <div className="icon-container">{icon && <Icon icon={icon} />}</div>
      {title}
    </RouterNavLink>
  );
};
