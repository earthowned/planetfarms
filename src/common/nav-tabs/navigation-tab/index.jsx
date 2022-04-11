import cx from "classnames";

import "./styles.scss";

export const NavigationTab = ({ title, isActive, badge, onClick }) => {
  const className = cx("nav-tab-container", {
    "nav-tab-container-active": isActive,
  });

  return (
    <div className={className} onClick={onClick}>
      <h4>{title}</h4>

      {badge && badge !== 0 && (
        <div className="nav-badge-container">
          <h5>{badge}</h5>
        </div>
      )}
    </div>
  );
};
