import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { Checkbox } from "common/checkbox";
import { AuthLayout } from "layout/auth-layout";
import { ActionButton } from "common/action-button";

import { login } from "actions/userAction";

import { model, validationSchema, initialValues } from "./config";

// TODO: Implement Remember me;
// TODO: Implement Mobile Layout;
// TODO: Show some error;

export const SignInPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [remember, setRemember] = useState(false);

  const onGoogleLogin = () => {
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onFacebookLogin = () => {
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const handleFormSubmit = async ({ username, password }, formikActions) => {
    try {
      await login({ name: username, password })(dispatch);
      history.push("/news");
    } catch (error) {
      formikActions.setFieldError(model.username.name, error);
    }
  };

  return (
    <AuthLayout title="Sign In">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <InputField
                required
                icon="person"
                placeholder="Username"
                name={model.username.name}
              />

              <InputField
                required
                icon="lock"
                type="password"
                placeholder="Password"
                name={model.password.name}
              />

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
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
