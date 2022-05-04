import { useState } from "react";
import { useHistory } from "react-router-dom";

import { NavigationTabs } from "common/nav-tabs";
import { DashboardLayout } from "layout/dashboard";
import { CoursesListItem } from "components/courses";
import { HorizontalContainer } from "common/containers";
import { SortButton } from "common/buttons/sort-button";
import { ActionButton } from "common/buttons/action-button";

import { useLoadMore } from "hooks";
import { useCoursesList } from "hooks/courses/useCoursesList";

import { createSortingOptions } from "./helpers";
import { navigationTabs, CourseListItemVariants } from "./config";

import "./styles.scss";

const options = createSortingOptions();

export const CoursesListPage = () => {
  const history = useHistory();

  const [sortBy, setSortBy] = useState(options[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { courses, onLoadMore, isLastPage, isLoading } = useCoursesList({
    withFakeData: true,
    sort: sortBy.value,
    filter: navigationTabs[selectedIndex].value,
  });

  const { setElementObserver } = useLoadMore({
    isLoading,
    onLoadMore,
    isLastPage,
  });

  return (
    <DashboardLayout title="Courses">
      <div className="courses-list-page">
        <HorizontalContainer>
          <NavigationTabs
            tabs={navigationTabs}
            onChange={setSelectedIndex}
            selectedIndex={selectedIndex}
          />

          <ActionButton
            icon="plus"
            variant="primary"
            title="Add Course"
            onClick={() => history.push("/courses/create")}
          />
        </HorizontalContainer>

        <SortButton
          options={options}
          onChange={setSortBy}
          selectedOption={sortBy}
        />

        <div className="courses-list-container">
          {courses.map((item, index) => (
            <CoursesListItem
              title={item.title}
              price={item.price}
              rating={item.rating}
              avatar={item.avatar}
              members={item.members}
              progress={item.progress}
              category={item.category}
              description={item.description}
              key={`courses-list-item-${item.id}`}
              variant={CourseListItemVariants[selectedIndex]}
              onClick={() => history.push(`/courses/${item.id}`)}
              ref={
                index === courses.length - 1
                  ? (node) => setElementObserver(node)
                  : null
              }
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
