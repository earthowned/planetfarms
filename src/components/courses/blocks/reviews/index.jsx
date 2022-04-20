import { BlockHeader } from "../header";
import { EmptyBllock } from "../empty-block";

import "./styles.scss";

export const ReviewsBlock = ({ reviews = [] }) => {
  return (
    <div className="reviews-block-container">
      <BlockHeader
        title="Reviews"
        onViewAll={reviews.length > 0 ? () => {} : null}
      />

      {reviews.length === 0 && (
        <EmptyBllock variant="Review" onAdd={() => {}} />
      )}
    </div>
  );
};
