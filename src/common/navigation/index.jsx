import React, { useState } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { Avatar } from "common/avatar";
import { IconButton } from "common/icon-button";
import { ActionButton } from "common/action-button";
import { SideNavLink } from "common/links/side-nav-link";

import { links } from "./config";
import { Calendar } from "./calendar";
import { ExpandButton } from "./expand-button";

import "./styles.scss";

const selectCurrentCommunity = (state) => state.activeCommunity;

const DesktopSideBarNavigation = () => {
  const history = useHistory();
  console.log("Desktop Nav Rendered");

  // TODO: There is no current community in redux store;
  const { currentCommunity } = useSelector(selectCurrentCommunity);

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={cx("desktop-side-bar", {
        "desktop-side-bar-expanded": isExpanded,
      })}
    >
      <div className="header">
        <Icon icon={isExpanded ? "logo-small" : "logo-mobile"} />
      </div>

      <div className="current-community">
        <Avatar placeholderIcon="person" />
        <h4>{currentCommunity?.name || "PlanetFarms"}</h4>
      </div>

      <nav>
        {links.map((link, index) => (
          <SideNavLink
            to={link.path}
            icon={link.icon}
            title={link.title}
            variant={link.variant}
            isCompact={!isExpanded}
            compactTitle={link.compactTitle}
            key={`${link.title}-${index.toString()}`}
          />
        ))}
      </nav>

      <div className="footer">
        {isExpanded && <Calendar />}

        {isExpanded ? (
          <ActionButton
            variant="primary"
            title="View calendar"
            onClick={() => history.replace("/calendar/my-events")}
          />
        ) : (
          <IconButton
            icon="calendar"
            className="side-menu-icon-btn"
            onClick={() => history.replace("/calendar/my-events")}
          />
        )}
      </div>

      <ExpandButton
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
};

const MobileNavigation = () => {
  const history = useHistory();

  return (
    <div className="mobile-navigation">
      <IconButton variant="transparent" icon="person" />
      <IconButton variant="transparent" icon="email" />
      <IconButton variant="transparent" icon="bell" />
      <IconButton variant="transparent" icon="gamburger" />
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className="pf-navigation-container">
      <DesktopSideBarNavigation />
      <MobileNavigation />
    </div>
  );
};
