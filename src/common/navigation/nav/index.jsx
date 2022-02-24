import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { SideNavLink } from "common/links/side-nav-link";

import "./styles.scss";

export const Navigation = ({ links, isExpanded = true }) => {
  const location = useLocation();

  const navBoardStyles = useMemo(() => {
    const defaultPosition = 0;
    const linkHeight = 56;

    const index = links.findIndex((item) =>
      location.pathname.includes(item.to)
    );

    if (index > -1) {
      return {
        visibility: "visible",
        top: index === 0 ? `${defaultPosition}px` : `${linkHeight * index}px`,
      };
    }

    return { visibility: "hidden" };
  }, [location.pathname]);

  return (
    <div className="navigation-container">
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
      </nav>

      <div className="nav-side-board" style={{ ...navBoardStyles }} />
    </div>
  );
};
