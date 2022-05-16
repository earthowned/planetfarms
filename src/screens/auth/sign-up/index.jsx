import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { AuthLayout } from "layout/auth";
import { CheckboxField } from "common/checkbox";
import { ActionButton } from "common/buttons/action-button";
import {
  FooterContainer,
  InputsContainer,
  ButtonsContainer,
} from "components/auth";

import { Routes } from "constants/routes";
import { getErrorMessage } from "utils/error";
import { registerThunk, loginThunk } from "store/user/thunks";

import { model, validationSchema, initialValues, inputs } from "./config";

export const SignUpPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const onGoogleLogin = () => {
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onFacebookLogin = () => {
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const handleFormSubmit = async ({ email, password }) => {
    try {
      const { confirmEmail } = await dispatch(
        registerThunk({ name: email, password })
      );

      const pathname = Routes.Auth.ConfirmEmail;
      const state = {
        email,
        password,
        variant: "Confirm",
        isFromRegister: true,
      };

      if (!confirmEmail) {
        await dispatch(loginThunk({ name: email, password }));
        state.variant = "Success";
      }

      history.push({ pathname, state });
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <AuthLayout
      title="Sign Up"
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <>
          <InputsContainer inputs={inputs}>
            <CheckboxField title="I agree with" name={model.agrre.name}>
              <TextLink
                to="/register"
                variant="white"
                title="Terms of Service"
              />
            </CheckboxField>
          </InputsContainer>

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

          <FooterContainer title="Already have an account?">
            <TextLink replace to="/login" variant="green" title="Sign in!" />
          </FooterContainer>
        </>
      )}
    </AuthLayout>
  );
};
