import { InputField, Input } from "common/input";
import { TextArea, TextAreaField } from "common/text-area";
import { DragDropZone, DragDropZoneField } from "common/drag-drop-zone";
import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

const FieldBlock = ({ title, onRemove, children }) => {
  return (
    <div className="news-field-block-container">
      <div className="header-container">
        <h6>{title}</h6>

        <IconButton
          icon="cross"
          onClick={onRemove}
          variant="grey-transparent"
        />
      </div>

      {children}
    </div>
  );
};

const TextFieldBlock = ({ onRemove, titleFieldName, textFieldName }) => {
  return (
    <FieldBlock title="Text Field" onRemove={onRemove}>
      <InputField placeholder="Heading (optional)" name={titleFieldName} />
      <TextAreaField name={textFieldName} placeholder="Text" minHeight="96px" />
    </FieldBlock>
  );
};

const PictureFieldBlock = ({
  onRemove,
  fileFieldName,
  descriptionFieldName,
}) => {
  return (
    <FieldBlock title="Picture Field" onRemove={onRemove}>
      <div className="drag-and-drop-container">
        <DragDropZoneField
          name={fileFieldName}
          placeholder="Drag Drop image in this area or"
        />
      </div>

      <InputField
        name={descriptionFieldName}
        placeholder="Image Desctiption (optional)"
      />
    </FieldBlock>
  );
};

const VideoFieldBlock = ({ onRemove }) => {
  return (
    <FieldBlock title="Video Field" onRemove={onRemove}>
      <div className="drag-and-drop-container">
        <DragDropZone
          name="test"
          placeholder="Drag Drop image in this area or"
        />
      </div>

      <Input placeholder="Video Title (optional)" />
      <TextArea placeholder="Description (optional)" minHeight="96px" />

      <Input placeholder="Video Link" />
    </FieldBlock>
  );
};

export const Fields = {
  TextField: TextFieldBlock,
  VideoField: VideoFieldBlock,
  PictureField: PictureFieldBlock,
};
