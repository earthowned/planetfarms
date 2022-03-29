/* eslint-disable no-nested-ternary */
import useSizeFinder from "../../../utils/sizeFinder";

const ProgressBar = ({ data = {}, isLoading, isEnroll }) => {
  const courseData = data?.data;
  const lessonData = courseData?.lessons;
  const lessonLength = lessonData.length - 1;
  const lessonIndicator = lessonLength * (115 / lessonLength);
  const accurateIndicator = lessonIndicator === 115 ? 92 : lessonIndicator;
  const windowWidth = useSizeFinder();
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className={lessonData.length > 1 ? "lesson-bar" : "no-lesson-bar"}>
      {windowWidth > 600 ? (
        <div
          style={{ width: `${accurateIndicator}%` }}
          className="lesson-progress-indicator"
        />
      ) : (
        <div
          style={{ height: `${accurateIndicator}%` }}
          className="lesson-progress-indicator"
        />
      )}
      {lessonData &&
        lessonData?.map((item, index) => {
          return (
            <div
              className="lesson-progress-content"
              key={`lesson-progress-content-${index.toString()}`}
            >
              <div>
                <div
                  className={
                    isEnroll
                      ? item?.lesson_progresses[0]?.isCompleted
                        ? "circle-wrapper-active"
                        : "circle-wrapper"
                      : "circle-wrapper"
                  }
                >
                  {isEnroll && item?.lesson_progresses[0]?.isCompleted && (
                    <div className="circle" />
                  )}
                </div>
              </div>
              <h4
                className={
                  isEnroll
                    ? item?.lesson_progresses[0]?.isCompleted
                      ? "lesson-progress-heading-active"
                      : "lesson-progress-heading"
                    : "lesson-progress-heading"
                }
              >
                {item.title}
              </h4>
            </div>
          );
        })}
    </div>
  );
};

export default ProgressBar;
