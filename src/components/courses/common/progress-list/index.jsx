import { CourseProgressBar } from "../progress-bar";

import "./styles.scss";

export const ProgressList = ({ list = [], render }) => {
  return (
    <div className="progress-list-container">
      {list.map((item, index) => (
        <div key={`lesson-${item.id}`} className="list-item-container">
          <CourseProgressBar
            withIndex
            withProgressLine
            index={index + 1}
            progress={item.progress}
            isLast={item.isLastItem}
            isFirst={item.isFirstItem}
            isCompleted={item.isCompleted}
            isPreviusCompleted={item.isPreviusCompleted}
          />

          {render && render(item, index)}
        </div>
      ))}
    </div>
  );
};
