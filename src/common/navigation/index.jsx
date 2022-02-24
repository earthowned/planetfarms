import React from "react";

import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { SideNavigation } from "./side-navigation";

import "./styles.scss";

export const Navigation = () => {
  const windowWidth = useSizeFinder();

  const isTablet = windowWidth <= TABLET_SCREEN_WIDTH;

  return isTablet ? null : (
    <div className="pf-navigation-container">
      <SideNavigation />
    </div>
  );
};
