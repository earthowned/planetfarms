import CongratulationsImage from "assets/images/congratulations.png";
import EmailImage from "assets/images/email.png";

const getImageByName = (name) => {
  switch (name) {
    case "email":
      return EmailImage;

    case "congratulations":
      return CongratulationsImage;

    default:
      return null;
  }
};

export const Image = ({ image, className }) => {
  return (
    <img
      alt=""
      loading="lazy"
      width="100%"
      height="100%"
      src={getImageByName(image)}
      className={className || `${image}-image`}
    />
  );
};
