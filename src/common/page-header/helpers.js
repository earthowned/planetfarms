import { DeviceType } from "constants/enums";

const isTitleVisible = (withBackButton, device) =>
  !withBackButton &&
  device !== DeviceType.Mobile &&
  device !== DeviceType.Tablet;

const isLogoVisible = (withBackButton, isExpanded, device) => {
  switch (device) {
    case DeviceType.Mobile:
      return !withBackButton && !isExpanded;

    case DeviceType.Tablet:
      return !withBackButton;

    default:
      return false;
  }
};

const isBackVisible = (withBackButton, isExpanded, device) => {
  switch (device) {
    case DeviceType.Mobile:
      return withBackButton && !isExpanded;

    default:
      return withBackButton;
  }
};

export const getVisibility = ({ withBackButton, isExpanded, device }) => {
  return {
    title: isTitleVisible(withBackButton, device),
    logo: isLogoVisible(withBackButton, isExpanded, device),
    backButton: isBackVisible(withBackButton, isExpanded, device),
  };
};
