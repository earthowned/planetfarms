import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { TwoColumnsGrid } from "common/grids";
import { ContentBlocks } from "common/content";
import { ActionButton } from "common/buttons/action-button";
import { ModalOptionsButton } from "common/buttons/modal-options-button";

import { DashboardLayout } from "layout/dashboard";
import { MembersBlock } from "components/courses/blocks";
import { MeterialsBlock, ReviewsBlock, LessonsBlock } from "components/courses";

import { useCourse } from "hooks/courses/useCourse";
import { selectCurrentUser } from "store/user/selectors";

import { CourseMainInfo } from "./main-info";
import { gridTemplateColumns, MoreOption, moreOptions } from "./config";
import {
  getCourseReviews,
  getCourseLessons,
  getCourseMatarials,
} from "./helpers";

import "./styles.scss";

const HeaderActionsBlock = ({
  onMore,
  isMyCourse,
  onBuyCourse,
  isPaidCourse,
}) => {
  if (isMyCourse)
    return (
      <ModalOptionsButton
        icon="more"
        options={moreOptions}
        onOptionSelect={onMore}
        variant="transparent-white"
      />
    );

  if (isPaidCourse) {
    return (
      <ActionButton
        disabled
        variant="primary"
        title="Buy course"
        onClick={onBuyCourse}
      />
    );
  }

  return null;
};

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

  const onBuyCourseClick = () => {};

  const onMoreOptionSelect = (option) => {
    switch (option.value) {
      case MoreOption.Edit:
        history.push(`/courses/${id}/edit`);
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
            avatar={course?.avatar}
            rating={course?.rating}
            members={course?.members}
          />

          <HeaderActionsBlock
            isMyCourse={isMyCourse}
            isPaidCourse={isPaidCourse}
            onMore={onMoreOptionSelect}
            onBuyCourse={onBuyCourseClick}
          />
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
