import React from "react";

// Logo
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as SmallLogoIcon } from "assets/icons/logo/small.svg";

import { ReactComponent as PersonIcon } from "assets/icons/person.svg";
import { ReactComponent as EyeOpenIcon } from "assets/icons/eye-on.svg";
import { ReactComponent as EyeCloseIcon } from "assets/icons/eye-off.svg";
import { ReactComponent as CheckmarkIcon } from "assets/icons/checkmark.svg";
import { ReactComponent as LockIcon } from "assets/icons/lock.svg";
import { ReactComponent as CrossIcon } from "assets/icons/cross.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "cross":
      return <CrossIcon />;

    case "checkmark":
      return <CheckmarkIcon />;

    case "google":
      return <GoogleIcon />;

    case "facebook":
      return <FacebookIcon />;

    case "person":
      return <PersonIcon />;

    case "eye-on":
      return <EyeOpenIcon />;

    case "eye-off":
      return <EyeCloseIcon />;

    case "logo-small":
      return <SmallLogoIcon />;

    case "lock":
      return <LockIcon />;

    default:
      return <GoogleIcon />;
  }
};

export const Icon = ({ icon, onClick, className }) =>
  React.cloneElement(getIcon(icon), {
    onClick,
    className: className || `${icon}-icon`,
  });
