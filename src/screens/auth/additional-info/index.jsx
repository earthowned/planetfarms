import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { InputField } from "common/input";
import { AuthPageContainer } from "layout/auth";
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

// TODO: Implement Congratulations Pop Up;
// TODO: Ask about migrating to email only sign up;
// TODO: Remove Congratulations Page;

export const AdditionalInfoPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(AdditionalStep.Avatar);

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

  return (
    <AuthPageContainer
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
            <div className="drag-and-drop-zone-container">
              <DragDropZoneField
                name={model.avatar.name}
                placeholder={model.avatar.placeholder}
              />
            </div>
          )}

          <div className="row-container">
            <ActionButton
              title="Skip"
              variant="secondary"
              onClick={() => history.push("/additional-info/avatar")}
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
    </AuthPageContainer>
  );
};
