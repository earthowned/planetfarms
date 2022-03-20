import { DeviceType } from "constants/enums";

export const ContentType = {
  Image: "Image",
  Video: "Video",
};

export const FileTypes = {
  [ContentType.Image]: ["image/png", "image/jpeg"],
  [ContentType.Video]: ["video/mp4", "video/mov", "video/mkv", "video/m4v"],
};

export const IconName = {
  [ContentType.Image]: "camera",
  [ContentType.Video]: "youtube",
};

const MobilePlaceholder = {
  [ContentType.Image]: "Upload Photo",
  [ContentType.Video]: "Upload Video",
};

const DesktopPlaceholder = {
  [ContentType.Image]: "Drag & Drop image in this area or",
  [ContentType.Video]: "Drag & Drop video in this area or",
};

export const Placeholder = {
  [DeviceType.Desktop]: DesktopPlaceholder,
  [DeviceType.Laptop]: DesktopPlaceholder,
  [DeviceType.Mobile]: MobilePlaceholder,
  [DeviceType.Tablet]: MobilePlaceholder,
};
