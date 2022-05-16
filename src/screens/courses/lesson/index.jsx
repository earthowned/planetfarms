import { useParams, useHistory } from "react-router-dom";

import { ContentBlocks } from "common/content";
import { DashboardLayout } from "layout/dashboard";
import { Flex, TwoColumnsGrid } from "common/grids";
import { MeterialsBlock, TestsBlock } from "components/courses";
import { ActionButton } from "common/buttons/action-button";

import { Routes } from "constants/routes";
import { useCurrentLesson } from "hooks/courses";

import { LessonHeader } from "./header";

import "./styles.scss";

const grid = "1fr 248px";

export const LessonPage = () => {
  const history = useHistory();

  const { courseId, lessonId } = useParams();
  const { lesson, isMyLesson } = useCurrentLesson({ courseId, lessonId });

  const onEditClick = () => {
    // history.push(Routes.Courses.EditLesson);
  };

  const onAddTestClick = () => {
    const path = Routes.Courses.CreateTest;
    history.push(
      path.replace(":courseId", courseId).replace(":lessonId", lessonId)
    );
  };

  return (
    <DashboardLayout withBackButton>
      <Flex direction="column" gap="40px">
        <TwoColumnsGrid
          templateColumns={grid}
          className="lesson-page-header-grid"
        >
          <LessonHeader
            title={lesson?.title}
            progress={lesson?.progress}
            thumbnail={lesson?.thumbnail}
          />

          {isMyLesson && (
            <ActionButton
              icon="edit"
              variant="secondary"
              title="Edit Lesson"
              onClick={onEditClick}
            />
          )}
        </TwoColumnsGrid>

        <TwoColumnsGrid templateColumns={grid}>
          <ContentBlocks contentList={lesson?.content || []} />
          <MeterialsBlock
            isEditMode={isMyLesson}
            materials={lesson?.materials}
          />
        </TwoColumnsGrid>

        <TwoColumnsGrid templateColumns={grid}>
          <TestsBlock
            onStart={() => {}}
            isMyLesson={isMyLesson}
            onAddTest={onAddTestClick}
            tests={lesson?.tests || []}
            onViewAllResults={() => {}}
          />
          <div />
        </TwoColumnsGrid>
      </Flex>
    </DashboardLayout>
  );
};
