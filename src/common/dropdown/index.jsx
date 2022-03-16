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
  return (
    <div className="pf-dropdown-container">
      {label && <h5>{label}</h5>}

      <Select
        value={value}
        options={options}
        blurInputOnSelect
        onChange={onChange}
        styles={selectStyles}
        placeholder={placeholder}
        isSearchable={isSearchable}
      />
    </div>
  );
};
