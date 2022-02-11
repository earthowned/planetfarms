import { TabLink } from "common/links";

import "./styles.scss";

// TODO: Show Dropdown if screen width is starts from tablet;

export const TabsContainer = ({ tabs }) => {
  return (
    <div className="navigation-tabs-container">
      {tabs.map(({ to, title, ...props }) => (
        <TabLink key={`${title}-nav-tab`} to={to} title={title} {...props} />
      ))}
    </div>
  );
};
