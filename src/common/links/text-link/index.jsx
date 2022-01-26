import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import "./styles.scss";

export const TextLink = ({ title, variant = "green", to, ...props }) => {
  const linkClassName = cx("pf-text-link", {
    [`pf-text-link-${variant}`]: true,
  });

  return (
    <Link to={to} className={linkClassName} {...props}>
      {title}
    </Link>
  );
};
