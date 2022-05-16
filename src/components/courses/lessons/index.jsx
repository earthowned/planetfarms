import {
  EmptyBllock,
  BlockHeader,
  ProgressList,
} from "components/courses/common";

import { LessonListItem } from "./list-item";

import "./styles.scss";

export const LessonsBlock = ({
  onAddLesson,
  lessons = [],
  onSelectLesson,
  isMyCourse = false,
}) => {
  return (
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />

      <EmptyBllock
        imageSize="big"
        variant="Lesson"
        onAdd={onAddLesson}
        isImageVisible={lessons.length === 0}
        // isAddButtonVisible={isMyCourse}
      >
        {lessons.length > 0 && (
          <ProgressList list={lessons} withProgressBar={isMyCourse}>
            {(item, index) => (
              <LessonListItem
                isMyCourse={isMyCourse}
                thumbnail={item.thumbnail}
                subtitle={item.description}
                title={`Lesson ${index + 1}`}
                onClick={() => onSelectLesson(item)}
              />
            )}
          </ProgressList>
        )}
      </EmptyBllock>
    </div>
  );
};
