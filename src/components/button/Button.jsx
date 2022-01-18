import React from "react";
import "./Button.scss";

const Button = ({ name, onClick, disabled = false, className }) => {
  return (
    <button
      type="submit"
      className={`btn-default ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
