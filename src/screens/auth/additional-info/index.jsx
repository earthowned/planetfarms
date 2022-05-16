import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthLayout } from "layout/auth";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";
import { InputsContainer, ButtonsContainer } from "components/auth";

import { getErrorMessage } from "utils/error";
import { setIsLoading } from "store/loader/slices";
import { updateUserInfo } from "actions/userAction";

import { configurePayload } from "./helpers";
import {
  model,
  inputs,
  Subtitle,
  initialValues,
  AdditionalStep,
  validationSchema,
} from "./config";

export const AdditionalInfoPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [step, setStep] = useState(AdditionalStep.Info);

  const onSubmit = async (values) => {
    try {
      dispatch(setIsLoading(true));

      const payload = configurePayload(values);
      await updateUserInfo(payload)(dispatch);

      if (step === AdditionalStep.Info) {
        setStep(AdditionalStep.Avatar);
      } else {
        history.replace("/news");
      }
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleSkip = () => {
    if (step === AdditionalStep.Info) {
      setStep(AdditionalStep.Avatar);
    }

    if (step === AdditionalStep.Avatar) {
      history.replace("/news");
    }
  };

  return (
    <AuthLayout
      enableReinitialize
      onSubmit={onSubmit}
      subtitle={Subtitle[step]}
      title="Additional Information"
      initialValues={initialValues[step]}
      validationSchema={validationSchema[step]}
    >
      {({ dirty }) => (
        <>
          {step === AdditionalStep.Info && <InputsContainer inputs={inputs} />}

          {step === AdditionalStep.Avatar && (
            <DragDropZoneField type="Image" name={model.avatar.name} />
          )}

          <ButtonsContainer>
            <ActionButton
              title="Skip"
              variant="secondary"
              onClick={handleSkip}
            />

            <ActionButton
              type="submit"
              title="Continue"
              disabled={!dirty}
              variant="primary"
            />
          </ButtonsContainer>
        </>
      )}
    </AuthLayout>
  );
};
