import { useMemo } from "react";

import {
  EmptyBllock,
  BlockHeader,
  ProgressList,
} from "components/courses/common";

import { LessonListItem } from "./list-item";

import "./styles.scss";

export const LessonsBlock = ({ lessons = [] }) => {
  const list = useMemo(() => {
    if (!lessons || lessons.length === 0) return [];

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
    <div className="lessons-block-container">
      <BlockHeader title="Lessons" />
      {list.length === 0 && <EmptyBllock variant="Lesson" imageSize="big" />}

      {list.length > 0 && (
        <ProgressList
          list={list}
          render={(item, index) => (
            <LessonListItem
              thumbnail={item.thumbnail}
              subtitle={item.description}
              title={`Lesson ${index + 1}`}
            />
          )}
        />
      )}
    </div>
  );
};
