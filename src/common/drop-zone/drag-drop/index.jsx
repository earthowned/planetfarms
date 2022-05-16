import { useCallback } from "react";
import cx from "classnames";
import { useDropzone } from "react-dropzone";

import { Icon } from "common/icon";
import { TabletUp, LaptopUp } from "common/responsive";

import { FileTypes, PlaceholderMobileTitle, PlaceholderIcon } from "./config";

import "./styles.scss";

const SizeType = {
  square: "square",
  rectangle: "rectangle",
};

export const DragAndDropZone = ({
  type,
  error,
  onDrop,
  isMultiple = false,
  sizeType = SizeType.square,
}) => {
  const handleDrop = useCallback(
    (files) => {
      if (isMultiple) onDrop(files);
      else onDrop(files[0]);
    },
    [isMultiple]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    multiple: isMultiple,
    maxSize: 52428800, // 50MB
    accept: FileTypes[type],
  });

  const getClassName = useCallback(
    (className) => {
      return cx(className, {
        [`${className}-error`]: !!error,
        [`${className}-${sizeType}`]: true,
      });
    },
    [sizeType, error]
  );

  return (
    <>
      <TabletUp>
        <div
          className={getClassName("mobile-drag-and-drop-container")}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div className="placeholder-container">
            <Icon icon={PlaceholderIcon[type]} />
            <h4>{PlaceholderMobileTitle[type]}</h4>
          </div>
        </div>
      </TabletUp>

      {/* <Tablet>
        <div
          className={getClassName("mobile-drag-and-drop-container")}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <>
            <p>Drag & Drop files in this area or</p>
            <h4>Click Here to attach</h4>
          </>
        </div>
      </Tablet> */}

      <LaptopUp>
        <div
          className={getClassName("desktop-drag-and-drop-container")}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <>
            <p>Drag & Drop files in this area or</p>
            <h4>Click Here to attach</h4>
          </>
        </div>
      </LaptopUp>
    </>
  );
};
