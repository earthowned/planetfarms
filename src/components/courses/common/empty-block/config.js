import materialImage from "assets/images/placeholders/file.png";
import memberImage from "assets/images/placeholders/member.png";
import reviewImage from "assets/images/placeholders/review.png";
import lessonBigImage from "assets/images/placeholders/lesson-big.png";
import lessonSmallImage from "assets/images/placeholders/lesson-small.png";

export const Variant = {
  Tests: "Tests",
  Member: "Member",
  Review: "Review",
  Lesson: "Lesson",
  Material: "Material",
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
  [Variant.Tests]: {
    [ImageSize.big]: lessonBigImage,
    [ImageSize.small]: lessonSmallImage,
  },
};

export const ButtonTitle = {
  [Variant.Member]: "Invite",
  [Variant.Tests]: "Add Test",
  [Variant.Lesson]: "Add Lesson",
  [Variant.Review]: "Add Review",
  [Variant.Material]: "Add Materials",
};

export const ButtonVariant = {
  [Variant.Tests]: "secondary",
  [Variant.Lesson]: "secondary",
  [Variant.Member]: "secondary",
  [Variant.Review]: "secondary",
  [Variant.Material]: "secondary",
};
