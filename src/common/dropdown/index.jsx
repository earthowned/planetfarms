import Select from "react-select";

import { selectStyles } from "./styles";

export const Dropdown = ({
  value,
  options,
  onChange,
  placeholder,
  isSearchable = false,
}) => {
  return (
    <Select
      value={value}
      options={options}
      onChange={onChange}
      styles={selectStyles}
      placeholder={placeholder}
      isSearchable={isSearchable}
    />
  );
};
