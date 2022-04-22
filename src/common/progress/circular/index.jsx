import { useEffect, useState, useMemo } from "react";
import cx from "classnames";

import "./styles.scss";

const CircularProgress = ({
  size,
  variant,
  percentage,
  strokeWidth = 2,
  isInfinite = false,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInfinite) setProgress(50);
    else setProgress(percentage);
  }, [percentage, isInfinite]);

  const className = useMemo(() => {
    const classname = "progress-circle";
    return cx(classname, {
      [`${classname}-${variant}`]: true,
      [`${classname}-infinite`]: isInfinite,
    });
  }, [variant, isInfinite]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        r={radius}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        className="inner-circle"
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        r={radius}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        strokeLinecap="round"
        className="outter-circle"
        strokeWidth={`${strokeWidth}px`}
        strokeDasharray={[dash, circumference - dash]}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export { CircularProgress };
