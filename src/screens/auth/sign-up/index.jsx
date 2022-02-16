import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { CheckboxField } from "common/checkbox";
import { AuthPageContainer } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";

import { register } from "actions/auth";
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

  const handleFormSubmit = async ({ username, password }) => {
    try {
      setIsLoading(true);
      await register({ name: username, password })(dispatch);
      history.push("/congratulations");
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <AuthPageContainer
      title="Sign Up"
      isLoading={isLoading}
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          <div className="inputs-container">
            <InputField {...model.username} />
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

          <div className="socials-container">
            <h5>Sign In with services</h5>

            <div className="row-container">
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
            </div>
          </div>

          <div className="footer">
            <h5>Already have an account?</h5>
            <TextLink replace to="/login" variant="green" title="Sign in!" />
          </div>
        </>
      )}
    </AuthPageContainer>
  );
};
