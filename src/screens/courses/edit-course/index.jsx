import { useMemo } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { CourseForm } from "components/courses/forms";

import { getErrorMessage } from "utils/error";
import { updateCourseThunk } from "store/courses";
import { useCourse } from "hooks/courses/useCourse";
import * as courseParser from "utils/parsers/course";

export const EditCoursePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { course } = useCourse({ id });

  const initialValues = useMemo(() => {
    return courseParser.initialValues(course);
  }, [course]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(updateCourseThunk({ id, ...values }));
      alert.success("Course successfully updated");
      history.goBack();
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <DashboardLayout title="Edit Course" withBackButton>
      <CourseForm
        submitTitle="Save"
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </DashboardLayout>
  );
};
