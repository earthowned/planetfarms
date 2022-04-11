import React, { useState, useMemo } from "react";
import cx from "classnames";
import { useField } from "formik";
import InputMask from "react-input-mask";

import { Icon } from "common/icon";

import { DateInput } from "./date-input";
import { FloatingPlaceholder } from "./placeholder";

import "./styles.scss";

const InputWithType = ({ type, onBlur, onFocus, ...props }) => {
  if (type === "date") {
    return <DateInput {...props} />;
  }

  if (type === "tel") {
    return (
      <InputMask
        type={type}
        alwaysShowMask={false}
        mask="+1 (999) 999-99-99"
        {...props}
      />
    );
  }

  return <input type={type} onFocus={onFocus} onBlur={onBlur} {...props} />;
};

export const Input = ({
  icon,
  name,
  error,
  onBlur,
  onFocus,
  onChange,
  value = "",
  placeholder,
  type = "text",
  required = false,
  withFloatingPlaceholder = true,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputType = useMemo(() => {
    if (type === "password") {
      return passwordVisible ? "text" : "password";
    }
    return type;
  }, [passwordVisible, type]);

  const hasError = useMemo(() => !!error, [error]);

  return (
    <div className="pf-input">
      <div
        className={cx("content", {
          "content-error": hasError,
          "content-with-value": !!value,
        })}
      >
        {icon && <Icon icon={icon} className="input-icon" />}

        <div className="pf-input-container">
          <InputWithType
            name={name}
            value={value}
            onBlur={onBlur}
            type={inputType}
            onFocus={onFocus}
            onChange={(event) => onChange(event.target.value)}
          />

          {withFloatingPlaceholder && (
            <FloatingPlaceholder
              value={value}
              required={required}
              placeholder={placeholder}
            />
          )}
        </div>

        {type === "password" && (
          <Icon
            className="password-visible-icon"
            icon={`eye-${passwordVisible ? "on" : "off"}`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        )}
      </div>

      {hasError && <p className="error-message">{error}</p>}
    </div>
  );
};

export const InputField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Input
      id={name}
      name={name}
      error={meta?.error}
      value={field.value}
      onBlur={field.onBlur}
      onChange={(text) => helpers.setValue(text)}
      {...props}
    />
  );
};
