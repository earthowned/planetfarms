import { useMemo } from "react";
import cx from "classnames";

import { Navigation } from "common/navigation";
import { ActionButton } from "common/buttons/action-button";

import { links } from "./config";

import "./styles.scss";

export const MobileMenu = ({ visible, onLogout }) => {
  const className = useMemo(
    () =>
      cx("mobile-menu-container", {
        "mobile-menu-container-visible": visible,
      }),
    [visible]
  );

  return (
    <div className={className}>
      <Navigation links={links} linkHeight={64} />

      <ActionButton
        icon="logout"
        title="Log out"
        onClick={onLogout}
        variant="transparent-red"
      />
    </div>
  );
};
