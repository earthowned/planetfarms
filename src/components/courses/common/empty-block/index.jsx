import { useMemo } from "react";

import { isTabletUp } from "hooks/useResponsive";
import { ActionButton } from "common/buttons/action-button";

import * as Config from "./config";

import "./styles.scss";

export const EmptyBllock = ({
  onAdd,
  isImageVisible = true,
  isAddButtonVisible = true,
  variant = Config.Variant.Review,
  imageSize = Config.ImageSize.small,
}) => {
  if (!isImageVisible && !isAddButtonVisible) return null;

  const isMobile = isTabletUp();

  const buttonTitle = Config.ButtonTitle[variant];
  const buttonVariant = Config.ButtonVariant[variant];

  const image = useMemo(() => {
    return isMobile
      ? Config.Image[variant][Config.ImageSize.small]
      : Config.Image[variant][imageSize];
  }, [isMobile, variant, imageSize]);

  return (
    <div className="courses-empty-block-container">
      {isImageVisible && <img src={image} alt="" />}

      {isAddButtonVisible && (
        <ActionButton
          icon="plus"
          onClick={onAdd}
          title={buttonTitle}
          variant={buttonVariant}
        />
      )}
    </div>
  );
};
