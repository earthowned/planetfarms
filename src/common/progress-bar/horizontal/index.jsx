import cx from "classnames";

import "./styles.scss";

const ProgressType = {
  Low: "low",
  Medium: "medium",
  Complete: "complete",
};

const getProgressType = (progress = 0) => {
  switch (true) {
    case progress < 55:
      return ProgressType.Low;

    case progress >= 55 && progress <= 80:
      return ProgressType.Medium;

    case progress > 80:
      return ProgressType.Complete;

    default:
      return ProgressType.Low;
  }
};

export const HorizontalProgressBar = ({ progress }) => {
  const type = getProgressType(progress);

  const classname = "horizontal-progress-bar-container";

  const containerClassName = cx(classname, {
    [`${classname}-${type}`]: true,
  });

  return (
    <div className={containerClassName}>
      <div
        className="progress-bar-container"
        style={{ width: `${progress || 5}%` }}
      />
      <div className="percentage-container">
        <h4>{`${progress || 0}%`}</h4>
      </div>
    </div>
  );
};
