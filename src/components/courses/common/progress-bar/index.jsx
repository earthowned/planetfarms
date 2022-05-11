import { useMemo } from "react";
import cx from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";

import { Icon } from "common/icon";

import { getProgressType, Variant, Progress } from "./config";

import "./styles.scss";

const ProgressLine = ({ isFirst, isLast, isCompleted, isPreviusCompleted }) => {
  const className = "progress-line";

  const variant = useMemo(() => {
    if (isFirst) {
      return `transparent-${isCompleted ? "green" : "grey"}`;
    }

    if (isLast) {
      return `${isPreviusCompleted ? "green" : "grey"}-transparent`;
    }

    return `${isPreviusCompleted ? "green" : "grey"}-${
      isCompleted ? "green" : "grey"
    }`;
  }, [isFirst, isLast, isCompleted, isPreviusCompleted]);

  const progressClassName = useMemo(
    () => cx(className, { [`${className}-${variant}`]: true }),
    [variant]
  );

  return <div className={progressClassName} />;
};

export const CourseProgressBar = ({
  isLast,
  isFirst,
  index = 0,
  isCompleted,
  progress = 0,
  withIndex = false,
  withProgress = false,
  withProgressLine = false,
  isPreviusCompleted = false,
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

  const isIndexVisible = useMemo(() => {
    return withIndex && index;
  }, [index, withIndex, progressType]);

  const isCompleteIconVisible = useMemo(() => {
    return progressType === Progress.Completed && !isIndexVisible;
  }, [progress, progressType, isIndexVisible]);

  return (
    <div className={className}>
      {withProgressLine && (
        <ProgressLine
          isLast={isLast}
          isFirst={isFirst}
          isCompleted={isCompleted}
          isPreviusCompleted={isPreviusCompleted}
        />
      )}

      <div className="course-progress-bar">
        <CircularProgressbar value={progress} />

        <div className="inner-circle">
          {isIndexVisible && <h4>{index || 1}</h4>}
          {isProgressVisible && <h4>{`${progress || 0}%`}</h4>}
          {isCompleteIconVisible && <Icon icon="checkmark-round" />}
        </div>
      </div>
    </div>
  );
};
