import "./styles.scss";

export const HorizontalContainer = ({ children }) => {
  const [leftComponent, rightComponent] = children || [];

  if (children?.length > 2 || children.length < 2) return null;

  return (
    <div className="horizontal-page-block-container">
      <div className="left-block-container">{leftComponent}</div>
      <div className="right-block-container">{rightComponent}</div>
    </div>
  );
};
