import { EmptyBllock, BlockHeader } from "components/courses/common";

import "./styles.scss";

export const LessonsBlock = ({ lessons = [] }) => {
  return (
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />
      {lessons.length === 0 && <EmptyBllock variant="Lesson" imageSize="big" />}
    </div>
  );
};
