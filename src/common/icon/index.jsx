import React from "react";

import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "google":
      return <GoogleIcon />;

    case "facebook":
      return <FacebookIcon />;

    default:
      return <GoogleIcon />;
  }
};

export const Icon = ({ icon, onClick }) =>
  React.cloneElement(getIcon(icon), { className: `${icon}-icon`, onClick });
