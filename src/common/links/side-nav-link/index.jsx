import React, { useCallback } from "react";
import cx from "classnames";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Icon } from "common/icon";

import "./styles.scss";

export const SideNavLink = ({
  to,
  icon,
  title,
  variant,
  onClick,
  compactTitle,
  isCompact = false,
}) => {
  const linkClassName = cx("side-nav-link", {
        [`side-nav-link-${variant}`]: true,
        "side-nav-link-active": isActive,
        "side-nav-link-compact": isCompact,
      });

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={linkClassName}
    >
      <div className="icon-container">
        {variant === "primary" && icon && <Icon icon={icon} />}
        {variant === "secondary" && isCompact && <p>{compactTitle}</p>}
      </div>

      {!isCompact && <p>{title}</p>}
    </RouterNavLink>
  );
};
