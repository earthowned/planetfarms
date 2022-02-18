import { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { TabLink } from "common/links";
import { Dropdown } from "common/dropdown";

import useSizeFinder from "utils/sizeFinder";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import "./styles.scss";

export const NavTabsContainer = ({ options }) => {
  const history = useHistory();
  const location = useLocation();
  const windowWidth = useSizeFinder();

  const isTablet = useMemo(
    () => windowWidth <= TABLET_SCREEN_WIDTH,
    [windowWidth]
  );

  const currentValue = useMemo(() => {
    return options.find((option) => option.value === location.pathname);
  }, [location.pathname]);

  return (
    <>
      {isTablet && (
        <Dropdown
          options={options}
          value={currentValue}
          onChange={(selected) => history.replace(selected.value)}
        />
      )}

      {!isTablet && (
        <div className="navigation-tabs-container">
          {options.map(({ value, label, ...props }) => (
            <TabLink
              to={value}
              title={label}
              key={`${label}-nav-tab`}
              {...props}
            />
          ))}
        </div>
      )}
    </>
  );
};
