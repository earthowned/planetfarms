const getBorder = ({ withError = false, isFocused }) => {
  if (isFocused) return "1px solid #58BD88";
  if (withError) return "1px solid #DA3443";
  return "1px solid rgba(238, 239, 239, 0.1)";
};

export const selectStyles = ({ error }) => {
  return {
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

        border: getBorder({ withError: !!error, isFocused }),
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
        padding: "0px",
        color: "#EEEFEF",
        backgroundColor: "transparent",

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",

        fontFamily: "IBM Plex Sans Regular",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "center",

        "&:hover": {
          backgroundColor: "rgba(0, 148, 102, 0.15)",
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
};
