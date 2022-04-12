import { Formik, Form } from "formik";

import { InputField } from "common/input";
import { TextAreaField } from "common/text-area";
import { DashboardLayout } from "layout/dashboard";
import { DragDropZoneField } from "common/drag-drop-zone";

import { validationSchema, initialValues, model } from "./config";

import "./styles.scss";

export const CreateCoursePage = () => {
  return (
    <DashboardLayout title="Add Course" withBackButton>
      <Formik
        onSubmit={() => {}}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="create-course-page-container">
              <div className="left-block">
                <DragDropZoneField name={model.avatar.name} />
              </div>

              <div className="right-block">
                <TextAreaField
                  maxLength={100}
                  placeholder="Title"
                  name={model.title.name}
                />
                <InputField
                  name={model.price.name}
                  placeholder="Course Price"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  );
};
