import React, { useState } from "react";
import cx from "classnames";
import { useHistory } from "react-router-dom";

import { Icon } from "common/icon";
import { Avatar } from "common/avatar";
import { IconButton } from "common/icon-button";
import { ActionButton } from "common/action-button";
import { SideNavLink } from "common/links/side-nav-link";

// import Calendar from "components/calendar/Calendar";

import { links } from "./config";
import { ExpandButton } from "./expand-button";

import "./styles.scss";

export const Navigation = () => {
  const history = useHistory();
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
        <h4>Ragrarians</h4>
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
        {/* <Calendar /> */}

        {isExpanded ? (
          <ActionButton
            variant="primary"
            title="View calendar"
            onClick={() => history.replace("/calendar/my-events")}
          />
        ) : (
          <IconButton
            icon="calendar"
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
