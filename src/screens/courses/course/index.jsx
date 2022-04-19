import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { selectCurrentCourse } from "store/courses";

export const CoursePage = () => {
  const { id } = useParams();

  const course = useSelector((state) => selectCurrentCourse(state, id));

  return <DashboardLayout withBackButton />;
};
