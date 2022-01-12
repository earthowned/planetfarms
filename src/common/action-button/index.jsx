// @ts-nocheck
import React from "react";

import { Variant } from "./config";

import "./styles.scss";

export const ActionButton = ({
  title,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = Variant.primary,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`common-button ${variant} ${className}`}
    >
      <h4>{title}</h4>
    </button>
  );
};
