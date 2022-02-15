import cx from "classnames";

import "./styles.scss";

const BlurCircle = ({ position }) => {
  const className = cx("blur-circle", { [`blur-circle-${position}`]: true });
  return <div className={className} />;
};

const circles = ["top", "right", "bottom", "left"];

export const BlurContainer = ({ children }) => {
  return (
    <div className="auth-blur-container">
      {/* <div className="blur-circles-container">
        {circles.map((position) => (
          <BlurCircle key={`blur-circle-${position}`} position={position} />
        ))}
      </div> */}
      <div className="page-container">{children}</div>
    </div>
  );
};
