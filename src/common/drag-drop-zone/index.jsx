import { useCallback, useState, useEffect } from "react";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";

import { CropperModal } from "common/modal-containers";
import { IconButton } from "common/buttons/icon-button";

import { useDeviceType } from "hooks";
import { isFileInstanse } from "utils/parsers/file";

import { Dropzone } from "./dropzone";
import { ContentType, FileTypes, IconName, Placeholder } from "./config";

import "./styles.scss";

export const DragDropZone = ({
  file,
  error,
  onChange,
  placeholder,
  mobilePlaceholder,
  type = ContentType.Image,
}) => {
  const device = useDeviceType();
  const [isCropVisible, setIsCropVisible] = useState(false);

  const dropzone = useDropzone({
    accept: FileTypes[type],
    maxSize: 52428800, // 50MB
    onDrop: (files) => onChange(files[0]),
  });

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file);
    };
  }, [file]);

  const handleRemove = useCallback(() => {
    URL.revokeObjectURL(file);
    onChange(null);
  }, [file]);

  const handleCroppedImage = (newFile) => {
    setIsCropVisible(false);
    URL.revokeObjectURL(file);
    onChange(newFile);
  };

  return (
    <div className="pf-drag-drop-zone">
      <Dropzone
        file={file}
        device={device}
        withError={!!error}
        icon={IconName[type]}
        rootProps={dropzone.getRootProps()}
        inputProps={dropzone.getInputProps()}
        placeholder={placeholder || Placeholder[device][type]}
        mobilePlaceholder={mobilePlaceholder || Placeholder[device][type]}
      />

      {file && (
        <div className="buttons-container">
          <IconButton
            icon="crop"
            variant="grey"
            onClick={() => setIsCropVisible(true)}
          />

          <IconButton variant="grey" icon="trash" onClick={handleRemove} />
        </div>
      )}

      <CropperModal
        visible={isCropVisible}
        onCrop={handleCroppedImage}
        onClose={() => setIsCropVisible(false)}
        image={file && isFileInstanse(file) ? URL.createObjectURL(file) : file}
      />
    </div>
  );
};

export const DragDropZoneField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <DragDropZone
      name={name}
      error={meta.error}
      file={field.value}
      onChange={(file) => helpers.setValue(file)}
      {...props}
    />
  );
};
