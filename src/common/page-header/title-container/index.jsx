import { IconButton } from "common/buttons/icon-button";

export const TitleContainer = ({
  title,
  isTablet,
  onHomeClick,
  withBackButton,
}) => {
  if (withBackButton) {
    return <p>Back Button</p>;
  }

  if (isTablet) {
    return <IconButton icon="logo-mobile" onClick={onHomeClick} />;
  }

  return <h3>{title}</h3>;
};
