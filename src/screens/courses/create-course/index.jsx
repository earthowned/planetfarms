import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { Switch } from "common/switch";
import { InputField } from "common/input";
import { TextAreaField } from "common/text-area";
import { DashboardLayout } from "layout/dashboard";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";
import { ContentBuilderField } from "common/content-builder";

import { validationSchema, initialValues, model } from "./config";

import "./styles.scss";

// TODO: Implement custom switch;

export const CreateCoursePage = () => {
  const history = useHistory();

  return (
    <DashboardLayout title="Add Course" withBackButton>
      <Formik
        onSubmit={() => {}}
        validateOnBlur={false}
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

                <Switch />

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
