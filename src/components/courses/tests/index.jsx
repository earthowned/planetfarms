import {
  BlockHeader,
  EmptyBllock,
  ProgressList,
} from "components/courses/common";

import { UserTestListItem } from "./list-item/user";
import { AdminTestListItem } from "./list-item/admin";

import "./styles.scss";

export const TestsBlock = ({
  onStart,
  onAddTest,
  tests = [],
  onViewAllResults,
  isMyLesson = false,
}) => {
  return (
    <div className="tests-block-container">
      <BlockHeader title="Tests" />

      <EmptyBllock
        imageSize="big"
        variant="Tests"
        onAdd={onAddTest}
        isAddButtonVisible={isMyLesson}
        isImageVisible={tests.length === 0}
      >
        {tests.length > 0 && (
          <ProgressList list={tests} withProgressBar={isMyLesson}>
            {(item) =>
              isMyLesson ? (
                <AdminTestListItem />
              ) : (
                <UserTestListItem
                  title={item.title}
                  progress={item.progress}
                  onStart={() => onStart(item)}
                  onViewResults={() => onViewAllResults(item)}
                />
              )
            }
          </ProgressList>
        )}
      </EmptyBllock>
    </div>
  );
};
