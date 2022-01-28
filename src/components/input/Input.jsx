/* eslint-disable react/display-name */
import React, { useState } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { ReactComponent as EyeCloseIcon } from "../../assets/images/eye-close-icon.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/images/eye-open-icon.svg";
import "./Input.scss";

// TODO: Remove after common/input will be implemented in all files;

const Input = React.forwardRef(
  (
    {
      name,
      value,
      placeholder,
      id,
      type,
      errors,
      togglePasswordVisibility,
      showPassword,
      children,
      noIcon,
      disabled,
    },
    ref
  ) => {
    const [showLabel, setShowLabel] = useState("");

    return (
      <div className="input-container">
        <div
          className={
            errors?.[`${name}`]?.message ? "block block-error" : "block"
          }
        >
          {showLabel && (
            <p className={!noIcon ? "label" : "label label-left"}>
              {placeholder}
            </p>
          )}
          <div className="field">
            {!noIcon && (
              <div
                className={
                  errors?.[`${name}`]?.message ? "icon icon-error" : "icon "
                }
              >
                {children}
              </div>
            )}

            <input
              className="inputField"
              placeholder={placeholder}
              value={value}
              name={name}
              id={id}
              ref={ref}
              type={type}
              onChange={(e) => setShowLabel(e.target.value)}
              disabled={disabled}
              autoComplete="off"
            />
            {togglePasswordVisibility && (
              <div className="pwShowHide" onClick={togglePasswordVisibility}>
                <span>
                  {showPassword ? (
                    <EyeOpenIcon className=" pwShowHide-show" />
                  ) : (
                    <EyeCloseIcon className=" pwShowHide-hide" />
                  )}
                </span>
              </div>
            )}
          </div>
        </div>
        {errors?.[`${name}`] && (
          <p className="error-message">
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => <span>{message}</span>}
            />
          </p>
        )}
      </div>
    );
  }
);

export default Input;
