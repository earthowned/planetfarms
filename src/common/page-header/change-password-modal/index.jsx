import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";

import { InputField } from "common/input";
import { CommonModal } from "common/modal";
import { ActionButton } from "common/buttons/action-button";

import { getErrorMessage } from "utils/error";
import { changePassword } from "actions/auth";

import { model, validationSchema, initialValues } from "./config";

import "./styles.scss";

export const ChangePasswordModalContainer = ({ visible, onClose }) => {
  const alert = useAlert();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ oldPassword, newPassword }) => {
    try {
      setIsLoading(true);
      await changePassword({ oldPassword, newPassword });
      alert.success("Password is successfully changed!");
      onClose();
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CommonModal visible={visible} title="Change Password" onClose={onClose}>
      <div className="change-password-modal-container">
        <h5>Do you want to change password?</h5>

        <Formik
          validateOnBlur={false}
          onSubmit={handleSubmit}
          validateOnChange={false}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ dirty }) => (
            <Form>
              <div className="inputs-container">
                <InputField {...model.old} />
                <InputField {...model.new} />
                <InputField {...model.confirm} />
              </div>

              <div className="buttons-container">
                <ActionButton
                  title="Cancel"
                  onClick={onClose}
                  variant="secondary"
                  disabled={isLoading}
                />

                <ActionButton
                  type="submit"
                  variant="primary"
                  title="Change password"
                  disabled={isLoading || !dirty}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </CommonModal>
  );
};
