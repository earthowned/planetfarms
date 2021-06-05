import React from "react";
import "./input-component.css";
import { ErrorMessage } from "@hookform/error-message";

const Input = React.forwardRef(
  ({ image, text, name, value, autoFocus, id, type, errors }, ref) => {
    return (
      <>
        <div className="input-container">
          <div className="default-input">
            {image && (
              <div className="person-outline">
                <img className="user-icon" src={image} alt="person-outline" />
              </div>
            )}
            <div className="input-content">
              {text ? (
                <div className="overhead-text">{name && name}</div>
              ) : (
                <div>&nbsp;</div>
              )}

              <input
                className="username ibmplexsans-regular-normal-monsoon-16px"
                placeholder={name && name}
                value={value}
                autoFocus={autoFocus === "autoFocus" && true}
                name={name}
                id={id}
                ref={ref}
                type={type}
              />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className="error-message">{message}</p>}
          />
        </div>
      </>
    );
  }
);

export default Input;
