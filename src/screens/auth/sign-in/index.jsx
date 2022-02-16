import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { Checkbox } from "common/checkbox";
import { AuthPageContainer } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";

import { login } from "actions/auth";
import { getErrorMessage } from "utils/error";

import { model, validationSchema, initialValues } from "./config";

// TODO: Implement Remember me;

export const SignInPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [remember, setRemember] = useState(false);
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
      await login({ name: username, password })(dispatch);
      history.push("/news");
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <AuthPageContainer
      title="Sign In"
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
              <Checkbox
                value={remember}
                title="Remember Me"
                onChange={() => setRemember(!remember)}
              />

              <TextLink
                replace
                variant="green"
                to="/forgot-password"
                title="Forgot Password?"
              />
            </div>
          </div>

          <ActionButton type="submit" variant="primary" title="Sign In" />

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
            <h5>Don&apos;t have an account yet?</h5>

            <TextLink
              replace
              to="/register"
              variant="green"
              title="Become a member!"
            />
          </div>
        </>
      )}
    </AuthPageContainer>
  );
};
