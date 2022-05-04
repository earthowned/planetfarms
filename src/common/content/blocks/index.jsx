import { useEffect, useMemo } from "react";

import { TabletUp, LaptopUp } from "common/responsive";

import { isFileInstanse } from "utils/parsers/file";

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
  const imagePath = useMemo(() => {
    if (isFileInstanse(image)) {
      return URL.createObjectURL(image);
    }
    return image;
  }, [image]);

  useEffect(
    () => () => {
      if (isFileInstanse(image)) {
        URL.revokeObjectURL(image);
      }
    },
    [image]
  );

  return (
    <div className="content-image-block">
      <div className="image-container">
        <img src={imagePath} alt="" />
      </div>
      {description && <h5>{description}</h5>}
    </div>
  );
};
