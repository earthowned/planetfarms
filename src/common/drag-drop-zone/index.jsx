import { useField } from "formik";
import { useAlert } from "react-alert";
import { FileUploader } from "react-drag-drop-files";

import "./styles.scss";

export const DragDropZone = ({
  file,
  onChange,
  placeholder,
  name = "file",
  fileTypes = [],
  disabled = false,
}) => {
  const alert = useAlert();

  const handleChange = (data) => {
    onChange({
      name: data?.name,
      size: data?.size,
      type: data?.type,
      url: URL.createObjectURL(data),
    });
  };

  const handleError = (error) => {
    alert.error(error);
  };

  return (
    <FileUploader
      name={name}
      types={fileTypes}
      disabled={disabled}
      onTypeError={handleError}
      handleChange={handleChange}
    >
      <div className="pf-drag-drop-zone">
        {file?.url ? <img src={file.url} alt="" /> : <h4>{placeholder}</h4>}
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
      onChange={(file) => helpers.setValue({ ...file })}
      {...props}
    />
  );
};
