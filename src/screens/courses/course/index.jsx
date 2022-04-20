import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Members } from "components/courses";
import { ContentBlocks } from "common/content";
import { ActionButton } from "common/buttons/action-button";
import { TwoColumnsGrid } from "common/grids";

import { DashboardLayout } from "layout/dashboard";
import { selectCurrentCourse } from "store/courses";

import { CourseMainInfo } from "./main-info";

import "./styles.scss";

const gridTemplateColumns = "1fr 248px";

export const CoursePage = () => {
  const { id } = useParams();

  const course = useSelector((state) => selectCurrentCourse(state, id));

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
        </TwoColumnsGrid>

        <TwoColumnsGrid templateColumns={gridTemplateColumns}>
          <ContentBlocks contentList={course?.content} />
        </TwoColumnsGrid>

        <Members
          list={course?.membersList}
          onSelectMember={() => {}}
          onViewAll={() => {}}
        />
      </div>
    </DashboardLayout>
  );
};
