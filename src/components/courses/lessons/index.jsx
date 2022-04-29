import { useMemo } from "react";

import { Avatar } from "common/avatar";
import { Mobile, LaptopUp } from "common/responsive";
import {
  EmptyBllock,
  BlockHeader,
  CourseProgressBar,
} from "components/courses/common";

import "./styles.scss";

// TODO: Implement Mobile Version;
// TODO: Refactor;

const Lesson = ({ thumbnail, title, subtitle }) => {
  return (
    <div className="lesson-item">
      <LaptopUp>
        <Avatar src={thumbnail} placeholderIcon="graduation-cap" />
      </LaptopUp>

      <LaptopUp>
        <div className="info-block">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
      </LaptopUp>

      <Mobile>
        <div className="mobile-row-container">
          <Avatar src={thumbnail} placeholderIcon="graduation-cap" />
          <h4>{title}</h4>
        </div>

        <div className="info-block">
          <h5>{subtitle}</h5>
        </div>
      </Mobile>
    </div>
  );
};

const ProgressList = ({ lessons = [] }) => {
  const data = useMemo(() => {
    return lessons.reduce((prev, current, index, array) => {
      const prevItem = prev[index - 1] || null;

      return [
        ...prev,
        {
          ...current,
          isFirstItem: index === 0,
          isCompleted: current.progress > 40,
          isLastItem: index === array.length - 1,
          isPreviusCompleted: prevItem ? prevItem.progress > 40 : false,
        },
      ];
    }, []);
  }, [lessons]);

  return (
    <div className="progress-list-container">
      {data.map((lesson, index) => (
        <div key={`lesson-${lesson.id}`} className="lesson-list-item-container">
          <CourseProgressBar
            withIndex
            withProgressLine
            index={index + 1}
            progress={lesson.progress}
            isLast={lesson.isLastItem}
            isFirst={lesson.isFirstItem}
            isCompleted={lesson.isCompleted}
            isPreviusCompleted={lesson.isPreviusCompleted}
          />

          <Lesson
            thumbnail={lesson.thumbnail}
            title={`Lesson ${index + 1}`}
            subtitle={lesson.description}
          />
        </div>
      ))}
    </div>
  );
};

export const LessonsBlock = ({ lessons = [] }) => {
  return (
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />
      {lessons.length === 0 && <EmptyBllock variant="Lesson" imageSize="big" />}
      {lessons.length > 0 && <ProgressList lessons={lessons} />}
    </div>
  );
};
