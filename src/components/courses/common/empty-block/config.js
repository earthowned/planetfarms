import materialImage from "assets/images/placeholders/file.png";
import lessonSmallImage from "assets/images/placeholders/lesson-small.png";
import lessonBigImage from "assets/images/placeholders/lesson-big.png";
import memberImage from "assets/images/placeholders/member.png";
import reviewImage from "assets/images/placeholders/review.png";

export const Variant = {
  Material: "Material",
  Member: "Member",
  Review: "Review",
  Lesson: "Lesson",
};

export const ImageSize = {
  small: "small",
  big: "big",
};

export const Image = {
  [Variant.Material]: {
    [ImageSize.big]: materialImage,
    [ImageSize.small]: materialImage,
  },
  [Variant.Lesson]: {
    [ImageSize.big]: lessonBigImage,
    [ImageSize.small]: lessonSmallImage,
  },
  [Variant.Member]: {
    [ImageSize.big]: memberImage,
    [ImageSize.small]: memberImage,
  },
  [Variant.Review]: {
    [ImageSize.big]: reviewImage,
    [ImageSize.small]: reviewImage,
  },
};

export const ButtonTitle = {
  [Variant.Material]: "Add Materials",
  [Variant.Lesson]: "Add Lesson",
  [Variant.Member]: "Invite",
  [Variant.Review]: "Add Review",
};

export const ButtonVariant = {
  [Variant.Material]: "secondary",
  [Variant.Lesson]: "secondary",
  [Variant.Member]: "secondary",
  [Variant.Review]: "secondary",
};
