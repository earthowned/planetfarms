import { useState } from "react";
import cx from "classnames";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { Navigation } from "common/navigation";

import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { links } from "./config";
import { ExpandButton } from "./expand-button";

import "./styles.scss";

// const selectCurrentCommunity = (state) => state.activeCommunity;

export const SideBarNavigation = () => {
  const history = useHistory();
  const windowWidth = useSizeFinder();

  const isTablet = windowWidth <= TABLET_SCREEN_WIDTH;

  // TODO: There is no current community in redux store;
  // const { currentCommunity } = useSelector(selectCurrentCommunity);

  const [isExpanded, setIsExpanded] = useState(true);

  if (isTablet) {
    return null;
  }

  return (
    <div
      className={cx("desktop-side-bar", {
        "desktop-side-bar-expanded": isExpanded,
      })}
    >
      <div className="header">
        <Icon
          onClick={() => history.push("/news")}
          icon={isExpanded ? "logo-small" : "logo-mobile"}
        />
      </div>

      <Navigation links={links} isExpanded={isExpanded} />

      <ExpandButton
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
};
