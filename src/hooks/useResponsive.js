import { useMediaQuery } from "react-responsive";

import { DeviceMaxWidth } from "constants/enums";

export const isDesktop = () =>
  useMediaQuery({
    minWidth: DeviceMaxWidth.Laptop + 1,
  });

export const isLaptopUp = () =>
  useMediaQuery({
    minWidth: DeviceMaxWidth.Tablet + 1,
  });

export const isLaptop = () =>
  useMediaQuery({
    minWidth: DeviceMaxWidth.Tablet + 1,
    maxWidth: DeviceMaxWidth.Laptop,
  });

export const isTabletUp = () =>
  useMediaQuery({
    minWidth: 0,
    maxWidth: DeviceMaxWidth.Tablet,
  });

export const isTablet = () =>
  useMediaQuery({
    minWidth: DeviceMaxWidth.Mobile + 1,
    maxWidth: DeviceMaxWidth.Tablet,
  });

// export const isMobileUp = () =>
//   useMediaQuery({
//     minWidth: 0,
//     maxWidth: DeviceMaxWidth.Tablet,
//   });

export const isMobile = () =>
  useMediaQuery({
    maxWidth: DeviceMaxWidth.Mobile,
  });
