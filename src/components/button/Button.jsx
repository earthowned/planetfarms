// @ts-nocheck
import React from "react";
import "./Button.scss";

const Button = ({
  name,
  onClick,
  className = "",
  type = "submit",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-default ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
