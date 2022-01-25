import React, { useState } from "react";
import { Formik } from "formik";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { Checkbox } from "common/checkbox";
import { AuthLayout } from "layout/auth-layout";
import { ActionButton } from "common/action-button";

import { model, validationSchema, initialValues } from "./config";

export const SignInPage = () => {
  const [remember, setRemember] = useState(false);

  const onGoogleLogin = () => {
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onFacebookLogin = () => {
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const handleFormSubmit = (values) => {
    console.log(values);
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
                  variant="primary"
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
                to="/register"
                variant="primary"
                title="Become a member!"
              />
            </div>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
