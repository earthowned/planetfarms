import { useCallback } from "react";
import cx from "classnames";
import { useDropzone } from "react-dropzone";

import { Icon } from "common/icon";
import { Mobile, Tablet, LaptopUp } from "common/responsive";

import { FileTypes, PlaceholderMobileTitle, PlaceholderIcon } from "./config";

import "./styles.scss";

const DesktopPlaceholder = () => {
  return (
    <>
      <p>Drag & Drop files in this area or</p>
      <h4>Click Here to attach</h4>
    </>
  );
};

const MobilePlaceholder = ({ icon, title }) => {
  return (
    <>
      <Icon icon={icon} />
      <h4>{title}</h4>
    </>
  );
};

export const DragAndDropZone = ({
  type,
  error,
  onDrop,
  isMultiple = false,
}) => {
  const handleDrop = useCallback(
    (files) => {
      if (isMultiple) onDrop(files);
      else onDrop([0]);
    },
    [isMultiple]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    multiple: isMultiple,
    maxSize: 52428800, // 50MB
    accept: FileTypes[type],
  });

  const getClassName = (className, withError) =>
    cx(className, { [`${className}-error`]: withError });

  return (
    <>
      <Mobile>
        <div
          className={getClassName("mobile-drag-and-drop-container", !!error)}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <MobilePlaceholder
            icon={PlaceholderIcon[type]}
            title={PlaceholderMobileTitle[type]}
          />
        </div>
      </Mobile>

      <Tablet>
        <div
          className={getClassName("desktop-drag-and-drop-container", !!error)}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <DesktopPlaceholder />
        </div>
      </Tablet>

      <LaptopUp>
        <div
          className={getClassName("desktop-drag-and-drop-container", !!error)}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <DesktopPlaceholder />
        </div>
      </LaptopUp>
    </>
  );
};
