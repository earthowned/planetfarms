import { EmptyBllock } from "../empty-block";
import { BlockHeader } from "../header";

import "./styles.scss";

export const LessonsBlock = ({ lessons = [] }) => {
  return (
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />
      {lessons.length === 0 && <EmptyBllock variant="Lesson" imageSize="big" />}
    </div>
  );
};
