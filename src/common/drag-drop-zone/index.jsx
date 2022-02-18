import { useField } from "formik";
import { useAlert } from "react-alert";
import { FileUploader } from "react-drag-drop-files";

import "./styles.scss";

export const DragDropZone = ({
  file,
  onChange,
  name = "file",
  fileTypes = [],
  disabled = false,
}) => {
  const alert = useAlert();

  return (
    <FileUploader
      name={name}
      types={fileTypes}
      disabled={disabled}
      handleChange={(data) => onChange(data)}
      onTypeError={(error) => alert.error(error)}
    >
      <div className="pf-drag-drop-zone">
        {file ? (
          <img src={URL.createObjectURL(file)} alt="" />
        ) : (
          <div className="placeholder-container">
            <h5>Drag & Drop files in this area or</h5>
            <h4>Click Here to attach</h4>
          </div>
        )}
      </div>
    </FileUploader>
  );
};

export const DragDropZoneField = ({ name, ...props }) => {
  const fieldObject = useField(name);

  const field = fieldObject[0];
  const helpers = fieldObject[2];

  return (
    <DragDropZone
      name={name}
      file={field.value}
      onChange={(file) => helpers.setValue(file)}
      {...props}
    />
  );
};
