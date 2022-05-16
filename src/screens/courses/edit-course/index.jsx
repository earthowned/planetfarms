import { useMemo, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { CourseForm } from "components/courses/forms";
import { DestructiveModalContainer } from "common/modal-containers";

import { getErrorMessage } from "utils/error";
import { useCourse } from "hooks/courses/useCourse";
import * as courseParser from "utils/parsers/course";
import { updateCourseThunk, deleteCourseThunk } from "store/courses";

export const EditCoursePage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { course } = useCourse({ id });

  const [isRemoveVisible, setIsRemoveVisible] = useState(false);

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

  const onRemoveCourseClick = () => {
    setIsRemoveVisible(true);
  };

  const handleRemoveCourse = async () => {
    try {
      await dispatch(deleteCourseThunk({ id }));
      alert.success("Course successfully deleted");
      history.replace("/courses");
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
        onRemove={onRemoveCourseClick}
      />

      <DestructiveModalContainer
        title="Delete Course"
        visible={isRemoveVisible}
        actionButtonTitle="Delete"
        onActionClick={handleRemoveCourse}
        onClose={() => setIsRemoveVisible(false)}
        message="Are you sure you want to delete this Course?"
      />
    </DashboardLayout>
  );
};
