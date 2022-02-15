import cx from "classnames";
import { NavLink } from "react-router-dom";

import "./styles.scss";

export const TabLink = ({ to, title, ...linkProps }) => {
  const getClassName = (isActive) =>
    cx("pf-tab-link", {
      [`pf-tab-link-active`]: isActive,
    });

  return (
    <NavLink to={to} className={getClassName} {...linkProps}>
      {title}
    </NavLink>
  );
};
