import { TabletUp, LaptopUp } from "common/responsive";

import "./styles.scss";

export const TextBlock = ({ title, text }) => {
  return (
    <div className="content-text-block">
      <LaptopUp>{title && <h3>{title}</h3>}</LaptopUp>
      <TabletUp>{title && <h4>{title}</h4>}</TabletUp>
      {text && <h5>{text}</h5>}
    </div>
  );
};

export const ImageBlock = ({ image, description }) => {
  return (
    <div className="content-image-block">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      {description && <h5>{description}</h5>}
    </div>
  );
};
