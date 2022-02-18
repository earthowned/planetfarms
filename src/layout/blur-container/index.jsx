import { useMemo } from "react";
import cx from "classnames";

import { Variant } from "./config";

import "./styles.scss";

export const BlurContainer = ({ children, variant = Variant.dashboard }) => {
  const className = useMemo(
    () =>
      cx("blur-page-container", {
        [`blur-page-container-${variant}`]: true,
      }),
    [variant]
  );

  return <div className={className}>{children}</div>;
};
