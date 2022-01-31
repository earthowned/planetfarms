import React from "react";

// Logo
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as SmallLogoIcon } from "assets/icons/logo/small.svg";
import { ReactComponent as MobileLogoIcon } from "assets/icons/logo/mobile.svg";

// Chevrons
import { ReactComponent as ChevronsRightIcon } from "assets/icons/chevrons/right.svg";

// Chevron
import { ReactComponent as ChevronLeftIcon } from "assets/icons/chevron/left.svg";
import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron/right.svg";

import { ReactComponent as PersonIcon } from "assets/icons/person.svg";
import { ReactComponent as EyeOpenIcon } from "assets/icons/eye-on.svg";
import { ReactComponent as EyeCloseIcon } from "assets/icons/eye-off.svg";
import { ReactComponent as CheckmarkIcon } from "assets/icons/checkmark.svg";
import { ReactComponent as LockIcon } from "assets/icons/lock.svg";
import { ReactComponent as CrossIcon } from "assets/icons/cross.svg";
import { ReactComponent as GlobeIcon } from "assets/icons/globe.svg";
import { ReactComponent as BookIcon } from "assets/icons/book.svg";
import { ReactComponent as GraduationCapIcon } from "assets/icons/graduation-cap.svg";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "calendar":
      return <CalendarIcon />;

    case "cross":
      return <CrossIcon />;

    case "checkmark":
      return <CheckmarkIcon />;

    case "chevron-left":
      return <ChevronLeftIcon />;

    case "chevron-right":
      return <ChevronRightIcon />;

    case "chevrons-right":
      return <ChevronsRightIcon />;

    case "book":
      return <BookIcon />;

    case "google":
      return <GoogleIcon />;

    case "globe":
      return <GlobeIcon />;

    case "graduation-cap":
      return <GraduationCapIcon />;

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

    case "logo-mobile":
      return <MobileLogoIcon />;

    default:
      return <GoogleIcon />;
  }
};

export const Icon = ({ icon, onClick, className }) =>
  React.cloneElement(getIcon(icon), {
    onClick,
    className: className || `${icon}-icon`,
  });
