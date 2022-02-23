import { useState, useMemo } from "react";
import cx from "classnames";
// import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Icon } from "common/icon";
import { SideNavLink } from "common/links/side-nav-link";

import { links } from "./config";
import { ExpandButton } from "./expand-button";

import "./styles.scss";

// const selectCurrentCommunity = (state) => state.activeCommunity;

export const SideNavigation = () => {
  const history = useHistory();
  const location = useLocation();

  // TODO: There is no current community in redux store;
  // const { currentCommunity } = useSelector(selectCurrentCommunity);

  const [isExpanded, setIsExpanded] = useState(true);

  const navBoardPosition = useMemo(() => {
    const defaultPosition = 0;
    const linkHeight = 56;

    const index = links.findIndex((item) =>
      location.pathname.includes(item.to)
    );
    if (index > -1) {
      return index === 0 ? defaultPosition : linkHeight * index;
    }

    return defaultPosition;
  }, [location.pathname]);

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

      <nav>
        {links.map((link, index) => (
          <SideNavLink
            to={link.to}
            icon={link.icon}
            title={link.title}
            isCompact={!isExpanded}
            key={`${link.title}-${index.toString()}`}
          />
        ))}

        <div className="nav-board" style={{ top: `${navBoardPosition}px` }} />
      </nav>

      <ExpandButton
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
};
