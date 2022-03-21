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
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import { ReactComponent as BellIcon } from "assets/icons/bell.svg";
import { ReactComponent as GridIcon } from "assets/icons/grid.svg";
import { ReactComponent as GamburgerIcon } from "assets/icons/gamburger.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as CropIcon } from "assets/icons/crop.svg";
import { ReactComponent as CongratulationsIcon } from "assets/icons/congratulations.svg";
import { ReactComponent as UsersIcon } from "assets/icons/users.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { ReactComponent as FileIcon } from "assets/icons/file.svg";
import { ReactComponent as CameraIcon } from "assets/icons/camera.svg";
import { ReactComponent as VideoIcon } from "assets/icons/video.svg";
import { ReactComponent as MoreIcon } from "assets/icons/more.svg";
import { ReactComponent as LinkIcon } from "assets/icons/link.svg";
import { ReactComponent as FacebookOutlineIcon } from "assets/icons/facebook-outline.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "book":
      return <BookIcon />;

    case "bell":
      return <BellIcon />;

    case "calendar":
      return <CalendarIcon />;

    case "camera":
      return <CameraIcon />;

    case "congratulations":
      return <CongratulationsIcon />;

    case "cross":
      return <CrossIcon />;

    case "crop":
      return <CropIcon />;

    case "checkmark":
      return <CheckmarkIcon />;

    case "chevron-left":
      return <ChevronLeftIcon />;

    case "chevron-right":
      return <ChevronRightIcon />;

    case "chevrons-right":
      return <ChevronsRightIcon />;

    case "email":
      return <EmailIcon />;

    case "gamburger":
      return <GamburgerIcon />;

    case "google":
      return <GoogleIcon />;

    case "globe":
      return <GlobeIcon />;

    case "graduation-cap":
      return <GraduationCapIcon />;

    case "grid":
      return <GridIcon />;

    case "facebook":
      return <FacebookIcon />;

    case "facebook-outline":
      return <FacebookOutlineIcon />;

    case "file":
      return <FileIcon />;

    case "person":
      return <PersonIcon />;

    case "plus":
      return <PlusIcon />;

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

    case "logout":
      return <LogoutIcon />;

    case "link":
      return <LinkIcon />;

    case "more":
      return <MoreIcon />;

    case "trash":
      return <TrashIcon />;

    case "twitter":
      return <TwitterIcon />;

    case "users":
      return <UsersIcon />;

    case "search":
      return <SearchIcon />;

    case "youtube":
      return <VideoIcon />;

    default:
      return <GoogleIcon />;
  }
};

export const Icon = ({ icon, onClick, className }) =>
  React.cloneElement(getIcon(icon), {
    onClick,
    className: className || `${icon}-icon`,
  });
