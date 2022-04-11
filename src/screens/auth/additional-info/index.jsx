import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthLayout } from "layout/auth";
import { InputField } from "common/input";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";

import { getErrorMessage } from "utils/error";
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

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(AdditionalStep.Info);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);

      const payload = configurePayload(values);
      await updateUserInfo(payload)(dispatch);

      if (step === AdditionalStep.Info) {
        setStep(AdditionalStep.Avatar);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        history.replace("/news");
      }
    } catch (error) {
      setIsLoading(false);
      alert.error(getErrorMessage(error));
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
      isLoading={isLoading}
      subtitle={Subtitle[step]}
      title="Additional Information"
      initialValues={initialValues[step]}
      validationSchema={validationSchema[step]}
    >
      {({ dirty }) => (
        <>
          {step === AdditionalStep.Info && (
            <div className="inputs-container">
              {inputs.map((item) => (
                <InputField key={`${item.name}-input`} {...item} />
              ))}
            </div>
          )}

          {step === AdditionalStep.Avatar && (
            <DragDropZoneField type="Image" name={model.avatar.name} />
          )}

          <div className="row-container">
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
          </div>
        </>
      )}
    </AuthLayout>
  );
};
