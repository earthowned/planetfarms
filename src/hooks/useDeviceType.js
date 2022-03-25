import { useEffect, useState } from "react";

import { DeviceType, DeviceMaxWidth } from "constants/enums";

const getPortraitDeviceType = (width) => {
  switch (true) {
    case width <= DeviceMaxWidth.Mobile:
      return DeviceType.Mobile;

    case width > DeviceMaxWidth.Mobile && width <= DeviceMaxWidth.Tablet:
      return DeviceType.Tablet;

    case width <= DeviceMaxWidth.Laptop:
      return DeviceType.Laptop;

    default:
      return DeviceType.Desktop;
  }
};

const getLandscapeDeviceType = (width) => {
  switch (true) {
    case width <= DeviceMaxWidth.Tablet:
      return DeviceType.Mobile;

    default:
      return DeviceType.Desktop;
  }
};

export const useDeviceType = () => {
  const [device, setDevice] = useState(DeviceType.Desktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (window.matchMedia("(orientation: portrait)").matches) {
        const type = getPortraitDeviceType(width);
        setDevice(type);
      }

      if (window.matchMedia("(orientation: landscape)").matches) {
        const type = getLandscapeDeviceType(width);
        setDevice(type);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
