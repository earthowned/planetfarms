import { SideModal } from "common/side-modal";

import { ReviewsList } from "../list";

import "./styles.scss";

export const AllReviewsModal = ({ visible, onClose, reviews, onAddReview }) => {
  return (
    <SideModal
      title="Reviews"
      visible={visible}
      onClose={onClose}
      actionProps={{
        icon: "plus",
        variant: "primary",
        title: "Add Review",
        onClick: onAddReview,
      }}
    >
      <div className="all-reviews-side-modal-container">
        <ReviewsList reviews={reviews} withSeparator />
      </div>
    </SideModal>
  );
};
