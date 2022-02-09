import { Formik, Form } from "formik";

import { InputField } from "common/input";
import { AuthLayout } from "layout/auth-layout";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";

import { model, inputs, validationSchema, intitalValues } from "./config";

import "./styles.scss";

export const CongratulationsPage = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout
      withLogo={false}
      title="Congratulations!"
      subtitle="Please fill these fields to communicate with other people easier:"
    >
      <div className="congratulations-page-container">
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleFormSubmit}
          initialValues={intitalValues}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="form-grid-layout">
              <div className="grag-and-drop-container">
                <DragDropZoneField
                  name={model.avatar.name}
                  fileTypes={["JPG", "PNG"]}
                  placeholder={model.avatar.placeholder}
                />
              </div>

              {inputs.map((inputData) => (
                <InputField key={inputData.placeholder} {...inputData} />
              ))}

              <div className="buttons-container">
                <ActionButton
                  type="button"
                  title="Skip for now"
                  variant="secondary"
                  onClick={() => {}}
                />

                <ActionButton
                  type="submit"
                  title="Continue"
                  variant="primary"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </AuthLayout>
  );
};
