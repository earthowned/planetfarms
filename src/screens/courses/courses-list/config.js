import { CourseListType } from "constants/enums";

export const navigationTabs = [
  { value: CourseListType.All, title: "All Courses" },
  { value: CourseListType.Paid, title: "Paid Courses" },
  { value: CourseListType.My, title: "My Courses" },
];

export const CourseListItemVariants = [
  CourseListType.All,
  CourseListType.Paid,
  CourseListType.My,
];
