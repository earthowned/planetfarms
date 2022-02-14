export const selectStyles = {
  container: (base) => ({
    ...base,
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
  }),
  control: (base) => ({
    ...base,
    height: "48px",
    borderRadius: "4px",
    paddingLeft: "4px",
    paddingRight: "4px",
    boxShadow: "none",
    border: "1px solid #3A3939",
    backgroundColor: "#141414",

    "&:hover": {
      borderColor: "#f8ebdf",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#8A8A8A",
    fontFamily: "IBM Plex Sans Semibold",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  }),
  menu: (base) => ({
    ...base,
    padding: "0px",
    borderRadius: "4px",
    backgroundColor: "#3a3a3a",
    boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.18)",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0px",
    borderRadius: "4px",
  }),
  option: (base, { isSelected }) => {
    return {
      ...base,
      height: "56px",
      color: "#f8ebdf",
      backgroundColor: isSelected ? "#2b2b2c" : "#3a3a3a",
      display: "flex",
      alignItems: "center",

      fontFamily: "IBM Plex Sans Semibold",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "24px",

      "&:hover": {
        backgroundColor: "#2b2b2c",
      },
      "&:active": {
        backgroundColor: "#2b2b2c",
      },
    };
  },
  singleValue: (base) => ({
    ...base,
    color: "#F8EBDF",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
};
