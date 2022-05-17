import "./styles.scss";

export const Flex = ({ gap, direction, align, justify, children, styles }) => {
  return (
    <div
      className="flex-container"
      style={{
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
