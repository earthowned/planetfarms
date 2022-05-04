import { useMemo } from "react";
import { Formik, Form } from "formik";
import { Portal } from "react-portal";

import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

const actionBtnConfig = { variant: "primary", title: "", onClick: null };

const Content = ({ children, actionProps, withFormik = false }) => {
  return (
    <>
      <div className="content-container">{children}</div>

      {actionProps && (
        <div className="bottom-container">
          <ActionButton
            {...actionProps}
            type={withFormik ? "submit" : "button"}
          />
        </div>
      )}
    </>
  );
};

export const SideModal = ({
  title,
  visible,
  onClose,
  children,
  formikProps,
  actionProps = undefined,
}) => {
  if (!visible) return null;

  const buttonProps = useMemo(() => {
    return { ...actionBtnConfig, ...(actionProps && actionProps) };
  }, [actionProps]);

  const withFormik = useMemo(() => !!formikProps, [formikProps]);

  return (
    <Portal node={document && document.getElementById("app-portal-container")}>
      <div className="side-modal-container">
        <div className="left-container" onClick={onClose} />

        <div className="side-container">
          <div className="top-container">
            <h3>{title}</h3>
            <IconButton icon="cross" onClick={onClose} variant="white" />
          </div>

          {withFormik && (
            <Formik {...formikProps}>
              {() => (
                <Form>
                  <Content withFormik actionProps={buttonProps}>
                    {children}
                  </Content>
                </Form>
              )}
            </Formik>
          )}

          {!withFormik && (
            <Content withFormik={false} actionProps={buttonProps}>
              {children}
            </Content>
          )}

          {/* <div className="content-container">{children}</div>

          {actionProps && (
            <div className="bottom-container">
              <ActionButton {...buttonProps} />
            </div>
          )} */}
        </div>
      </div>
    </Portal>
  );
};
