import { ActionButton } from "common/buttons/action-button";

import * as Config from "./config";

import "./styles.scss";

export const EmptyBllock = ({
  onAdd,
  variant = Config.Variant.Review,
  imageSize = Config.ImageSize.small,
}) => {
  const buttonTitle = Config.ButtonTitle[variant];
  const image = Config.Image[variant][imageSize];
  const buttonVariant = Config.ButtonVariant[variant];

  return (
    <div className="courses-empty-block-container">
      <img src={image} alt="" />
      <ActionButton
        icon="plus"
        onClick={onAdd}
        title={buttonTitle}
        variant={buttonVariant}
      />
    </div>
  );
};
