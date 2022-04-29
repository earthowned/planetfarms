import { useMemo } from "react";
import cx from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";

import { Icon } from "common/icon";

import { getProgressType, Variant, Progress } from "./config";

import "./styles.scss";

export const CourseProgressBar = ({
  index,
  progress = 0,
  withIndex = false,
  withProgress = false,
}) => {
  const progressType = useMemo(() => {
    return getProgressType(progress);
  }, [progress]);

  const className = useMemo(() => {
    const classname = "course-progress-bar-container";
    return cx(classname, { [`${classname}-${Variant[progressType]}`]: true });
  }, [progressType]);

  const isProgressVisible = useMemo(() => {
    return progress !== 100 && withProgress && progress;
  }, [withProgress, progress]);

  const isCompleteIconVisible = useMemo(() => {
    return progressType === Progress.Completed && progress === 100;
  }, [progress, progressType]);

  const isIndexVisible = useMemo(() => {
    return withIndex && index && progressType !== Progress.Completed;
  }, [index, withIndex, progressType]);

  return (
    <div className={className}>
      <CircularProgressbar value={progress} />
      <div className="inner-circle">
        {isIndexVisible && <h4>{index || 1}</h4>}
        {isProgressVisible && <h4>{`${progress || 0}%`}</h4>}
        {isCompleteIconVisible && <Icon icon="checkmark-round" />}
      </div>
    </div>
  );
};
