import { useState } from "react";

import { NavigationTabs } from "common/nav-tabs";
import { DashboardLayout } from "layout/dashboard";
import { CoursesListItem } from "components/courses";
import { HorizontalContainer } from "common/containers";
import { SortButton } from "common/buttons/sort-button";
import { ActionButton } from "common/buttons/action-button";

import { useCoursesList } from "hooks/courses/useCoursesList";

import { createSortingOptions } from "./helpers";
import { navigationTabs, CourseListItemVariants } from "./config";

import "./styles.scss";

const options = createSortingOptions();

export const CoursesListPage = () => {
  const [sortBy, setSortBy] = useState(options[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { courses } = useCoursesList({
    sortType: sortBy.value,
    type: navigationTabs[selectedIndex].value,
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

          <ActionButton title="Add Course" variant="primary" />
        </HorizontalContainer>

        <SortButton
          options={options}
          onChange={setSortBy}
          selectedOption={sortBy}
        />

        <div className="courses-list-container">
          {courses.map((item) => (
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
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
