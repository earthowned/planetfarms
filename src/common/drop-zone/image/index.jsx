import { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import { useField } from "formik";

import { CropperModal } from "common/modal-containers";
import { IconButton } from "common/buttons/icon-button";

import { isFileInstanse } from "utils/parsers/file";

import { DragAndDropZone } from "../drag-drop";

import "./styles.scss";

const revokeFile = (file) => {
  if (file && isFileInstanse(file)) {
    URL.revokeObjectURL(file);
  }
};

export const ImageDragAndDropZone = ({ image, error, onDrop, sizeType }) => {
  if (!image)
    return (
      <DragAndDropZone
        type="Image"
        error={error}
        isMultiple={false}
        sizeType={sizeType}
        onDrop={(file) => onDrop(file)}
      />
    );

  const [isCropVisble, setIsCropVisible] = useState(false);

  useEffect(() => {
    return () => revokeFile(image);
  }, [image]);

  const className = useMemo(() => {
    const name = "image-drag-drop-container";
    return cx(name, { [`${name}-${sizeType}`]: true });
  }, [sizeType]);

  const imagePath = useMemo(() => {
    if (isFileInstanse(image)) {
      return URL.createObjectURL(image);
    }
    return image;
  }, [image]);

  const onCropClick = () => setIsCropVisible(true);

  const onRemoveClick = useCallback(() => {
    revokeFile(image);
    onDrop(null);
  }, [image]);

  const handleCrop = (file) => {
    setIsCropVisible(false);
    revokeFile(image);
    onDrop(file);
  };

  return (
    <div className={className}>
      <div className="image-container">
        <img src={imagePath} alt="" />
      </div>

      <div className="buttons-container">
        <IconButton icon="crop" variant="grey" onClick={onCropClick} />
        <IconButton icon="trash" variant="grey" onClick={onRemoveClick} />
      </div>

      <CropperModal
        image={imagePath}
        onCrop={handleCrop}
        visible={isCropVisble}
        onClose={() => setIsCropVisible(false)}
      />
    </div>
  );
};

export const ImageDragAndDropZoneField = ({ name, sizeType }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <ImageDragAndDropZone
      sizeType={sizeType}
      image={field.value}
      error={meta?.error}
      onDrop={(file) => helpers.setValue(file)}
    />
  );
};
