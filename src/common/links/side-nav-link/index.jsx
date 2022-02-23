import { useCallback } from "react";
import cx from "classnames";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Icon } from "common/icon";

import "./styles.scss";

export const SideNavLink = ({
  to,
  icon,
  title,
  onClick,
  isCompact = false,
}) => {
  const linkClassName = useCallback(
    (isActive) =>
      cx("side-nav-link", {
        "side-nav-link-active": isActive,
        "side-nav-link-compact": isCompact,
      }),
    [isCompact]
  );

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={(isActive) => linkClassName(isActive)}
    >
      <div className="icon-container">
        <Icon icon={icon} />
      </div>
      {title}
    </RouterNavLink>
  );
};
