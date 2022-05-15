// import { Formik, Form } from "formik";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { CourseForm, courseModel } from "components/courses/forms";

import { getErrorMessage } from "utils/error";
import { createCourseThunk } from "store/courses";

const initialValues = {
  [courseModel.thumbnail.name]: null,
  [courseModel.title.name]: "",
  [courseModel.price.name]: "",
  [courseModel.description.name]: [],
  [courseModel.isPublished.name]: false,
};

export const CreateCoursePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(createCourseThunk(values));
      alert.success("Course successfully created");
      history.goBack();
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <DashboardLayout title="Add Course" withBackButton>
      <CourseForm initialValues={initialValues} onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};
