import { useState } from "react";

import { NavigationTabs } from "common/nav-tabs";
import { HorizontalContainer } from "common/containers";
import { ActionButton } from "common/buttons/action-button";

import { DashboardLayout } from "layout/dashboard";
import { CoursesListItem, CourseItemType } from "components/courses";

import { navigationTabs, mockedAllCourses } from "./config";

import "./styles.scss";

const Variant = [CourseItemType.All, CourseItemType.Paid, CourseItemType.My];

export const CoursesListPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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

        <div className="courses-list-container">
          {mockedAllCourses?.length > 0 &&
            mockedAllCourses.map((item) => (
              <CoursesListItem
                title={item.title}
                price={item.price}
                rating={item.rating}
                avatar={item.avatar}
                members={item.members}
                progress={item.progress}
                category={item.category}
                description={item.description}
                variant={Variant[selectedIndex]}
                key={`courses-list-item-${item.id}`}
                onClick={() => {}}
              />
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
