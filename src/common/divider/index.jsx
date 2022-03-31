import { useCallback } from "react";

import "./styles.scss";

export const Divider = ({
  style,
  backgroundColor,
  withLeftGradient = false,
  withRightGradient = false,
}) => {
  const getBackground = useCallback(() => {
    if (!withLeftGradient && !withRightGradient) {
      return backgroundColor;
    }

    if (withLeftGradient && withRightGradient) {
      return `linear-gradient(90deg, 
        rgba(238, 239, 239, 0) 0%, 
        ${backgroundColor} 49.47%, 
        rgba(238, 239, 239, 0) 100%)`;
    }

    if (withLeftGradient) {
      return `linear-gradient(90deg, 
        rgba(88, 189, 136, 0) 100%, 
        ${backgroundColor} 30.07%)`;
    }

    return `linear-gradient(90deg, 
      ${backgroundColor} 30.07%, 
      rgba(88, 189, 136, 0) 100%)`;
  }, [backgroundColor, withLeftGradient, withRightGradient]);

  return (
    <div
      className="divider"
      style={{ ...style, background: getBackground() }}
    />
  );
};
