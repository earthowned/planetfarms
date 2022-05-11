import { useState } from "react";

import { EmptyBllock, BlockHeader } from "components/courses/common";

import { ReviewsList } from "../list";
import { AddReviewModal } from "../add-review-modal";
import { AllReviewsModal } from "../all-reviews-modal";

import "./styles.scss";

export const ReviewsBlock = ({ reviews = [], withAddButton = false }) => {
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);

  return (
    <div className="reviews-block-container">
      <BlockHeader
        title="Reviews"
        onViewAll={reviews.length > 0 ? () => setIsAllVisible(true) : null}
      />

      <ReviewsList reviews={reviews} maxLength={3} />

      <EmptyBllock
        variant="Review"
        imageSize="small"
        isAddButtonVisible={withAddButton}
        onAdd={() => setIsAddVisible(true)}
        isImageVisible={reviews.length === 0}
      />

      <AddReviewModal
        visible={isAddVisible}
        onClose={() => setIsAddVisible(false)}
      />

      <AllReviewsModal
        reviews={reviews}
        visible={isAllVisible}
        onClose={() => setIsAllVisible(false)}
        onAddReview={() => setIsAddVisible(true)}
      />
    </div>
  );
};