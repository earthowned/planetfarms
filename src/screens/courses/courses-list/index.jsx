import { useState } from "react";

import { ActionButton } from "common/buttons/action-button";
import { NavigationTabs } from "common/nav-tabs";
import { DashboardLayout } from "layout/dashboard";

import "./styles.scss";

export const navTabs = [
  { title: "All Courses" },
  { title: "Paid Courses" },
  { title: "My Courses" },
  { title: "All Courses" },
  { title: "Paid Courses" },
  { title: "My Courses" },
  { title: "All Courses" },
  { title: "Paid Courses" },
  { title: "My Courses" },
  { title: "All Courses" },
  { title: "Paid Courses" },
  { title: "My Courses" },
  { title: "All Courses" },
  { title: "Paid Courses" },
  { title: "My Courses" },
];

const HorizontalPageActionBlock = ({ children }) => {
  const [leftComponent, rightComponent] = children || [];

  if (children?.length > 2 || children.length < 2) return null;

  return (
    <div className="horizontal-page-block-container">
      <div className="left-block-container">{leftComponent}</div>
      <div className="right-block-container">{rightComponent}</div>
    </div>
  );
};

export const CoursesListPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <DashboardLayout title="Courses">
      <HorizontalPageActionBlock>
        <NavigationTabs
          tabs={navTabs}
          onChange={setSelectedIndex}
          selectedIndex={selectedIndex}
        />

        <ActionButton title="Add Course" variant="primary" />
      </HorizontalPageActionBlock>
    </DashboardLayout>
  );
};
