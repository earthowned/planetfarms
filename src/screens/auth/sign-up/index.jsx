import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { AuthLayout } from "layout/auth";
import { InputField } from "common/input";
import { CheckboxField } from "common/checkbox";
import { ButtonsContainer } from "components/auth";
import { ActionButton } from "common/buttons/action-button";

import { register } from "actions/auth";
import { Routes } from "constants/routes";
import { getErrorMessage } from "utils/error";

import { model, validationSchema, initialValues } from "./config";

export const SignUpPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onGoogleLogin = () => {
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onFacebookLogin = () => {
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const handleFormSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      await register({ name: email, password })(dispatch);
      setIsLoading(false);

      history.push({
        pathname: Routes.Auth.ConfirmEmail,
        state: { email, isFromRegister: true },
      });
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <AuthLayout
      title="Sign Up"
      isLoading={isLoading}
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          <div className="inputs-container">
            <InputField {...model.email} />
            <InputField type="password" {...model.password} />

            <div className="row-container">
              <div className="terms-checkbox-container">
                <CheckboxField name={model.agrre.name} />

                <div className="link-container">
                  <p>I agree with</p>
                  <TextLink
                    to="/register"
                    variant="white"
                    title="Terms of Service"
                  />
                </div>
              </div>
            </div>
          </div>

          <ActionButton type="submit" variant="primary" title="Sign Up" />

          <ButtonsContainer label="Sign In with services">
            <ActionButton
              icon="google"
              title="Google"
              variant="secondary"
              onClick={onGoogleLogin}
            />

            <ActionButton
              icon="facebook"
              title="Facebook"
              variant="secondary"
              onClick={onFacebookLogin}
            />
          </ButtonsContainer>

          <div className="footer">
            <h5>Already have an account?</h5>
            <TextLink replace to="/login" variant="green" title="Sign in!" />
          </div>
        </>
      )}
    </AuthLayout>
  );
};
