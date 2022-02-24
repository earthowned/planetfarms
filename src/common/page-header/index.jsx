import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { MobileHeader } from "./mobile-header";
import { DesktopHeader } from "./desktop-header";

export const PageHeader = ({ title = "PlanetFarms" }) => {
  const screenWidth = useSizeFinder();

  const isTablet = screenWidth <= TABLET_SCREEN_WIDTH;

  return <DesktopHeader title={title} />;
};
