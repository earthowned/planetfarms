import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Members } from "components/courses";
import { ContentBlocks } from "common/content";
import { ActionButton } from "common/buttons/action-button";

import { DashboardLayout } from "layout/dashboard";
import { selectCurrentCourse } from "store/courses";

import { CourseMainInfo } from "./main-info";

import "./styles.scss";

export const CoursePage = () => {
  const { id } = useParams();

  const course = useSelector((state) => selectCurrentCourse(state, id));

  const handleBuyCourse = () => {};

  return (
    <DashboardLayout withBackButton>
      <div className="current-course-page-container">
        <div className="header-container">
          <CourseMainInfo
            title={course?.title}
            price={course?.price}
            avatar={course?.avatar}
            rating={course?.rating}
            members={course?.members}
          />

          <ActionButton
            disabled
            variant="primary"
            title="Buy course"
            onClick={handleBuyCourse}
          />
        </div>

        <div className="course-content-container">
          <ContentBlocks contentList={course?.content} />
        </div>

        <Members
          list={course?.membersList}
          onSelectMember={() => {}}
          onViewAll={() => {}}
        />
      </div>
    </DashboardLayout>
  );
};
