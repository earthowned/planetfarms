import { useCallback } from "react";
import cx from "classnames";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Icon } from "common/icon";
import { Avatar } from "common/avatar";

import "./styles.scss";

const Variant = {
  default: "default",
  profile: "profile",
};

export const SideNavLink = ({
  to,
  icon,
  title,
  onClick,
  height = 56,
  isCompact = false,
  variant = Variant.default,
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
      style={{ height }}
      className={(isActive) => linkClassName(isActive)}
    >
      <div className="icon-container">
        {variant === Variant.default && <Icon icon={icon} />}
        {variant === Variant.profile && <Avatar placeholderIcon="person" />}
      </div>
      {title}
    </RouterNavLink>
  );
};
