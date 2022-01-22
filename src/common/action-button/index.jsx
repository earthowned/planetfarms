/* eslint-disable react/button-has-type */
import React from "react";
import cx from "classnames";

import "./styles.scss";

export const ActionButton = ({
  title,
  onClick,
  disabled,
  className,
  type = "button",
  variant = "secondary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "action-btn",
        { [`action-btn-${variant}`]: true },
        className
      )}
    >
      {title}
    </button>
  );
};
