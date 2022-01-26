import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { InputField } from "common/input";
import { CheckboxField } from "common/checkbox";
import { AuthLayout } from "layout/auth-layout";
import { ActionButton } from "common/action-button";

import { register } from "actions/userAction";

import { model, validationSchema, initialValues } from "./config";

export const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onGoogleLogin = () => {
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onFacebookLogin = () => {
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const handleFormSubmit = async ({ username, password }, actions) => {
    try {
      await register(username, password)(dispatch);
      history.push("/");
    } catch (error) {
      actions.setFieldError(model.username.name, error);
    }
  };

  return (
    <AuthLayout title="Become a member">
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
              <TextLink to="/login" variant="green" title="Sign in!" />
            </div>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
