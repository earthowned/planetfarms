import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { InputField } from "common/input";
import { SwitchField } from "common/switch";
import { TwoColumnsGrid } from "common/grids";
import { TextAreaField } from "common/text-area";
import { ActionButton } from "common/buttons/action-button";
import { ContentBuilderField } from "common/content-builder";

import { ImageDragAndDropZoneField } from "common/drop-zone";

import { model, validationSchema } from "./config";

import "./styles.scss";

const CourseForm = ({ initialValues, onSubmit, submitTitle, onRemove }) => {
  const history = useHistory();

  return (
    <Formik
      enableReinitialize
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="course-builder-container">
          <TwoColumnsGrid templateColumns="344px 1fr">
            <ImageDragAndDropZoneField
              sizeType="square"
              name={model.thumbnail.name}
            />

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
                isFromCourse
                label="Description"
                actions={["Image", "Text"]}
                name={model.description.name}
              />

              {onRemove && (
                <div className="remove-button-container">
                  <ActionButton
                    icon="trash"
                    onClick={onRemove}
                    title="Remove Course"
                    variant="transparent-red"
                  />
                </div>
              )}

              <div className="buttons-section">
                <ActionButton
                  title="Cancel"
                  variant="secondary"
                  onClick={() => history.goBack()}
                />

                <ActionButton
                  type="submit"
                  variant="primary"
                  title={submitTitle}
                />
              </div>
            </div>
          </TwoColumnsGrid>
        </Form>
      )}
    </Formik>
  );
};

export { CourseForm };
export const courseModel = model;
