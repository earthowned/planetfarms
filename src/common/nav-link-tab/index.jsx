import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

// variant = ['primary', 'secondary']

export const NavLinkTab = ({
  to,
  title,
  exact = true,
  className = "",
  replace = false,
  variant = "primary",
}) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      replace={replace}
      className={`common-nav-link ${variant} ${className}`}
      activeClassName={`common-nav-link ${variant} active ${className}`}
    >
      <h4>{title}</h4>
    </NavLink>
  );
};
