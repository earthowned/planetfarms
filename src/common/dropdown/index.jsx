import { useState } from "react";
import { useField } from "formik";
import Select, { components } from "react-select";

import { Divider } from "common/divider";

import { selectStyles } from "./styles";

import "./styles.scss";

const Option = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div className="react-select-option-container">{children}</div>
      <Divider backgroundColor="#58BD88" withGradient />
    </components.Option>
  );
};

export const Dropdown = ({
  value,
  label,
  error,
  options,
  onChange,
  placeholder,
  isSearchable = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (option) => {
    onChange(option);
  };

  const handleBlur = () => {
    if (inputValue) {
      handleChange({ value: inputValue, label: inputValue });
    }
  };

  const handleInputChange = (input, action) => {
    if (action.action !== "input-blur" && action.action !== "menu-close") {
      setInputValue(input);
    }
  };

  return (
    <div className="pf-dropdown-container">
      {label && <h5>{label}</h5>}

      <Select
        value={value}
        options={options}
        blurInputOnSelect
        onBlur={handleBlur}
        inputValue={inputValue}
        onChange={handleChange}
        components={{ Option }}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onInputChange={handleInputChange}
        styles={selectStyles({ error: value ? undefined : error })}
      />
    </div>
  );
};

export const DropdownField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Dropdown
      value={field.value}
      error={meta?.error}
      onChange={(option) => helpers.setValue(option)}
      {...props}
    />
  );
};
