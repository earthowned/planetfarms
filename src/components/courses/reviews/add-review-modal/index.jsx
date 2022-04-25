import { Icon } from "common/icon";
import { SideModal } from "common/side-modal";
import { TextAreaField } from "common/text-area";
import { StarsRatingField } from "common/stars-rating";

import { model, validationSchema, initialValues } from "./config";

import "./styles.scss";

const Section = ({ icon, label, children }) => {
  return (
    <div className="reviews-section-container">
      <div className="label-container">
        <Icon icon={icon} />
        <h5>{label}</h5>
      </div>

      {children}
    </div>
  );
};

export const AddReviewModal = ({ visible, onClose }) => {
  const handleFormSubmit = () => {
    onClose();
  };

  return (
    <SideModal
      visible={visible}
      onClose={onClose}
      title="Add Review"
      actionProps={{
        icon: "plus",
        title: "Add",
        type: "submit",
        variant: "primary",
      }}
      formikProps={{
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: handleFormSubmit,
      }}
    >
      <div className="add-review-side-modal-container">
        <Section icon="file" label="Review">
          <TextAreaField
            maxLength={300}
            minHeight="112px"
            name={model.review.name}
            placeholder="Add Review"
          />
        </Section>

        <Section icon="star-outline" label="Rate">
          <StarsRatingField name={model.rate.name} />
        </Section>
      </div>
    </SideModal>
  );
};
