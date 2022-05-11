import { ContentType } from "constants/enums";

export const FileTypes = {
  [ContentType.Image]: ["image/png", "image/jpeg"],
  [ContentType.Video]: ["video/mp4", "video/mov", "video/mkv", "video/m4v"],
  [ContentType.Material]: null,
};

export const PlaceholderIcon = {
  [ContentType.Material]: "file",
};

export const PlaceholderMobileTitle = {
  [ContentType.Material]: "Add Material",
};

export const PlaceholderDesktopTitle = {};