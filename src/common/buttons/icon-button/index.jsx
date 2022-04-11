import React, { useMemo } from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import "./styles.scss";

export const IconButton = ({
  icon,
  title,
  onClick,
  disabled,
  className,
  isSelected,
  variant = "transparent",
}) => {
  const buttonClassName = useMemo(
    () => cx("pf-icon-btn", { [`pf-icon-btn-${variant}`]: true }, className),
    [variant, className, isSelected]
  );

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      <div className="icon-container">
        <Icon icon={icon} />
      </div>
      {title && title}
    </button>
  );
};
