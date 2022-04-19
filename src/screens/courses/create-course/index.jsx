import { Formik, Form } from "formik";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { InputField } from "common/input";
import { SwitchField } from "common/switch";
import { TextAreaField } from "common/text-area";
import { DashboardLayout } from "layout/dashboard";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";
import { ContentBuilderField } from "common/content-builder";

import { createCourseThunk } from "store/courses";

import { validationSchema, initialValues, model } from "./config";

import "./styles.scss";

export const CreateCoursePage = () => {
  const alert = useAlert;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await createCourseThunk(values)(dispatch);
      history.goBack();
    } catch (error) {
      alert.error(error);
    }
  };

  return (
    <DashboardLayout title="Add Course" withBackButton>
      <Formik
        validateOnBlur={false}
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="create-course-page-container">
            <div className="left-block">
              <DragDropZoneField
                name={model.avatar.name}
                dropZoneStyles={{ height: "344px" }}
              />
            </div>

            <div className="right-block">
              <div className="section-block">
                <TextAreaField
                  maxLength={100}
                  placeholder="Title"
                  name={model.title.name}
                />

                <div className="switch-container">
                  <SwitchField
                    leftLabel="Publish"
                    name={model.isPublished.name}
                  />
                </div>

                <InputField
                  type="currency"
                  name={model.price.name}
                  placeholder="Course Price"
                />
              </div>

              <ContentBuilderField
                label="Description"
                name={model.content.name}
                actions={["Image", "Text"]}
              />

              <div className="buttons-section">
                <ActionButton
                  title="Cancel"
                  variant="secondary"
                  onClick={() => history.goBack()}
                />

                <ActionButton type="submit" title="Create" variant="primary" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  );
};
