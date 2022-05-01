import { useMemo } from "react";
import { Formik, Form } from "formik";

import { Modal } from "common/modal";
import { TabletUp, LaptopUp } from "common/responsive";
import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

const defaultBtnProps = {
  title: "Add",
  onClick: null,
  variant: "primary",
};

export const ActionModal = ({
  title,
  visible,
  onClose,
  children,
  actionButtonProps,
}) => {
  if (!visible) return null;

  const actionBtnProps = useMemo(() => {
    return {
      ...defaultBtnProps,
      ...(actionButtonProps && actionButtonProps),
    };
  }, [actionButtonProps]);

  return (
    <Modal visible={visible}>
      <div className="action-modal-container">
        <div className="modal-header-container">
          <TabletUp>
            <h3>{title}</h3>
            <IconButton icon="cross" variant="white" onClick={onClose} />
          </TabletUp>

          <LaptopUp>
            <h2>{title}</h2>
          </LaptopUp>
        </div>

        <div className="modal-content-container">
          <div className="modal-scroll-container">{children && children}</div>
        </div>

        <div className="modal-buttons-container">
          <LaptopUp>
            <ActionButton
              title="Cancel"
              onClick={onClose}
              variant="secondary"
            />
          </LaptopUp>

          <ActionButton {...actionBtnProps} />
        </div>
      </div>
    </Modal>
  );
};

export const FormActionModal = ({
  title,
  visible,
  onClose,
  onSubmit,
  children,
  initialValues,
  validationSchema,
  actionButtonProps,
}) => {
  if (!visible) return null;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <ActionModal
            title={title}
            visible={visible}
            onClose={onClose}
            actionButtonProps={{
              ...actionButtonProps,
              type: "submit",
            }}
          >
            {children}
          </ActionModal>
        </Form>
      )}
    </Formik>
  );
};
