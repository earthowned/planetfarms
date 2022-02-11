import { useState } from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { InputField } from "common/input";
import { AuthLayout } from "layout/auth-layout";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";

import { getErrorMessage } from "utils/error";
import { updateUserInfo } from "actions/userAction";

import { configurePayload } from "./helpers";
import { model, inputs, validationSchema, intitalValues } from "./config";

import "./styles.scss";

export const CongratulationsPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    try {
      setIsLoading(true);
      const payload = configurePayload(values);
      await updateUserInfo(payload)(dispatch);
      history.push("/news");
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <AuthLayout
      withLogo={false}
      isLoading={isLoading}
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
                  fileTypes={["JPG", "PNG", "JPEG"]}
                  placeholder={model.avatar.placeholder}
                />
              </div>

              {inputs.map((inputData) => (
                <InputField key={inputData.placeholder} {...inputData} />
              ))}

              <div className="buttons-container">
                <ActionButton
                  type="button"
                  variant="secondary"
                  title="Skip for now"
                  onClick={() => history.push("/news")}
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
