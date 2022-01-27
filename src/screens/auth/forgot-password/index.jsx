import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { AuthLayout } from "layout/auth-layout";
import { ActionButton } from "common/action-button";

import { requestCode, resetPassword } from "actions/userAction";

import { validationSchema, initialValues, model } from "./config";
import {
  isCodeRequested,
  primaryButtonTitle,
  secondaryButtonTitle,
} from "./helpers";

export const ForgotPasswordPage = () => {
  const history = useHistory();

  const handleFormSubmit = async (values, actions) => {
    const { codeRequested, username, code, password } = values;

    if (!codeRequested) {
      actions.setFieldValue(model.codeRequested.name, true);
    }

    try {
      if (!codeRequested) {
        await requestCode(username);
        actions.setFieldValue(model.codeRequested.name, true);
        // TODO: Show Success Alert
      } else {
        await resetPassword({ username, code, password });
        // TODO: Show Success Alert (Password has been successfully changed);
        history.push("/login");
      }
    } catch (error) {
      // TODO: Show Error alert;
    }
  };

  const handleCodeResend = async (values, setFieldValue) => {
    if (!isCodeRequested(values)) {
      setFieldValue(model.codeRequested.name, true);
      return;
    }

    if (!values.username) {
      // TODO: Show Error Alert;
      return;
    }

    try {
      await requestCode(values.username);
      // TODO: Show Success Alert;
    } catch (error) {
      // TODO: Show Error alert;
    }
  };

  return (
    <AuthLayout title="Forgot Password">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="inputs-container">
              <InputField {...model.username} />

              {values[model.codeRequested.name] && (
                <>
                  <InputField {...model.code} />
                  <InputField type="password" {...model.password} />
                  <InputField type="password" {...model.confirmPassword} />
                </>
              )}

              <div className="row-container">
                <ActionButton
                  type="button"
                  variant="secondary"
                  title={secondaryButtonTitle(values)}
                  onClick={() => handleCodeResend(values, setFieldValue)}
                />

                <ActionButton
                  type="submit"
                  variant="primary"
                  title={primaryButtonTitle(values)}
                />
              </div>
            </div>

            <div className="footer">
              <h5>Go back to</h5>
              <TextLink replace to="/login" variant="green" title="Login" />
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
