import { useCallback, useState, useEffect, useMemo } from "react";
import cx from "classnames";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";

import { CropperModal } from "common/modal-containers";
import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

export const DragDropZone = ({
  file,
  error,
  onChange,
  fileTypes = ["image/png", "image/jpeg"],
}) => {
  const [isCropVisible, setIsCropVisible] = useState(false);

  const className = useMemo(
    () =>
      cx("dropzone-container", {
        "dropzone-container-error": error,
      }),
    [error, file]
  );

  const dropzone = useDropzone({
    accept: fileTypes,
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
      <div className={className} {...dropzone.getRootProps()}>
        <input {...dropzone.getInputProps()} />
        {file ? (
          <img src={URL.createObjectURL(file)} alt="" />
        ) : (
          <div className="placeholders-container">
            <h5>Drag & Drop files in this area or</h5>
            <h4>Click Here to attach</h4>
          </div>
        )}
      </div>

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
        image={file ? URL.createObjectURL(file) : null}
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
