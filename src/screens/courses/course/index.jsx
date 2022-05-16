import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { TwoColumnsGrid } from "common/grids";
import { ActionButton } from "common/buttons/action-button";

import { DashboardLayout } from "layout/dashboard";
import { MembersBlock } from "components/courses/blocks";
import {
  ReviewsBlock,
  LessonsBlock,
  MeterialsBlock,
  CourseDescription,
} from "components/courses";

import { MoreOption } from "constants/enums";
import { useCourse } from "hooks/courses/useCourse";
import { selectCurrentUser } from "store/user/selectors";

import { CourseMainInfo } from "./main-info";
import {
  getCourseReviews,
  getCourseLessons,
  getCourseMatarials,
} from "./helpers";

import "./styles.scss";

const gridTemplateColumns = "1fr 248px";

export const CoursePage = () => {
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);

  const { id } = useParams();
  const { course } = useCourse({ id });

  // TODO: Check course.isPaid === true;
  const isPaidCourse = useMemo(() => id === "0", [id]);

  const isMyCourse = useMemo(
    () => currentUser?.userID === course?.creator?.userID,
    [course, currentUser]
  );

  const handleBuyCourse = () => {};

  const handleMoreOptionSelect = (option) => {
    switch (option.value) {
      case MoreOption.Edit:
        history.push(`/courses/${id}/edit`);
        break;

      case MoreOption.Review:
      case MoreOption.Archive:
      case MoreOption.Statistic:
        // TODO: Implement;
        break;

      default:
        break;
    }
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
            isMyCourse={isMyCourse}
            rating={course?.rating}
            members={course?.members}
            avatar={course?.thumbnail}
            onMoreOptionSelect={handleMoreOptionSelect}
          />

          {!isMyCourse && !isPaidCourse && (
            <ActionButton
              disabled
              variant="primary"
              title="Buy course"
              onClick={handleBuyCourse}
            />
          )}
        </TwoColumnsGrid>

        <TwoColumnsGrid templateColumns={gridTemplateColumns}>
          <CourseDescription description={course?.description} />
        </TwoColumnsGrid>

        <MembersBlock
          onViewAll={() => {}}
          onSelectMember={() => {}}
          list={course?.membersList}
        />

        <TwoColumnsGrid reverseMobile templateColumns={gridTemplateColumns}>
          <LessonsBlock
            isMyCourse={isMyCourse}
            lessons={getCourseLessons(id)}
          />

          <div className="column-container">
            <MeterialsBlock
              isEditMode={isMyCourse}
              materials={getCourseMatarials(id)}
            />

            <ReviewsBlock reviews={getCourseReviews(id)} />
          </div>
        </TwoColumnsGrid>
      </div>
    </DashboardLayout>
  );
};
