import { useState, useMemo } from "react";
import Select from "react-select";

import { selectStyles } from "./styles";

import "./styles.scss";

export const Dropdown = ({
  value,
  label,
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
        styles={selectStyles}
        inputValue={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onInputChange={handleInputChange}
      />
    </div>
  );
};
