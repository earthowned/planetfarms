import { Image } from "common/image";

import "./styles.scss";

export const Placeholder = ({ image, title }) => {
  return (
    <div className="auth-placeholder-container">
      {image && <Image image={image} />}
      {title && <h5>{title}</h5>}
    </div>
  );
};
