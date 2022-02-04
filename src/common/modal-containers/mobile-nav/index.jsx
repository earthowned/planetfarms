import React from "react";

import { SideNavLink } from "common/links/side-nav-link";

import { links } from "./config";

import "./styles.scss";

export const MobileNavModalContainer = ({ onClose }) => (
  <div className="mobile-nav-modal-container">
    <div className="mobile-nav-content-container">
      {links.map((link, index) => (
        <SideNavLink
          to={link.path}
          icon={link.icon}
          isCompact={false}
          onClick={onClose}
          title={link.title}
          variant={link.variant}
          key={`${link.title}-${index.toString()}`}
        />
      ))}
    </div>
  </div>
);
