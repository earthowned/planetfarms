import { useMemo } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { CourseForm, courseModel } from "components/courses/forms";

import { getErrorMessage } from "utils/error";
import { useCourse } from "hooks/courses/useCourse";
import * as courseParser from "utils/parsers/course";

export const EditCoursePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { course } = useCourse({ id });
  console.log(course);

  const initialValues = useMemo(() => {
    return courseParser.initialValues(course);
  }, [course]);

  const handleSubmit = async (values) => {
    console.log("EditCourse", values);
    // try {
    //   await dispatch(createCourseThunk(values));
    //   alert.success("Course successfully created");
    //   history.goBack();
    // } catch (error) {
    //   alert.error(getErrorMessage(error));
    // }
  };

  return (
    <DashboardLayout title="Add Course" withBackButton>
      <CourseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};
