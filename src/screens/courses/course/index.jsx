import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { TwoColumnsGrid } from "common/grids";
import { ContentBlocks } from "common/content";
import { ActionButton } from "common/buttons/action-button";
// import { MembersBlock } from "components/courses/blocks";
import {
  MeterialsBlock,
  ReviewsBlock,
  LessonsBlock,
  MembersList,
} from "components/courses";

import { Routes } from "constants/routes";
import { DashboardLayout } from "layout/dashboard";
import { selectCurrentCourse } from "store/courses";
// import { selectCurrentUser } from "store/user/selectors";

import { CourseMainInfo } from "./main-info";
import {
  getCourseReviews,
  getCourseLessons,
  getCourseMatarials,
} from "./helpers";

import "./styles.scss";

const gridTemplateColumns = "1fr 248px";

export const CoursePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const course = useSelector((state) => selectCurrentCourse(state, id));
  // const currentUser = useSelector(selectCurrentUser);

  // TODO: Check course.isPaid === true;
  const isPaidCourse = useMemo(() => id === "0", [id]);

  // TODO: Check course.author === currentUser.id;
  const isMyCourse = useMemo(() => id === "0", [id]);

  const handleBuyCourse = () => {};

  const onAddLessonClick = () => {
    const path = Routes.Courses.CreateLesson.replace(":courseId", id);
    history.push(path);
  };

  return (
    <DashboardLayout withBackButton>
      <div className="current-course-page-container">
        <TwoColumnsGrid
          reverseMobile={false}
          templateColumns={gridTemplateColumns}
        >
          <CourseMainInfo
            title={course?.title}
            price={course?.price}
            isPaid={isPaidCourse}
            avatar={course?.avatar}
            rating={course?.rating}
            members={course?.members}
          />

          {!isPaidCourse && !isMyCourse && (
            <ActionButton
              disabled
              variant="primary"
              title="Buy course"
              onClick={handleBuyCourse}
            />
          )}
        </TwoColumnsGrid>

        <TwoColumnsGrid templateColumns={gridTemplateColumns}>
          <ContentBlocks contentList={course?.content} />
        </TwoColumnsGrid>

        <MembersList
          variant="preview"
          list={course?.members || []}
          onViewAll={() =>
            history.push(Routes.Courses.Members.replace(":id", id))
          }
          onSelectMember={() =>
            history.push(Routes.Courses.Members.replace(":id", id))
          }
        />

        <TwoColumnsGrid reverseMobile templateColumns={gridTemplateColumns}>
          <LessonsBlock
            isMyCourse={isMyCourse}
            lessons={getCourseLessons(id)}
            onAddLesson={onAddLessonClick}
          />

          <div className="column-container">
            <MeterialsBlock
              isEditMode={false}
              materials={getCourseMatarials(id)}
              // isEditMode={course?.author === currentUser?.id}
            />

            <ReviewsBlock reviews={getCourseReviews(id)} />
          </div>
        </TwoColumnsGrid>
      </div>
    </DashboardLayout>
  );
};
