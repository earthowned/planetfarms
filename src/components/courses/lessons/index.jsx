import {
  // EmptyBllock,
  BlockHeader,
  CourseProgressBar,
} from "components/courses/common";

import "./styles.scss";

const LessonListItem = () => {
  return (
    <div className="lesson-list-item-container">
      <CourseProgressBar progress={1} />
    </div>
  );
};

export const LessonsBlock = ({ lessons = [] }) => {
  return (
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />
      {/* {lessons.length === 0 && <EmptyBllock variant="Lesson" imageSize="big" />} */}
      <LessonListItem />
    </div>
  );
};
