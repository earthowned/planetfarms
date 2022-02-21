import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { AuthPageContainer } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";

import { getErrorMessage } from "utils/error";
import { requestCode, resetPassword } from "actions/auth";

import { validationSchema, initialValues, model } from "./config";
import {
  isCodeRequested,
  primaryButtonTitle,
  secondaryButtonTitle,
} from "./helpers";

export const ForgotPasswordPage = () => {
  const alert = useAlert();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (values, actions) => {
    const { codeRequested, username, code, password } = values;

    if (!codeRequested) {
      actions.setFieldValue(model.codeRequested.name, true);
    }

    try {
      setIsLoading(true);

      if (!codeRequested) {
        const response = await requestCode(username);
        actions.setFieldValue(model.codeRequested.name, true);
        if (response) alert.success(`Code has been sent to ${response}!`);
        else alert.success("Code has been sent!");
        setIsLoading(false);
      } else {
        await resetPassword({ username, code, password });
        alert.success("Password has been successfully changed!");
        history.push("/login");
      }
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  };

  const handleCodeResend = async (values, setFieldValue) => {
    if (!isCodeRequested(values)) {
      setFieldValue(model.codeRequested.name, true);
      return;
    }

    if (!values.username) {
      alert.info("Username is required field!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await requestCode(values.username);
      if (response) alert.success(`Code has been sent to ${response}!`);
      else alert.success("Code has been sent!");
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthPageContainer
      isLoading={isLoading}
      title="Forgot Password"
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <>
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
        </>
      )}
    </AuthPageContainer>
  );
};
