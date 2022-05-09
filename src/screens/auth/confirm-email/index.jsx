import { useEffect, useState, useCallback } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthLayout } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";
import {
  Placeholder,
  InputsContainer,
  ButtonsContainer,
} from "components/auth";

import { Routes } from "constants/routes";
import { getErrorMessage } from "utils/error";
import {
  confirmEmailThunk,
  requestConfirmEmailCodeThunk,
} from "store/user/thunks";

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
  const dispatch = useDispatch();

  const [variant, setVariant] = useState(Variant.Confirm);
  const [isFromRegister, setIsFromRegister] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });

  useEffect(() => {
    const state = history.location?.state || {};

    if (!state.email) {
      history.replace(Routes.Auth.Login);
      return;
    }

    setVariant(state.variant || Variant.Confirm);
    setIsFromRegister(state.isFromRegister || false);
    setData({ email: state.email || "", password: state.password || "" });
  }, [history.location]);

  const handleSubmit = useCallback(
    async ({ code }) => {
      try {
        await dispatch(
          confirmEmailThunk({
            code,
            email: data.email,
            password: data.password,
          })
        );

        if (isFromRegister) {
          setVariant(Variant.Success);
        } else {
          history.push(Routes.News.Home);
        }
      } catch (error) {
        alert.error(getErrorMessage(error));
      }
    },
    [data, isFromRegister]
  );

  const handleResendClick = useCallback(async () => {
    try {
      await dispatch(
        requestConfirmEmailCodeThunk({
          email: data.email,
        })
      );
      alert.success(`We've sent new confirmation code at ${data.email}`);
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  }, [data.email]);

  return (
    <AuthLayout
      title={Title[variant]}
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ dirty }) => (
        <>
          <Placeholder
            image={Image[variant]}
            title={Subtitle[variant].replace("email", data.email)}
          />

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
