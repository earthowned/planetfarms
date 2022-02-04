import React from "react";

import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { SideNavigation } from "./side-navigation";
import { BottomNavigation } from "./bottom-navigation";

import "./styles.scss";

export const Navigation = () => {
  const windowWidth = useSizeFinder();

  const isTablet = windowWidth <= TABLET_SCREEN_WIDTH;

  return (
    <div className="pf-navigation-container">
      {isTablet ? <BottomNavigation /> : <SideNavigation />}
    </div>
  );
};
