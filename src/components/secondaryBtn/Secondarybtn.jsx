import React from "react";
import "./SecondaryBtn.scss";

const Secondarybtn = ({ name, image, clickHandler = () => {} }) => {
  return (
    /* to change the width of the button
            wrap container class around button component (not in this component)
            and specify the width in the component
            where you call this btn component */
    <button
      type="button"
      className="secondary-btn-variant"
      onClick={() => clickHandler()}
    >
      <span>{name}</span>
      {image && <img src={image} alt={name} />}
    </button>
  );
};

export default Secondarybtn;
