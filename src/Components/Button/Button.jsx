import React from "react";
import "./button.css";

const Button = ({ name, clickHandler }) => {
  // function submitForm(e) {
  //   e.preventDefault();
  //   clickHandler();
  // }
  return (
    <button
      type="submit"
      className="btn-default"
      // onClick={(e) => submitForm(e)}
    >
      {name}
    </button>
  );
};

export default Button;
