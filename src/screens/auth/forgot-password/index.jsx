import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { TextLink } from "common/links";
import { AuthLayout } from "layout/auth";
import { ActionButton } from "common/buttons/action-button";
import {
  FooterContainer,
  InputsContainer,
  ButtonsContainer,
} from "components/auth";

import { getErrorMessage } from "utils/error";
import { requestCodeThunk, resetPasswordThunk } from "store/user/thunks";

import { validationSchema, initialValues, model } from "./config";
import {
  isCodeRequested,
  primaryButtonTitle,
  secondaryButtonTitle,
} from "./helpers";

export const ForgotPasswordPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, actions) => {
    const { codeRequested, username, code, password } = values;

    if (!codeRequested) {
      actions.setFieldValue(model.codeRequested.name, true);
    }

    try {
      if (!codeRequested) {
        const response = await dispatch(requestCodeThunk(username));
        actions.setFieldValue(model.codeRequested.name, true);

        alert.success(
          response
            ? `Code has been sent to ${response}!`
            : "Code has been sent!"
        );
      } else {
        await dispatch(resetPasswordThunk({ username, code, password }));

        alert.success("Password has been successfully changed!");
        history.push("/login");
      }
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  const handleCodeResend = async (values, setFieldValue) => {
    if (!isCodeRequested(values)) {
      setFieldValue(model.codeRequested.name, true);
      return;
    }

    if (!values.username) {
      alert.info("Username is required field!");
      return;
    }

    try {
      const response = await dispatch(requestCodeThunk(values.username));

      alert.success(
        response ? `Code has been sent to ${response}!` : "Code has been sent!"
      );
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  const generateInputs = (values) => {
    const { username, code, password, confirmPassword } = model;
    return isCodeRequested(values)
      ? [username, code, password, confirmPassword]
      : [username];
  };

  return (
    <AuthLayout
      title="Forgot Password"
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <>
          <InputsContainer inputs={generateInputs(values)} />

          <ButtonsContainer>
            <ActionButton
              type="button"
              variant="secondary"
              title={secondaryButtonTitle(values)}
              onClick={() => handleCodeResend(values, setFieldValue)}
            />

            <ActionButton
              type="submit"
              variant="primary"
              title={primaryButtonTitle(values)}
            />
          </ButtonsContainer>

          <FooterContainer title="Go back to">
            <TextLink replace to="/login" variant="green" title="Login" />
          </FooterContainer>
        </>
      )}
    </AuthLayout>
  );
};
