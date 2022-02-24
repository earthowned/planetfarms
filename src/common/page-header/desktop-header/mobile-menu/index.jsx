import { useMemo } from "react";
import cx from "classnames";

import { Navigation } from "common/navigation/nav";

import "./styles.scss";

export const links = [
  {
    title: "My Dashboard",
    icon: "grid",
    to: "/dashboard",
  },
  {
    title: "Communities",
    icon: "users",
    to: "/communities",
  },
  {
    title: "News",
    icon: "globe",
    to: "/news",
  },
  {
    title: "Library",
    icon: "book",
    to: "/library",
  },
  {
    title: "Courses",
    icon: "graduation-cap",
    to: "/courses",
  },
  {
    title: "Calendar",
    icon: "calendar",
    to: "/calendar/my-events",
  },
  {
    title: "Messanger",
    icon: "email",
    to: "/messenger",
  },
];

export const MobileMenu = ({ visible }) => {
  const className = useMemo(
    () =>
      cx("mobile-menu-container", {
        "mobile-menu-container-visible": visible,
      }),
    [visible]
  );

  return (
    <div className={className}>
      <Navigation links={links} />
    </div>
  );
};
