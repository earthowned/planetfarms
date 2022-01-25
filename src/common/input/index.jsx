import React, { useState, useMemo } from "react";
import cx from "classnames";
import { useField } from "formik";

import { Icon } from "common/icon";

import "./styles.scss";

const FloatingPlaceholder = ({ placeholder, value, required = false }) => {
  const className = "pf-floating-placeholder";

  const placeholderClassName = cx(className, {
    [`${className}-with-value`]: !!value,
  });

  return (
    <div className={placeholderClassName}>
      <p>{placeholder}</p>
      {required && <p className="required">*</p>}
    </div>
  );
};

export const Input = ({
  icon,
  name,
  error,
  onBlur,
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
          <input
            name={name}
            value={value}
            onBlur={onBlur}
            type={inputType}
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
