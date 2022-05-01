import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TwoColumnsGrid } from "common/grids";
import { ContentBlocks } from "common/content";
import { ActionButton } from "common/buttons/action-button";
import { MembersBlock } from "components/courses/blocks";
import { MeterialsBlock, ReviewsBlock, LessonsBlock } from "components/courses";

import { DashboardLayout } from "layout/dashboard";
import { selectCurrentCourse } from "store/courses";
// import { selectCurrentUser } from "store/user/selectors";

import { CourseMainInfo } from "./main-info";
import {
  getCourseMatarials,
  getCourseReviews,
  getCourseLessons,
} from "./helpers";

import "./styles.scss";

const gridTemplateColumns = "1fr 248px";

export const CoursePage = () => {
  const { id } = useParams();
  const course = useSelector((state) => selectCurrentCourse(state, id));
  // const currentUser = useSelector(selectCurrentUser);

  // TODO: Check course.isPaid === true;
  const isPaidCourse = useMemo(() => id === "0", [id]);

  // TODO: Check course.author === currentUser.id;
  const isMyCourse = useMemo(() => id === "0", [id]);

  const handleBuyCourse = () => {};

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

        <MembersBlock
          list={course?.membersList}
          onSelectMember={() => {}}
          onViewAll={() => {}}
        />

        <TwoColumnsGrid reverseMobile templateColumns={gridTemplateColumns}>
          <LessonsBlock lessons={getCourseLessons(id)} />

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
