import {
  isLaptop,
  isMobile,
  isTablet,
  isDesktop,
  isLaptopUp,
  isMobileUp,
} from "hooks/useResponsive";

export const Desktop = ({ children }) => {
  return isDesktop() ? <>{children}</> : null;
};

export const Laptop = ({ children }) => {
  return isLaptop() ? <>{children}</> : null;
};

export const Tablet = ({ children }) => {
  return isTablet() ? <>{children}</> : null;
};

export const Mobile = ({ children }) => {
  return isMobile() ? <>{children}</> : null;
};

export const MobileUp = ({ children }) => {
  return isMobileUp() ? <>{children}</> : null;
};

export const LaptopUp = ({ children }) => {
  return isLaptopUp() ? <>{children}</> : null;
};
