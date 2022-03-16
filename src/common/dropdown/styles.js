export const selectStyles = {
  container: (base) => ({
    ...base,
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
  }),
  control: (base, { menuIsOpen, isFocused, ...props }) => {
    return {
      ...base,
      height: "56px",

      paddingLeft: "4px",
      paddingRight: "4px",
      boxShadow: "none",

      border: isFocused
        ? "1px solid #58BD88"
        : "1px solid rgba(238, 239, 239, 0.1)",
      backgroundColor: isFocused ? "#27332F" : "rgba(20, 20, 20, 0.8)",

      borderRadius: "4px",
      borderBottomLeftRadius: menuIsOpen ? "0px" : "4px",
      borderBottomRightRadius: menuIsOpen ? "0px" : "4px",

      "&:hover": {
        backgroundColor: isFocused ? "#27332F" : "#1D2120",
      },
    };
  },
  placeholder: (base) => ({
    ...base,
    color: "#676969",
    fontFamily: "IBM Plex Sans Regular",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  }),
  menu: (base) => {
    return {
      ...base,
      padding: "0px",
      borderRadius: "0",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      backgroundColor: "#27332F",
      boxShadow: "0px 16px 32px rgba(51, 51, 51, 0.08)",
      marginTop: "0",
      borderLeft: "1px solid #58BD88",
      borderRight: "1px solid #58BD88",
      borderBottom: "1px solid #58BD88",
    };
  },
  menuList: (base) => {
    return {
      ...base,
      padding: "0px",
    };
  },
  option: (base) => {
    return {
      ...base,
      height: "56px",
      color: "#EEEFEF",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid rgba(88, 189, 136, 1)",

      fontFamily: "IBM Plex Sans Regular",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",

      "&:hover": {
        backgroundColor: "#1D2120",
      },
    };
  },
  singleValue: (base) => ({
    ...base,
    color: "#EEEFEF",
    fontFamily: "IBM Plex Sans Regular",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  input: (base) => ({
    ...base,
    color: "#EEEFEF",
    fontFamily: "IBM Plex Sans Regular",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  }),
};
