import { useState } from "react";

import { NavigationTabs } from "common/nav-tabs";
import { DashboardLayout } from "layout/dashboard";
import { HorizontalContainer } from "common/containers";
import { ActionButton } from "common/buttons/action-button";

import { navigationTabs } from "./config";

import "./styles.scss";

export const CoursesListPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <DashboardLayout title="Courses">
      <HorizontalContainer>
        <NavigationTabs
          tabs={navigationTabs}
          onChange={setSelectedIndex}
          selectedIndex={selectedIndex}
        />

        <ActionButton title="Add Course" variant="primary" />
      </HorizontalContainer>
    </DashboardLayout>
  );
};
