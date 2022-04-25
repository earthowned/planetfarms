import { useField } from "formik";

import { LaptopUp, MobileUp } from "common/responsive";
import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

export const Stars = ({ count, onChangeValue, isFilled }) => {
  const indexes = [0, 1, 2, 3, 4];
  const icon = isFilled ? "star" : "star-outline";

  const buttonVariant = (index) => {
    return index + 1 <= count ? "star-selected" : "star";
  };

  return (
    <div className="rating-container">
      {indexes.map((index) => (
        <IconButton
          icon={icon}
          disabled={!onChangeValue}
          variant={buttonVariant(index)}
          key={`star-icon-button-${index.toString()}`}
          onClick={onChangeValue ? () => onChangeValue(index + 1) : null}
        />
      ))}
    </div>
  );
};

export const StarsRating = ({ rate = 5, isFilledStarIcon = true }) => {
  return (
    <>
      <MobileUp>
        <div className="rating-container-mobile">
          <IconButton
            disabled
            variant="star-selected"
            icon={isFilledStarIcon ? "star" : "star-outline"}
          />
          <h4>{rate}</h4>
        </div>
      </MobileUp>

      <LaptopUp>
        <Stars count={rate} isFilled={isFilledStarIcon} />
      </LaptopUp>
    </>
  );
};

export const StarsRatingField = ({ name, isFilled = true }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Stars
      count={field.value}
      error={meta?.error}
      isFilled={isFilled}
      onChangeValue={(value) => helpers.setValue(value)}
    />
  );
};
