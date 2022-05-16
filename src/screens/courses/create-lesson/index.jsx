import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { TextAreaField } from "common/text-area";
import { DashboardLayout } from "layout/dashboard";
import { TwoColumnsGrid, Flex } from "common/grids";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ContentBuilderField } from "common/content-builder";
import { ActionButtonsContainer } from "components/courses/common";

import { model, validationSchema, initialValues } from "./config";

// TODO: Use Updated Drag and Drop Zone Component

export const CreateLessonPage = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.goBack();
  };

  return (
    <DashboardLayout title="Add Lesson" withBackButton>
      <Formik
        validateOnBlur={false}
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ dirty }) => (
          <Form>
            <TwoColumnsGrid templateColumns="344px 1fr">
              <DragDropZoneField
                name={model.thumbnail.name}
                dropZoneStyles={{ height: "344px" }}
              />

              <Flex direction="column" gap="40px">
                <TextAreaField
                  maxLength={100}
                  placeholder="Title"
                  name={model.title.name}
                />

                <ContentBuilderField
                  label="Description"
                  actions={["Image", "Text"]}
                  name={model.description.name}
                />

                <ActionButtonsContainer
                  submitProps={{
                    icon: "plus",
                    disabled: !dirty,
                    title: "Add Lesson",
                  }}
                />
              </Flex>
            </TwoColumnsGrid>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  );
};
