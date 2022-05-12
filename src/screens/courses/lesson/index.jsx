import { Flex } from "common/grids";
import { DashboardLayout } from "layout/dashboard";

import { useCurrentLesson } from "hooks/courses";

import { LessonHeader } from "./header";

import "./styles.scss";

export const LessonPage = () => {
  const lesson = useCurrentLesson();

  return (
    <DashboardLayout withBackButton>
      <Flex direction="column" gap="40px">
        <LessonHeader
          title={lesson?.title}
          progress={lesson?.progress}
          thumbnail={lesson?.thumbnail}
        />
      </Flex>
    </DashboardLayout>
  );
};
