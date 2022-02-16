import { Formik, Form } from "formik";

import { Icon } from "common/icon";
import { BlurContainer } from "./blur-container";

import "./styles.scss";

export const AuthPageContainer = ({
  title,
  subtitle,
  children,
  onSubmit,
  initialValues,
  withLogo = true,
  validationSchema,
}) => {
  return (
    <BlurContainer>
      <div className="auth-page-container">
        <div className="left-container">
          <div className="auth-scroll-container">
            <div className="logo-container">
              <Icon icon="logo-small" className="left-logo-icon" />
            </div>

            <div className="form-content-container">
              <Formik
                onSubmit={onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <div className="title-container">
                      <h1>{title}</h1>
                      {subtitle && <h4>{subtitle}</h4>}
                    </div>

                    <div className="form-container">{children(props)}</div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {withLogo && (
          <div className="right-container">
            <Icon icon="logo-small" className="right-logo-icon" />
          </div>
        )}
      </div>
    </BlurContainer>
  );
};
