import { useMemo } from "react";
import cx from "classnames";

import { circles, Variant } from "./config";

import "./styles.scss";

const BlurCircle = ({ position }) => {
  const className = cx("blur-circle", { [`blur-circle-${position}`]: true });
  return <div className={className} />;
};

export const BlurContainer = ({ children, variant = Variant.dashboard }) => {
  const containerClassName = useMemo(
    () =>
      cx("blur-circles-container", {
        [`blur-circles-container-${variant}`]: true,
      }),
    [variant]
  );

  return (
    <div className="blur-page-container">
      <div className={containerClassName}>
        {circles.map((position) => (
          <BlurCircle key={`blur-circle-${position}`} position={position} />
        ))}
      </div>

      <div className="page-container">{children}</div>
    </div>
  );
};
