import { Formik, Form } from "formik";

import { Icon } from "common/icon";
import { Loader } from "common/loader";
import { BlurContainer } from "layout/blur-container";

import "./styles.scss";

export const AuthPageContainer = ({
  title,
  subtitle,
  children,
  onSubmit,
  initialValues,
  withLogo = true,
  validationSchema,
  isLoading = false,
  enableReinitialize = false,
}) => {
  return (
    <BlurContainer variant="auth">
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
                enableReinitialize={enableReinitialize}
              >
                {(props) => (
                  <Form>
                    <div className="title-container">
                      <h1>{title}</h1>
                    </div>

                    {subtitle && <h5 className="auth-subtitle">{subtitle}</h5>}

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

      {isLoading && <Loader />}
    </BlurContainer>
  );
};
