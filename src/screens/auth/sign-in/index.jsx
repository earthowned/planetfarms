import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { AuthLayout } from "layout/auth";
import { Checkbox } from "common/checkbox";
import { ActionButton } from "common/buttons/action-button";
import {
  InputsContainer,
  FooterContainer,
  ButtonsContainer,
} from "components/auth";

import { api } from "api";
// import { login } from "actions/auth";
import { loginThunk } from "store/user/thunks";
import { Routes } from "constants/routes";
import { getErrorMessage } from "utils/error";

import { isNonConfirmedError } from "./helpers";
import { validationSchema, initialValues, inputs } from "./config";

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
      await dispatch(loginThunk({ name: username, password }));
      history.push(Routes.News.Home);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));

      if (isNonConfirmedError(error)) {
        await api.auth.resendEmailCode({ email: username });
        history.push({
          pathname: Routes.Auth.ConfirmEmail,
          state: { email: username, password, isFromRegister: false },
        });
      }
    }
  };

  return (
    <AuthLayout
      title="Sign In"
      isLoading={isLoading}
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          <InputsContainer inputs={inputs}>
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
          </InputsContainer>

          <ActionButton type="submit" variant="primary" title="Sign In" />

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

          <FooterContainer title="Don't have an account yet?">
            <TextLink
              replace
              to="/register"
              variant="green"
              title="Become a member!"
            />
          </FooterContainer>
        </>
      )}
    </AuthLayout>
  );
};
