import { useEffect, useState, useCallback } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import { AuthLayout } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";
import {
  Placeholder,
  InputsContainer,
  ButtonsContainer,
} from "components/auth";

import { api } from "api";
import { Routes } from "constants/routes";
import { getErrorMessage } from "utils/error";

import {
  Title,
  Image,
  inputs,
  Variant,
  Subtitle,
  initialValues,
  validationSchema,
} from "./config";

export const ConfirmEmailPage = () => {
  const alert = useAlert();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [variant, setVariant] = useState(Variant.Confirm);
  const [isFromRegister, setIsFromRegister] = useState(true);

  useEffect(() => {
    const state = history.location?.state || {};

    if (state.email) {
      setEmail(state.email);
      setIsFromRegister(state.isFromRegister);
    } else {
      history.replace(Routes.Auth.Login);
    }
  }, [history.location]);

  const handleSubmit = useCallback(
    async ({ code }) => {
      try {
        setIsLoading(true);
        await api.auth.confirmEmail({ email, code });
        setVariant(Variant.Success);
      } catch (error) {
        alert.error(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    },
    [email]
  );

  const handleResendClick = useCallback(async () => {
    try {
      setIsLoading(true);
      await api.auth.resendEmailCode({ email });
      alert.success(`We've sent new confirmation code at ${email}`);
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return (
    <AuthLayout
      isLoading={isLoading}
      title={Title[variant]}
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ dirty }) => (
        <>
          <Placeholder image={Image[variant]} title={Subtitle[variant]} />

          {variant === Variant.Confirm && (
            <>
              <InputsContainer inputs={inputs}>
                <div />
                <ActionButton
                  title="Resend"
                  variant="transparent"
                  onClick={handleResendClick}
                />
              </InputsContainer>

              <ActionButton
                type="submit"
                title="Continue"
                disabled={!dirty}
                variant="primary"
              />
            </>
          )}

          {variant === Variant.Success && isFromRegister && (
            <ButtonsContainer>
              <ActionButton
                variant="secondary"
                title="Go to dashboard"
                onClick={() => history.replace(Routes.News.Home)}
              />
              <ActionButton
                title="Continue"
                variant="primary"
                onClick={() => history.replace(Routes.Auth.AdditionalInfo)}
              />
            </ButtonsContainer>
          )}
        </>
      )}
    </AuthLayout>
  );
};
